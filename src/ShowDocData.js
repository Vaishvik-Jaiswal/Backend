import React, { useState } from 'react'
import  { useEffect } from 'react';
import axios from 'axios';
export const ShowDocData = () => {
    const [doctors , setDoctors] = useState([]) 
  useEffect(()=>{
    fetch("http://localhost:5000/").then(console.log)
    axios.get('http://localhost:5000/getDrInfo/') 
  .then(response => {
    console.log(response.data); // Check the fetched data
    setDoctors(response.data); // Update state with fetched data
  })
  .catch(error => {
    console.error('Error fetching doctor data:', error); // Log any errors
  });
  },[])
       
  return( 
    <div>
        <h2>SELECT YOUR DOCTOR</h2> 
        {doctors.map(doctor => (
          <div key={doctor._id}>
              <p> NAME : {doctor.name}</p>
              <p>CLINIC ADDRESS{doctor.address}</p>
            </div>
          ))} 
    </div>
  );  
} 

export default ShowDocData;