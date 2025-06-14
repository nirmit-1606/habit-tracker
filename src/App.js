import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/app.css';
import './styles/pages.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import YourHabits from './pages/YourHabits';
import AddHabit from './pages/AddHabit';
import Settings from './pages/Settings';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialMode = localStorage.getItem('theme') || (userPrefersDark ? 'dark' : 'light');
    document.body.classList.toggle('light', initialMode === 'light');
    setIsLightMode(initialMode === 'light');
  }, []);

  const toggleTheme = () => {
    const nextMode = isLightMode ? 'dark' : 'light';
    document.body.classList.toggle('light', nextMode === 'light');
    localStorage.setItem('theme', nextMode);
    setIsLightMode(nextMode === 'light');
  };

  return (
    <div className="App">
      <Navbar onToggleTheme={toggleTheme} isLightMode={isLightMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/your-habits"
          element={
            <PrivateRoute>
              <YourHabits />
            </PrivateRoute>
          }
        />
        <Route
          path="/add"
          element={
            <PrivateRoute>
              <AddHabit />
            </PrivateRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <PrivateRoute>
              <Settings />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
