import React, { useState } from 'react';
import axios from 'axios';
const PatientForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    address: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const errors = {};
    // Check if fields are filled
    if (!formData.name) {
      errors.name = 'Name is required';
    }
    if (!formData.age) {
      errors.age = 'Age is required';
    }
    if (!formData.address) { // Corrected validation for address
      errors.address = 'Address is required';
    }
  
    if (Object.keys(errors).length === 0) {
      try {
        const response = await axios.post('http://localhost:5000/api/patientInfo/signup/', formData);
        console.log(response.data);
      } catch (error) {
        console.error('Form submission failed', error);  
      }
      // Reset form data
      setFormData({
        name: '',
        age: '',
        address: '',
      });
    } else {
      // Set errors
      setErrors(errors);
    }
  };
  
  return (
    <div>
      <h2>My Form</h2>
      <form onSubmit={handleSubmit}>
        <div> 
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
          {errors.age && <p>{errors.age}</p>}
        </div>
        <div>
          <label> Address:</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
          {errors.address && <p>{errors.address}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default PatientForm;
