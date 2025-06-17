import React from 'react';

const Login = () => {
  return (
    <div className="auth-container mt-16 min-h-screen max-w-4xl mx-auto p-6">
      <h2>Login</h2>
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;