'use strict';

const { DestinationsModel } = require('../models/DestinationsModel.js');

module.exports = async (req, res) => {
  try {
   const results = await DestinationsModel.find({});
   res.status(200).json(results) ;
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving from database');
  }
}