import React from 'react';
import HabitCard from '../components/HabitCard';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Your Habits</h2>
      <HabitCard habit={{ name: 'Exercise', frequency: 'Daily', goal: 'Read 20 pages', streak: 10 }} />
      <HabitCard habit={{ name: 'Reading', frequency: 'Daily', goal: '45 minutes', streak: 20 }} />
    </div>
  );
};

export default Dashboard;