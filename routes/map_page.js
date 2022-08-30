const express = require('express');
const router  = express.Router();
const { getMapByID, getPinsByMapID, getMap } = require('./helpers');

module.exports = (db) => {

  router.get("/map", (req, res) => {
    res.render("map_page");
  });

  router.get("/:id", (req, res) => {
    const mapID = req.params.id;
    const templateVars = {};

    if (!mapID) {
      res.status(400).send("Invalid map ID");
      return;
    }

    const reqMapID = mapID;
    getMapByID(db, reqMapID)
      .then(reqMap => {
        templateVars.map = reqMap;
        templateVars.title = reqMap.title;
        res.render("map_page", templateVars);
      })
      .catch(err => {
        res.status(500).send("Error getting map from database");
      });
  });

};


module.exports = router;
