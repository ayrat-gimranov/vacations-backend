'use strict';

require('dotenv').config();
const { client } = require('./src/collections/index.js');
const server = require('./src/server');


client.connect()
  .then(client => {
    console.log('Connected to Database');
    server.start();
  })
  .catch(error => {
    console.error(error);
  })