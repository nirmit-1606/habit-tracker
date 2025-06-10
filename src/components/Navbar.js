import React from 'react';
import './styles/Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Habit Tracker</div>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/add">Add Habit</Link>
      </div>

      <div className="cta">
        <Link to="/login"><button className="primary">Login</button></Link>
        <Link to="/signup"><button className="secondary">Get Started</button></Link>
      </div>
    </nav>
  );
};

export default Navbar;