const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['student', 'admin'], required: true },
  gender: { type: String, enum: ['male', 'female'], required: true},
  collegeID: { type: String, required: true}, 
  fathersName: { type: String, required: true}
});
module.exports = mongoose.model('User', userSchema);