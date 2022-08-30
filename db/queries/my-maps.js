const db = require('../connection');

// get the maps created by the user from database given the user id

const getMyMaps = (userId) => {
  return db.query(`SELECT * FROM maps Where user_id = $1`, [userId])
    .then(data => {
      return data.rows;
    });
};

module.exports = { getMyMaps };

