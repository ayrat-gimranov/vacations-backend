'use strict';

require('dotenv').config();
const server = require('./src/server');
const { mongoose } = require('./src/models/DestinationsModel');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to the database')
    server.start();
  })
  .catch(error => {
    console.error(error);
  })