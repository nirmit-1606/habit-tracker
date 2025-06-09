import React from 'react';
import HabitCard from '../components/HabitCard';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Your Habits</h2>
      <HabitCard habit={{ name: 'Exercise', frequency: 'Daily' }} />
      <HabitCard habit={{ name: 'Read', frequency: 'Weekly' }} />
    </div>
  );
};

export default Dashboard;