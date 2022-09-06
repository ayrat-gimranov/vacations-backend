'use strict';

const { destinationsCollection, ObjectId } = require('../collections/index');

module.exports = (req, res) => {
  console.log('Deletion ID: ', req.body.id);

  destinationsCollection.deleteOne(
    { "_id": ObjectId(req.body.id) }
  )
    .then(result => {
      console.log('DELETION RESULT: ', result)
      if (result.deletedCount == 0) {
        throw new Error('Nothing was deleted. Unable to find document to delete.');
      }
      res.status(200).json(`Deleted the card.`)
    })
    .catch(error => {
      console.error(error)
      res.status(500).send('Unable to delete card from db')
    })
}