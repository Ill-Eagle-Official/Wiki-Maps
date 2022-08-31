const db = require('../connection');

// get the maps created by the user from database given the user id

const getMyMaps = (userId) => {
  return db.query(`SELECT * FROM maps Where user_id = $1`, [userId])
    .then(data => {
      return data.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

// delete map by given an id
const deleteMapById = (mapId) => {
  db.query(`DELETE FROM maps WHERE map.id = $1`, [mapId])
}

module.exports = {
  getMyMaps,
  deleteMapById
};

