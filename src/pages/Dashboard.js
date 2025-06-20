import React from 'react';
import HabitCard from '../components/HabitCard';

const Dashboard = () => {
  const habits = [
    {
      name: 'Reading',
      frequency: 'Daily',
      description: 'Read 20 pages from a paperback book',
      cardColor: 'bg-cyan-300',
      streak: 10,
    },
    {
      name: 'Workout',
      frequency: 'Weekly',
      description: '3 gym sessions per week',
      cardColor: 'bg-yellow-400',
      streak: 20,
    },
    {
      name: 'Meditation',
      frequency: 'Daily',
      description: 'In the morning, right after waking up',
      cardColor: 'bg-purple-400',
      streak: 5,
    },
    {
      name: 'Journaling',
      frequency: 'Daily',
      description: 'Reflect on your day every night before bed',
      cardColor: 'bg-pink-300',
      streak: 7,
    },
    {
      name: 'Hydration',
      frequency: 'Daily',
      description: 'Drink at least 8 glasses of water',
      cardColor: 'bg-blue-300',
      streak: 14,
    },
    {
      name: 'Study',
      frequency: 'Weekly',
      description: 'Complete 3 coding sessions per week',
      cardColor: 'bg-green-300',
      streak: 3,
    },
    {
      name: 'Stretching',
      frequency: 'Daily',
      description: '5 minutes of stretching before bed',
      cardColor: 'bg-red-300',
      streak: 12,
    },
    {
      name: 'Meal Prep',
      frequency: 'Weekly',
      description: 'Plan and prep meals every Sunday',
      cardColor: 'bg-orange-300',
      streak: 4,
    },
  ];

  return (
    <div className="mt-16 min-h-screen max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center text-[var(--accent)] mb-6">
        Track your habits
      </h2>
      <div className="grid auto-rows-auto gap-6 justify-center grid-cols-[repeat(auto-fill,_250px)]">
        {habits.map((habit, index) => (
          <HabitCard key={index} habit={habit} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;