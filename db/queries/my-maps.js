const db = require('../connection');

// Function to get the maps created by the user from database given the user id
const getMyMaps = (userId) => {
  return db.query(`SELECT * FROM maps WHERE user_id = $1`, [userId])
    .then(data => {
      return data.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

// Function to get all pins
const getPins = () => {
  return db.query(`SELECT * FROM pins;`)
  .then(res => res.rows);
}

// Function to delete map by given an id
const deleteMapById = (mapId) => {
  return db.query(`DELETE FROM maps WHERE maps.id = $1`, [mapId])
    .catch((err) => {
      console.log(err.message);
    });
}

module.exports = {
  getMyMaps,
  deleteMapById,
  getPins
};

