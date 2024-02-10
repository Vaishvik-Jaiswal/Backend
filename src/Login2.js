// import React, { useState } from 'react';
// import axios from 'axios';
// const Login2 = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//     const response = await axios.post('http://localhost:5000/api/patient/signup/', { email, password });
//     console.log(response.data); 
//     } catch (error) { 
//       console.error('Login failed',error);
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <label>Email:</label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         /> 
//         <label>Password:</label>
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit" >Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login2;
import React, { useState } from 'react';
import axios from 'axios';
import PatientForm from './PatientForm.js';
import { Link } from 'react-router-dom';

const Login2 = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email and password
    const errors = {};
    if (!/\S+@\S+\.\S+/.test(email)) {
      //errors.email = 'Invalid email address';
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
      const response = await axios.post('http://localhost:5000/api/patient/signup/', { email, password });
      console.log(response.data);
      setLoggedIn(true); // Set loggedIn to true upon successful login
    } catch (error) {
      console.error('Login failed', error);
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login2;
