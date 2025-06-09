import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/add">Add Habit</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
};

export default Navbar;