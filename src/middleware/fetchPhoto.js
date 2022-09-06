'use strict';

const API_KEY = process.env.ACCESS_KEY;
const fetch = require('node-fetch');

async function fetchPhoto(req, res, next) {
  const defaultPhotoUrl = "https://c.pxhere.com/photos/a7/e3/red_rock_jeep_canoe_transport_vehicle-1392511.jpg!d";
  const url = `https://api.unsplash.com/search/photos?query=${req.body.destination},${req.body.location}&orientation=landscape&content_filter=high`;
  let photo;
  try {
    let response = await fetch(url, {
      headers: {
        'Authorization': `Client-ID ${API_KEY}` 
      }
    });
    const results = (await response.json()).results;
    const max = results.length;
    const random = Math.floor((Math.random() * max));
    const randomImg = results[random].urls.small; 
    photo = randomImg;
  } catch (error) {
    console.log(error);
    photo = defaultPhotoUrl;
  }  
  req.body.photo = photo;
  next();
}

module.exports = fetchPhoto;