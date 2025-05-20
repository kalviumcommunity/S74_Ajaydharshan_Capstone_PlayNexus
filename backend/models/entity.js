const mongoose = require('mongoose');

const entitySchema = new mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  name: String,
  description: String,
  imageUrl: String,
  location: String
}, { timestamps: true });

module.exports = mongoose.model('Entity', entitySchema) ;

