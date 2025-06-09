import React from 'react';

const Signup = () => {
  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default Signup;