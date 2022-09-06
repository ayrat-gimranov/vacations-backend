'use strict';

const mongoose = require('mongoose');

const destinationsSchema = new mongoose.Schema({
  destination: {type: String, required: true},
  location: {type: String, required: true},
  description: {type: String, required: false},
  photo: {type: String, requred: true}
})

const DestinationsModel = mongoose.model('destination', destinationsSchema);

module.exports = {
  DestinationsModel,
  mongoose
};