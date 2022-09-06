'use strict';

const uri = process.env.MONGODB_URI;
const { MongoClient, ObjectId } = require('mongodb');
const client = new MongoClient(uri, { useUnifiedTopology: true });
const db = client.db('vacation-destinations');
const destinationsCollection = db.collection('destinations');

module.exports = {
  client,
  ObjectId,
  destinationsCollection
};