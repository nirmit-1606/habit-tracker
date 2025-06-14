import React from 'react';
import HabitListItem from '../components/HabitListItem';

const YourHabits = () => {
  const habits = [
    {
      name: 'Reading',
      frequency: 'Daily',
      description: 'Read 20 pages from a paperback book',
    },
    {
      name: 'Workout',
      frequency: 'Weekly',
      description: '3 gym sessions per week',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-6" style={{ color: 'var(--accent)' }}>
        Your Habits
      </h2>
      <div className="flex flex-col gap-4">
        {habits.map((habit, index) => (
          <HabitListItem key={index} habit={habit} />
        ))}
      </div>
    </div>
  );
};

export default YourHabits;