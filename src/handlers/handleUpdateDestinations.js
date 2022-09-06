'use strict';

const { destinationsCollection, ObjectId } = require('../collections/index');

module.exports = (req, res) => {

  destinationsCollection.findOneAndUpdate(
    { "_id": ObjectId(req.body.id) },
    {
      $set: {
        destination: req.body.destination,
        location: req.body.location,
        photo: req.body.photo
      }
    },
    {
      returnDocument: 'after'
    }
  )
    .then(result => {
      console.log('findOneandUpdate result: ', result);
      res.status(200).json(result.value.photo)
    })
    .catch(error => {
      console.error(error)
      res.status(500).json('Error updating')
    })
}