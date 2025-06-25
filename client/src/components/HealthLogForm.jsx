import React, { useState } from 'react';
import axios from 'axios';

const HealthLogForm = () => {
  const [sleep, setSleep] = useState('');
  const [meals, setMeals] = useState('');
  const [workout, setWorkout] = useState('');
  const [duration, setDuration] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate inputs
    const validationErrors = {};
    if (!sleep || isNaN(sleep) || Number(sleep) <= 0) {
      validationErrors.sleep = 'Please enter a valid sleep value';
    }
    if (!meals) {
      validationErrors.meals = 'Please enter your meals';
    }
    if (!workout) {
      validationErrors.workout = 'Please enter the workout type';
    }
    if (!duration || isNaN(duration) || Number(duration) <= 0) {
      validationErrors.duration = 'Please enter a valid duration for your workout';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Submit data if valid
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:5000/api/entries',
        { sleep, meals, workout, duration },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // Clear form
      setSleep('');
      setMeals('');
      setWorkout('');
      setDuration('');
      setErrors({});
    } catch (error) {
      console.error('Error adding entry:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div>
        <label htmlFor="sleep">Sleep (hours):</label>
        <input
          type="number"
          id="sleep"
          value={sleep}
          onChange={(e) => setSleep(e.target.value)}
          className="border p-2 w-full"
        />
        {errors.sleep && <p className="text-red-500">{errors.sleep}</p>}
      </div>
      <div>
        <label htmlFor="meals">Meals:</label>
        <input
          type="text"
          id="meals"
          value={meals}
          onChange={(e) => setMeals(e.target.value)}
          className="border p-2 w-full"
        />
        {errors.meals && <p className="text-red-500">{errors.meals}</p>}
      </div>
      <div>
        <label htmlFor="workout">Workout Type:</label>
        <input
          type="text"
          id="workout"
          value={workout}
          onChange={(e) => setWorkout(e.target.value)}
          className="border p-2 w-full"
        />
        {errors.workout && <p className="text-red-500">{errors.workout}</p>}
      </div>
      <div>
        <label htmlFor="duration">Workout Duration (minutes):</label>
        <input
          type="number"
          id="duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="border p-2 w-full"
        />
        {errors.duration && <p className="text-red-500">{errors.duration}</p>}
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 mt-4">
        Submit
      </button>
    </form>
  );
};

export default HealthLogForm;
