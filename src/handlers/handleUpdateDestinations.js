'use strict';

const { DestinationsModel } = require('../models/DestinationsModel.js');

module.exports = async (req, res) => {
  try {
    const result = await DestinationsModel.findByIdAndUpdate(req.body.id, {
      destination: req.body.destination,
      location: req.body.location,
      photo: req.body.photo
    }, {
      overwrite: true,
      new: true,
      select: 'photo'
    });
    res.status(200).json(result.photo);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error updating');
  }
}