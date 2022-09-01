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

// Function to get map by ID from database
const getMapByID = (db, mapID) => {
  return db.query(`
  SELECT *
  FROM maps
  WHERE id = $1
  `, [mapID])
  .then(res => res.rows[0]);
};

// Function to get all pins

const getPins = () => {
  return db.query(`
    SELECT *
    FROM pins;
    `)
    .then(res => res.rows);
}

// Function to get all pins for a specific map using the map ID
const getPinsByMapID = (db, mapID) => {
  return db.query(`
    SELECT pins.title AS title, pins.description AS description, pins.image_url AS image_url, pins.id AS id, pins.latitude AS latitude, pins.longitude AS longitude, pins.map_id AS map_id, maps.user_id AS owner
    FROM pins
    JOIN maps ON pins.map_id = maps.id
    WHERE pins.map_id = $1
    `, [mapID])
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

module.exports = { getMap, getMapByID, getPinsByMapID, getPins, insertMap };
