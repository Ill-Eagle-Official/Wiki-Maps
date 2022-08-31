const db = require('../connection');

// get the maps created by the user from database given the user id
const getMyMaps = (userId) => {
  return db.query(`SELECT * FROM maps WHERE user_id = $1`, [userId])
    .then(data => {
      return data.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

// delete map by given an id
const deleteMapById = (mapId) => {
  return db.query(`DELETE FROM maps WHERE maps.id = $1`, [mapId])
    .catch((err) => {
      console.log(err.message);
    });
}

// // get all the pins belong to a map by map id
// const getPinsByMapId = (id) => {
//   db.query(`SELECT latitude, longitude, title, image_url FROM pins WHERE map_id = $1`, [id])
//     .then(data => {
//       return data.rows;
//     })
//     .catch((err) => {
//       console.log(err.message);
//     });
// }

module.exports = {
  getMyMaps,
  deleteMapById
};

