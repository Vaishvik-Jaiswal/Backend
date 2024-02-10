const mongoose = require('mongoose')
const patientInfoSchema = new mongoose.Schema({
        name: String,
        age: String,
        address: String,
  });
const patientInfo = mongoose.model('patientInfo', patientInfoSchema);
module.exports = patientInfo;