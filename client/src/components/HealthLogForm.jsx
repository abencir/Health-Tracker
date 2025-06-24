import React, { useState, useEffect } from "react";
import axios from "axios";

const HealthLogForm = ({ onAdd, entryToEdit, clearEdit }) => {
  const [formData, setFormData] = useState({
    sleep: "",
    meals: "",
    workout: "",
    duration: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (entryToEdit) {
      setFormData(entryToEdit);
    }
  }, [entryToEdit]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    // Simple validation
    if (
      !formData.sleep ||
      !formData.meals ||
      !formData.workout ||
      !formData.duration
    ) {
      alert("Please fill out all fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      if (entryToEdit) {
        // Edit entry
        await axios.put(
          `http://localhost:5000/api/entries/${entryToEdit._id}`,
          formData
        );
        clearEdit();
      } else {
        // Add new entry
        await axios.post("http://localhost:5000/api/entries", formData);
      }

      setSubmitted(true);
      onAdd && onAdd();

      // Clear form after successful submission
      setFormData({
        sleep: "",
        meals: "",
        workout: "",
        duration: "",
      });
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("An error occurred while submitting. Please try again.");
    } finally {
      setIsSubmitting(false);
    }

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white p-6 rounded-xl shadow-md max-w-xl mx-auto"
    >
      <h2 className="text-2xl font-bold text-[#3e8e41] text-center">
        {entryToEdit ? "Edit Entry" : "Add Your Daily Health Log"}
      </h2>

      {submitted && (
        <div className="bg-green-100 border border-green-300 text-green-700 px-4 py-2 rounded text-sm text-center">
          Entry {entryToEdit ? "updated" : "submitted"} successfully!
        </div>
      )}

      <input
        type="number"
        min="0"
        name="sleep"
        value={formData.sleep}
        onChange={handleChange}
        placeholder="Hours of Sleep"
        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-[#3e8e41] focus:border-[#3e8e41]"
      />

      <textarea
        name="meals"
        value={formData.meals}
        onChange={handleChange}
        placeholder="Describe Your Meals"
        className="w-full border border-gray-300 rounded-lg px-4 py-3 h-28 resize-none focus:ring-[#3e8e41] focus:border-[#3e8e41]"
      />

      <select
        name="workout"
        value={formData.workout}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:ring-[#3e8e41] focus:border-[#3e8e41]"
      >
        <option value="">Select Workout Type</option>
        <option>Yoga</option>
        <option>Running</option>
        <option>Swimming</option>
        <option>Strength Training</option>
      </select>

      <input
        type="number"
        min="0"
        name="duration"
        value={formData.duration}
        onChange={handleChange}
        placeholder="Workout Duration (minutes)"
        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-[#3e8e41] focus:border-[#3e8e41]"
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full font-semibold rounded-lg py-3 ${
          isSubmitting
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-[#3e8e41] text-white hover:bg-[#2f7034]"
        }`}
      >
        {isSubmitting
          ? "Submitting..."
          : entryToEdit
          ? "Update Entry"
          : "Submit Log"}
      </button>
    </form>
  );
};

export default HealthLogForm;
