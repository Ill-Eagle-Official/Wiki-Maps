const express = require('express');
const router  = express.Router();
const db = require('../db/connection');
const { insertMap } = require('../db/queries/maps');

module.exports = (db) => {

  router.get("/new", (req, res) => {
    res.render("new_map");
  });

  router.post("/api/maps/:id", (req, res) => {

    insertMap({...req.body, user_id: req.session.user_id, map_id: req.params.id})
    .then(newMap => {
      res.send(newMap);
    })
  });
};

