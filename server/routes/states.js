const express = require("express");
const Entry = require("../models/entry");
const verifyToken = require('../middleware/verifyToken'); // استيراد الميدلوير
const router = express.Router();

router.get("/", verifyToken, async (req, res) => {
  try {
    const stats = await Entry.aggregate([
      {
        $match: { userId: req.userId }, // التأكد من إحصائيات المستخدم الحالي
      },
      {
        $project: {
          sleep: { $toDouble: "$sleep" },
          duration: { $toDouble: "$duration" },
          meals: { $cond: [{ $ne: ["$meals", ""] }, 1, 0] },
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