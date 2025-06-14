import React from 'react';
import HabitCard from '../components/HabitCard';

const Dashboard = () => {
  return (
    <div className="dashboard max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center text-[var(--accent)] mb-6">
        Your Habits
      </h2>
      <div className="grid auto-rows-auto gap-6 justify-center grid-cols-[repeat(auto-fill,_250px)]">
        <HabitCard habit={{ name: 'Exercise', frequency: 'Daily', goal: 'Read 20 pages', streak: 10 }} />
        <HabitCard habit={{ name: 'Reading', frequency: 'Daily', goal: '45 minutes', streak: 20 }} />
        <HabitCard habit={{ name: 'Meditation', frequency: 'Weekly', goal: '3 times', streak: 5 }} />
        <HabitCard habit={{ name: 'Meditation', frequency: 'Weekly', goal: '3 times', streak: 5 }} />
      </div>
    </div>
  );
};

export default Dashboard;