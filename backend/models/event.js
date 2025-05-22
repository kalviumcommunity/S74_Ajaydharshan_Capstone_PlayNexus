const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: String,
  description: String,
  date: Date,
  location: String,
});

module.exports = mongoose.model('Event', eventSchema);