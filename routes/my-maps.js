/*
 * All routes for my-maps are defined here
 * Since this file is loaded in server.js into /my-maps,
 *   these routes are mounted onto /my-maps
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */


const express = require('express');
const cookieSession = require("cookie-session");
const router  = express.Router();
const { getMyMaps, deleteMapById } = require('../db/queries/my-maps');
const { route } = require('express/lib/application');

// translate the input data / request body
router.use(express.urlencoded({ extended: true }));

router.get('/', (req, res) => {

  res.render("my-maps")
})

router.get('/api', (req, res) => {
  userId = req.session.user_id;
  getMyMaps(userId)
  .then(myMapsData => {
    
    res.json(myMapsData);
    }
  )
});

router.post('/delete/:id', (req, res) => {
  mapId = req.params.id;
  deleteMapById(mapId)
  .then(() => {
    res.send(200);
  });
})

module.exports = router;
