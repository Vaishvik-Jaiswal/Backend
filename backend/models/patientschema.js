const mongoose = require('mongoose')
const patientSchema = new mongoose.Schema({
    email: String,
    password: String,
  });
const Patient = mongoose.model('Patient', patientSchema);
module.exports = Patient;