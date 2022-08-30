/*
 * All routes for my-maps are defined here
 * Since this file is loaded in server.js into /my-maps,
 *   these routes are mounted onto /my-maps
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const cookieSession = require("cookie-session");
const router  = express.Router();
const { getMyMaps } = require('../db/queries/my-maps')

router.get('/', (req, res) => {
  userId = req.session.user_id;
  getMyMaps(userId)
  .then(myMapsData => {
    const templateVars = {
      myMapsData
    }
    res.render('my-maps', templateVars);
    }
  )
});

module.exports = router;
