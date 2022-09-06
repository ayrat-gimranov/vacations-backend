'use strict';

const { destinationsCollection } = require('../collections/index');

module.exports = (req, res) => {
  const cursor = destinationsCollection.find().toArray()
    .then(results => {
      res.json(results)
    })
    .catch(error => console.error(error))
}