/*
 * All routes for Maps are defined here
 * Since this file is loaded in server.js into /api/maps,
 *   these routes are mounted onto /api/maps
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const { getMaps } = require('../db/queries/maps');
const { addFavMap } = require('../db/queries/fav-button')
const { getMapByID, getPins, getPinsByMapID, insertMap, insertPin } = require('./helpers');

module.exports = function(db) {

router.get('/', (req, res) => {
  getMaps()
  .then(mapsData => {
    getPins()
    .then(pinsData => {
      res.json([mapsData, pinsData])
    })
  })
});

router.get("/:id", (req, res) => {
  const mapID = req.params.id;

  if (!mapID) {
    res.status(400).send("Invalid map ID");
    return;
  }

  getMapByID(db, mapID)
    .then(reqMap => {
      // console.log("reqMap is: ", reqMap)
      getPinsByMapID(mapID)
      .then(reqPins => {
        res.json([reqMap, reqPins]);
      })
    })
    .catch(err => {
      res.status(500).send("Error getting map from database");
    });
});



router.post('/favourites/:id', (req, res) => {

  const userId = req.session.user_id;
  const mapId = req.params.id;
  console.log(userId);
  addFavMap({...req.body, user_id: userId, map_id: mapId})
    .then(favMap => {
      res.send(favMap);
    })
    .catch(e => {
      console.error(e);
      res.send(e)
    });
});

router.post("/", (req, res) => {

  insertMap({...req.body, user_id: req.session.user_id})
  .then(newMap => {
    res.redirect('/my-maps')
    res.send(newMap);
  })
});

router.post('/:id' , (req, res) => {
  let mapId = req.params.id;

  insertPin({...req.body, user_id: req.session.user_id, map_id: mapId})
  .then(newPin => {
    res.redirect(`/my-maps/edit/${mapId}`)
    res.send(newPin);
  })
})

return router;

}
