const express = require('express');
const router  = express.Router();
const db = require('../db/connection');

module.exports = (db) => {

  router.get("/new", (req, res) => {
    res.render("new_map");
  });

  router.post("/", (req, res) => {

};

