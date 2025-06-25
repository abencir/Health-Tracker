const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();

const router = express.Router();

router.post("/", async (req, res) => {
  const { entries } = req.body;

  if (!entries) {
    return res.status(400).json({ error: "Entries are required in the request body." });
  }

  try {
    const prompt = `
You are a smart health assistant. Based on the user's daily logs, give personalized advice.

Entries:
${JSON.stringify(entries, null, 2)}

Respond with 2-3 concise bullet-point suggestions based on sleep, meals, and workout data.
`;

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "anthropic/claude-3-opus-20240229",
        messages: [{ role: "user", content: prompt }],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.CLAUD_API_KEY}`,
          "Content-Type": "application/json",
        },
        timeout: 10000,
      }
    );

    const aiMessage = response.data.choices?.[0]?.message?.content;

    if (!aiMessage) {
      return res.status(500).json({ error: "AI response format invalid" });
    }

    if (process.env.NODE_ENV !== 'production') {
      console.log("AI Full Response:", response.data);
    }

    res.json({ suggestions: aiMessage });
  } catch (error) {
    console.error("AI Error:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to get AI suggestions" });
  }
});

module.exports = router;
 