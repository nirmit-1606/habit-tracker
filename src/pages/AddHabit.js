import React from 'react';
import HabitForm from '../components/HabitForm';

const AddHabit = () => {
  return (
    <div className="add-habit mt-16 min-h-screen max-w-4xl mx-auto p-6">
      <h2>Add a New Habit</h2>
      <HabitForm />
    </div>
  );
};

export default AddHabit;