import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import DocForm from './DocForm.js';
const Login1 = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate email and password
    const errors = {};
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Email id should be in the form abc@abc.abc")
    }  
    if (password.length < 6) {
      alert('Password must be at least 6 characters long');
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/doctor/signup/', { email, password });
      console.log(response.data);
      setLoggedIn(true); // Set loggedIn to true upon successful login
    } catch (error) {
      console.error('Login failed', error);
    } 
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /> 
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
        <button type="submit">Sign Up</button>
      </form>
      <p>Have an account already?</p>
      <Link to="/reallog">
      <button>LogIn</button>
      </Link>
      {!loggedIn ? (
        <div>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
            <label>Password:</label>
            <input 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
            <button type="submit">Login</button>
          </form>
        </div>
      ) : (
        <DocForm />
      )}
    </div>
  );
};

export default Login1;
