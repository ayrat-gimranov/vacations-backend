'use strict';

const { DestinationsModel } = require('../models/DestinationsModel.js');

module.exports = async (req, res) => {
  try {
    let newDestination = new DestinationsModel(req.body);
    let newDocument = await newDestination.save();
    res.status(200).json(newDocument);

  } catch (error) {
    console.error(error)
    res.status(500).send('Error saving into db')
  }
}