const express = require("express");
const Entry = require("../models/entry");
const router = express.Router();

// مسار لحساب الإحصائيات
router.get("/", async (req, res) => {
  try {
    // حساب الإحصائيات باستخدام aggregation
    const stats = await Entry.aggregate([
      {
        $project: {
          sleep: { $toDouble: "$sleep" },  // تحويل ساعات النوم إلى عدد
          duration: { $toDouble: "$duration" },  // تحويل مدة التمرين إلى عدد
          meals: { $cond: [{ $ne: ["$meals", ""] }, 1, 0] }, // التحقق إذا كانت الوجبة موجودة
        },
      },
      {
        $group: {
          _id: null,
          avgSleep: { $avg: "$sleep" },
          avgWorkout: { $avg: "$duration" },
          mealCount: { $sum: "$meals" },
        },
      },
    ]);

    if (stats.length > 0) {
      res.json(stats[0]);
    } else {
      res.json({
        avgSleep: 0,
        avgWorkout: 0,
        mealCount: 0,
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;