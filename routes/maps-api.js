/*
 * All routes for Maps are defined here
 * Since this file is loaded in server.js into /api/maps,
 *   these routes are mounted onto /api/maps
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const { getMaps } = require('../db/queries/maps');
const { getMapByID } = require('./helpers');

router.get('/', (req, res) => {
  getMaps()
  .then(mapsData => {
    res.json(mapsData);
  })
});

router.get("/:id", (req, res) => {
  const mapID = req.params.id;

  if (!mapID) {
    res.status(400).send("Invalid map ID");
    return;
  }

  getMapByID(db, mapID)
    .then(reqMap => {
      console.log(reqMap);
      res.json(reqMap);
    })
    .catch(err => {
      res.status(500).send("Error getting map from database");
    });
});

module.exports = router;
