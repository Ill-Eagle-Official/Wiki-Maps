// Test map

const db = require("../db/connection");

const getMap = (db) => {
  return db.query(`
    SELECT *
    FROM maps
    WHERE id = 1
    `)
    .then(res => res.rows);
}

// Function to get all pins

const getPins = () => {
  return db.query(`
    SELECT *
    FROM pins;
    `)
    .then(res => res.rows);
}

// Function to insert new map into database

const insertMap = (map) => {
  return db.query(`
  INSERT INTO maps (user_id, title, country, city, latitude, longitude, zoom)
  VALUES ($1, $2, $3, $4, $5, $6, $7)
  RETURNING *;
  `, [map.user_id, map.title, map.country, map.city, map.latitude, map.longitude, map.zoom])
  .then(res => res.rows[0]);
}

// Function to insert new pin into database

const insertPin = (pin) => {
  return db.query(`
  INSERT INTO pins (map_id, title, description, image_url, latitude, longitude)
  VALUES ($1, $2, $3, $4, $5, $6)
  RETURNING *;
  `, [pin.map_id, pin.title, pin.description, pin.image_url, pin.latitude, pin.longitude])
  .then(res => res.rows[0]);
};

module.exports = { getMap, getPins, insertMap, insertPin };
