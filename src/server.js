'use strict';

const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = process.env.PORT;
const cors = require('cors');
const fetchPhoto = require('./middleware/fetchPhoto');
const handleCreateDestinations = require('./handlers/handleCreateDestinations');
const handleGetDestinations = require('./handlers/handleGetDestinations');
const handleUpdateDestinations = require('./handlers/handleUpdateDestinations');
const handleDeleteDestinations = require('./handlers/handleDeleteDestinations');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.status(200).send("Hello world!")
})
app.get('/destinations', handleGetDestinations);
app.post('/destinations', fetchPhoto, handleCreateDestinations);
app.put('/destinations', fetchPhoto, handleUpdateDestinations);
app.delete('/destinations', handleDeleteDestinations);


function start() {
  app.listen(PORT, () => console.log("listening on port ", PORT));
}

module.exports = {
  start
};
