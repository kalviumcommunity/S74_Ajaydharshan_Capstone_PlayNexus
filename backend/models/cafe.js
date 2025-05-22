const mongoose = require('mongoose');

const cafeSchema = new mongoose.Schema({
  name: String,
  location: String,
  description: String,
  image: String,
});

module.exports = mongoose.model('Cafe', cafeSchema);
