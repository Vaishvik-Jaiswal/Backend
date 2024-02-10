const mongoose = require('mongoose')
const drInfoSchema = new mongoose.Schema({
        name: String,
        age: String,
        qualification: String,
        experience: String,
        address: String,
        about: String,
  });
const drInfo = mongoose.model('drInfo', drInfoSchema);
module.exports = drInfo;