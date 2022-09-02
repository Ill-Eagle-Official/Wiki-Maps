/*
 * All routes for my-maps are defined here
 * Since this file is loaded in server.js into /my-maps,
 *   these routes are mounted onto /my-maps
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */


const express = require('express');
const cookieSession = require("cookie-session");
const router  = express.Router();
const { getMyMaps, deleteMapById, getPins} = require('../db/queries/my-maps');
const { route } = require('express/lib/application');
const { getPinsByMapID } = require('./helpers');

// translate the input data / request body
router.use(express.urlencoded({ extended: true }));

router.get('/', (req, res) => {
  const templateVars = {
    userId: req.session.user_id
  };
  res.render("my-maps", templateVars)
})

router.get('/api', (req, res) => {
  const userId = req.session.user_id;
  getMyMaps(userId)
  .then(myMapsData => {
    getPins()
    .then(pinsData =>
      res.json([myMapsData, pinsData]))
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

router.get("/edit/:id", (req, res) => {
  console.log(req.params.id)
  const templateVars = {
    mapId: req.params.id,
    userId: req.session.user_id
  };
  console.log(templateVars);
  res.render("edit_map", templateVars);
});

module.exports = router;
