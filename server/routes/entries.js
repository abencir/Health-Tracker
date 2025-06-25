const express = require("express");
const Entry = require("../models/entry");
const verifyToken = require('../middleware/verifyToken'); // استيراد الميدلوير
const router = express.Router();

// حماية المسارات باستخدام verifyToken
router.get("/", verifyToken, async (req, res) => {
  try {
    const entries = await Entry.find({ userId: req.userId }).sort({ createdAt: -1 });
    res.json(entries);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", verifyToken, async (req, res) => {
  try {
    const { sleep, meals, workout, duration } = req.body;
    const newEntry = new Entry({ sleep, meals, workout, duration, userId: req.userId });
    await newEntry.save();
    res.status(201).json(newEntry);
  } catch (error) {
    res.status(400).json({ error: "Error adding entry" });
  }
});

router.put("/:id", verifyToken, async (req, res) => {
  try {
    const updatedEntry = await Entry.findOneAndUpdate(
      { _id: req.params.id, userId: req.userId }, // التأكد من أن المستخدم هو الذي يملك السجل
      req.body,
      { new: true }
    );
    if (!updatedEntry) {
      return res.status(404).json({ message: "Entry not found or not authorized" });
    }
    res.json(updatedEntry);
  } catch (error) {
    res.status(400).json({ error: "Error updating entry" });
  }
});

router.delete("/:id", verifyToken, async (req, res) => {
  try {
    const deletedEntry = await Entry.findOneAndDelete(
      { _id: req.params.id, userId: req.userId } // التأكد من أن المستخدم هو الذي يملك السجل
    );
    if (!deletedEntry) {
      return res.status(404).json({ message: "Entry not found or not authorized" });
    }
    res.status(200).json({ message: "Entry deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: "Error deleting entry" });
  }
});

module.exports = router;