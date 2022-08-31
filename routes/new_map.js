const express = require('express');
const router  = express.Router();
const { getMapByID } = require('./helpers');
const db = require('../db/connection');

router.get("/map/new", (req, res) => {
  res.render("new_map");
});

router.post("/map/new", (req, res) => {
  const mapTitle = req.body.title;
  const mapLat = req.body.latitude;
  const mapLong = req.body.longitude;
  const mapCountry = req.body.country;
  const mapCity = req.body.city;
  const user_id = req.session.user_id;

  if (!mapTitle || !mapLat || !mapLong || !mapCountry || !mapCity) {
    res.status(400).send("Invalid map data");
    return;
  }

  db.query(`
  INSERT INTO maps (title, latitude, longitude, country, city, user_id)
  VALUES ($1, $2, $3, $4, $5, $6)
  RETURNING *;
  `, [mapTitle, mapLat, mapLong, mapCountry, mapCity, user_id])



module.exports = router;
