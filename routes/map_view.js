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

    getMapByID(db, mapID)
      .then(reqMap => {
        templateVars.reqMap = reqMap;
        templateVars.title = reqMap.title;
        res.json("map_view", templateVars);
      })
      .catch(err => {
        res.status(500).send("Error getting map from database");
      });
  });

  // return router;
};
