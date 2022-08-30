/*
 * All routes for Maps are defined here
 * Since this file is loaded in server.js into /api/maps,
 *   these routes are mounted onto /api/maps
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const { getPins } = require('../queries/pin_queries');

router.get('/', (req, res) => {
  getPins()
  .then(pinsData => {
    res.json(pinsData);
  })
});
