import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login2 = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    const response = await axios.post('http://localhost:5000/api/patient/signup/', { email, password });
    console.log(response.data); 
    } catch (error) { 
      console.error('Login failed',error);
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
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      <p>Have an account already?</p>
      <Link to="/reallogp">
      <button>LogIn</button>
      </Link>
    </div>
  );
};

export default Login2;
