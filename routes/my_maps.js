/*
 * All routes for my_maps are defined here
 * Since this file is loaded in server.js into /my_aps,
 *   these routes are mounted onto /my_maps
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const cookieSession = require("cookie-session");
const router  = express.Router();
const { getMyMaps } = require('../db/queries/my_maps')

router.get('/', (req, res) => {
  userId = req.session.user_id;
  getMyMaps(userId)
  .then(myMapsData => {
    const templateVars = {
      myMapsData
    }
    res.render("my_maps", myMapsData);

  })
});

module.exports = router;
