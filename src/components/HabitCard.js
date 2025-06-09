import React from 'react';

const HabitCard = ({ habit }) => {
  return (
    <div className="habit-card">
      <h3>{habit.name}</h3>
      <p>Frequency: {habit.frequency}</p>
      <button>Mark as Done</button>
    </div>
  );
};

export default HabitCard;