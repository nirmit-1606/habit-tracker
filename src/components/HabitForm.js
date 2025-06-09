import React, { useState } from 'react';

const HabitForm = () => {
  const [name, setName] = useState('');
  const [frequency, setFrequency] = useState('Daily');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Habit:', { name, frequency });
    // Add to Firestore later
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Habit Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <select value={frequency} onChange={(e) => setFrequency(e.target.value)}>
        <option value="Daily">Daily</option>
        <option value="Weekly">Weekly</option>
      </select>
      <button type="submit">Save Habit</button>
    </form>
  );
};

export default HabitForm;