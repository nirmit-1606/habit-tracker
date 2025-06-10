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
        <button className="primary"><Link to="/login">Login</Link></button>
        <button className="secondary"><Link to="/signup">Get Started</Link></button>
      </div>
    </nav>
  );
};

export default Navbar;