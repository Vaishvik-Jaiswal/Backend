const Doctor=require('./backend/models/drschema')
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());
// Connect to MongoDB
mongoose.connect('mongodb+srv://aneyshamika:TheBeginners@atlascluster.ey9nerv.mongodb.net/', {
}).then(() => {
  console.log("MongoDB connected successfully");
}).catch((e) => {
  console.log("MongoDB connection error:",e);
});

app.get("/",(req,res)=>{
  res.send("yoiii")
});

// Signup endpoint
app.post('/api/signup', async (req, res) => {
  const { email, password } = req.body;
  try {
    // Check if email already exists
    // const existingDoctor = await Doctor.findOne({ email });
    // if (existingDoctor) {
    //   return res.status(400).json({ message: 'Email already exists' });
    // }

    // Create a new doctor
    const newDoctor = new Doctor({ email, password });
    await newDoctor.save();
    
    res.status(201).json(newDoctor);
  } catch (error) {
    console.error('Signup failed', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}); 


app.listen(5000, () => {
  console.log(`Server is running`);
});
