const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const Doctor = require('./backend/models/drschema');
const Patient = require('./backend/models/patientschema');
const drInfo = require('./backend/models/DrInfo'); 
const patientInfo = require('./backend/models/PatientInfo'); 

app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb+srv://aneyshamika:TheBeginners@atlascluster.ey9nerv.mongodb.net/', {
}).then(() => {
  console.log("MongoDB connected successfully"); 
}).catch((e) => {   
  console.log("MongoDB connection error:", e);
});

app.get("/", (req, res) => {
  res.send("BACKEND IS WORKING"); 
});

app.get("/getDrInfo", (req, res) => {
  drInfo.find()
  .then(doctors => res.json(doctors))
  .catch(err => res.json(err))
}); 

app.get("/getPatientInfo", (req, res) => {
  patientInfo.find()
  .then(patients => res.json(patients))
  .catch(err => res.json(err))
}); 

// Doctor signup
app.post('/api/doctor/signup', async (req, res) => {
  const { email, password } = req.body;
  try { 
    const newDoctor = new Doctor({ email, password });
    await newDoctor.save();
    res.status(201).json(newDoctor);
  } catch (error) {
    console.error('Doctor signup failed', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Patient signup
app.post('/api/patient/signup', async (req, res) => {
  const { email, password } = req.body;
  try {
    const newPatient = new Patient({ email, password });
    await newPatient.save();
    res.status(201).json(newPatient);
  } catch (error) {
    console.error('Patient signup failed', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
// Dr Info signup
app.post('/api/drInfo/signup', async (req, res) => {
  const { name, age, qualification, experience, address, about } = req.body;
  try { 
    const newDrInfo = new drInfo({ name , age , qualification , experience , address, about  });
    await newDrInfo.save();
    res.status(201).json(newDrInfo);
  } catch (error) {
    console.error('Doctor signup failed', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
// Patient Info signup
app.post('/api/patientInfo/signup', async (req, res) => {
  const { name, age, address } = req.body;
  try { 
    const newPatientInfo = new patientInfo({ name , age , address});
    await newPatientInfo.save();
    res.status(201).json(newPatientInfo);
  } catch (error) {
    console.error('Patient signup failed', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(5000, () => {
  console.log(`Server is running`);
});

// Doctor login
app.post('/api/doctor/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const doctor = await Doctor.findOne({ email });
    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }
    if (password !== doctor.password) {
      return res.status(401).json({ message: 'Incorrect password' });
    }
    res.status(200).json(doctor);
  } catch (error) {
    console.error('Doctor login failed', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Patient login
app.post('/api/patient/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const patient = await Patient.findOne({ email });
    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }
    if (password !== patient.password) {
      return res.status(401).json({ message: 'Incorrect password' });
    }
    res.status(200).json(patient);
  } catch (error) {
    console.error('Patient login failed', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


