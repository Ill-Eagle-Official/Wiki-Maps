const express = require('express');
const router  = express.Router();
const { getMapByID } = require('./helpers');
// const db = require('../db/connection');

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
