import React from 'react';
import './styles/Navbar.css';
import { Link } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';

const Navbar = ({ onToggleTheme, isLightMode }) => {
  return (
    <nav className="navbar fixed top-0 left-0 right-0 z-50 bg-[var(--bg-secondary)]">
      <div className="logo">Habit Tracker</div>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/your-habits">Your Habits</Link>
        <Link to="/add">Add Habit</Link>
      </div>

      <div className="cta">
        <button className="theme-toggle" onClick={onToggleTheme} aria-label="Toggle Theme">
          {isLightMode ? <Moon size={24} /> : <Sun size={24} />}
        </button>
        <Link to="/login"><button className="primary">Login</button></Link>
        <Link to="/signup"><button className="secondary">Get Started</button></Link>
      </div>
    </nav>
  );
};

export default Navbar;