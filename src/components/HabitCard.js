import React from 'react';
import './styles/HabitCard.css';
import { Flame } from 'lucide-react';
import FrequencyChip from './FrequencyChip';

const HabitCard = ({ habit }) => {
  return (
    <div className={`habit-card ${habit.cardColor || 'bg-cyan-300'}`}>
      <div className="habit-card-content">
        <div className="habit-card-header">
          <h3>{habit.name}</h3>
          <div className="habit-streak">
            <Flame size={32} color="var(--accent)" />
            <span>{habit.streak}</span>
          </div>
        </div>

        <FrequencyChip frequency={habit.frequency} />
        <div className="habit-description">{habit.description}</div>

        <button className="secondary">Mark as Done</button>
      </div>
    </div>
  );
};

export default HabitCard;