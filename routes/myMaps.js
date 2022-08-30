/*
 * All routes for myMaps are defined here
 * Since this file is loaded in server.js into /api/myMaps,
 *   these routes are mounted onto /api/myMaps
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const cookieSession = require("cookie-session");
const router  = express.Router();
const { getMyMaps } = require('../db/queries/myMaps')

router.get('/', (req, res) => {
  userId = req.session.user_id;
  getMyMaps(userId)
  .then(myMapsData => {
    res.json(myMapsData);
  })
});

module.exports = router;
