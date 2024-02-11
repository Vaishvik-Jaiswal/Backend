import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const RealLogin1 = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();

    

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:5000/api/doctor/login/', { email, password });
      console.log(response.data);
      navigate('/doctorinfo');
    } catch (error) {
      console.error('Login failed', error);
        alert("Invalid username or password"); 
    } 
  };
  
  

  return (
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
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /> 
        <button type="submit">Log In</button>
      </form>
      <p>Don't have an account?</p>
      <Link to="/log">
      <button>Sign Up</button>
      </Link> 
    </div>
  );
};

export default RealLogin1;
