'use strict';

const { destinationsCollection } = require('../collections/index');

module.exports = (req, res) => {
  destinationsCollection.insertOne(req.body)
    .then(result => {
      let response = {
        finalPhoto: req.body.photo,
        _id: result.insertedId
      }
      res.status(200).json(response)
    })
    .catch(error => {
      console.error(error)
      res.status(500).send('Error saving into db')
    })
}