'use strict';

const { DestinationsModel } = require('../models/DestinationsModel.js');

module.exports = async (req, res) => {
  try {
    await DestinationsModel.findByIdAndDelete(req.body.id);
    res.status(200).send('Successfully deleted an item');
  } catch (error) {
    console.error(error);
    res.status(500).send('Unable to delete from database');
  }
}