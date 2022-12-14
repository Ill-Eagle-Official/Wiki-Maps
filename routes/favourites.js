/*
 * All routes for favourites are defined here
 * Since this file is loaded in server.js into /favourites,
 *   these routes are mounted onto /favourites
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */


const express = require('express');
const cookieSession = require("cookie-session");
const router  = express.Router();
const { getFavourites, getPins, deleteFavourite} = require('../db/queries/favourites');
const { route } = require('express/lib/application');

// translate the input data / request body
router.use(express.urlencoded({ extended: true }));


// render the template with dynamic header
router.get('/', (req, res) => {
  const templateVars = {
    userId: req.session.user_id
  };
  res.render("favourites", templateVars)
})

// routes to load favourite maps and pins
router.get('/api', (req, res) => {
  const userId = req.session.user_id;
  // console.log("user id is: ", userId)
  getFavourites(userId)
  .then(myMapsData => {
    console.log("favourites are: ", myMapsData);
    getPins()
    .then(pinsData => {
      // console.log("myMapsData is: ", myMapsData);
      // console.log("pinsData is: ", pinsData);
      res.json([myMapsData, pinsData])
    });
    }
  )
});

// remove map from favourites
router.post('/delete/:id', (req, res) => {
  mapId = req.params.id;
  deleteFavourite(mapId)
  .then(() => {
    res.send(200);
  });
})

module.exports = router;
