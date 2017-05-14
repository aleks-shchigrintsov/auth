const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define out module

const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String
});

// Create module class

const ModelClass = mongoose.model('user', userSchema);

// Export module

module.exports = ModelClass;
