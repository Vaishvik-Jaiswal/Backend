const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const Doctor = require('./backend/models/drschema');
const Patient = require('./backend/models/patientschema');

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

app.listen(5000, () => {
  console.log(`Server is running`);
});

// const Doctor=require('./backend/models/drschema')
// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const app = express();
// app.use(bodyParser.json());
// app.use(cors());
// // Connect to MongoDB
// mongoose.connect('mongodb+srv://aneyshamika:TheBeginners@atlascluster.ey9nerv.mongodb.net/', {
// }).then(() => {
//   console.log("MongoDB connected successfully");
// }).catch((e) => {
//   console.log("MongoDB connection error:",e);
// });
// app.get("/",(req,res)=>{
//   res.send("BACKEND IS WORKING")
// });
// app.post('/api/signup', async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const newDoctor = new Doctor({ email, password });
//     await newDoctor.save();
    
//     res.status(201).json(newDoctor);
//   } catch (error) {
//     console.error('Signup failed', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// }); 


// app.listen(5000, () => {
//   console.log(`Server is running`);
// });
// Import both Doctor and Patient schemas
// const Doctor = require('./backend/models/drsschema');
// const Patient = require('./backend/models/patientschema');

// // Update the signup route to handle different types of users
// app.post('/api/signup/:userType', async (req, res) => {
//   const { email, password } = req.body;
//   const userType = req.params.userType;

//   try {
//     let newUser;

//     if (userType === 'doctor') {
//       newUser = new Doctor({ email, password });
//     } else if (userType === 'patient') {
//       newUser = new Patient({ email, password });
//     } else {
//       return res.status(400).json({ message: 'Invalid user type' });
//     }

//     await newUser.save();
//     res.status(201).json(newUser);
//   } catch (error) {
//     console.error('Signup failed', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });
// const Doctor = require('./backend/models/drschema');
// const Patient = require('./backend/models/patientschema');
// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const cors = require('cors');

// const app = express();
// app.use(bodyParser.json());
// app.use(cors());

// // Connect to MongoDB Atlas
// mongoose.connect('mongodb+srv://aneyshamika:TheBeginners@atlascluster.ey9nerv.mongodb.net/', {
// }).then(() => {
//   console.log("MongoDB connected successfully");
// }).catch((e) => {
//   console.log("MongoDB connection error:", e);
// });

// // Define routes
// app.get("/", (req, res) => {
//   res.send("BACKEND IS WORKING");
// });

// app.post('/api/signup/', async (req, res) => {
//   const { email, password } = req.body;
//   const userType = req.params.userType;

//   try {
//     let newUser;

//     if (userType === 'doctor') {
//       newUser = new Doctor({ email, password });
//     } else if (userType === 'patient') {
//       newUser = new Patient({ email, password });
//     } else {
//       return res.status(400).json({ message: 'Invalid user type' });
//     }

//     await newUser.save();
//     res.status(201).json(newUser);
//   } catch (error) {
//     console.error('Signup failed', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

// // Start the server
// const PORT = process.env.PORT || 5000; // Use environment port if available
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });