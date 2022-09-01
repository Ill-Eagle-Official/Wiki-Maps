const db = require('../connection');

// Function to get favourite maps given a user id
const getFavourites = (userId) => {
  return db.query(`SELET * FROM favourites WHERE user_id = $1`, [userID])
    .then(data => {
      return data.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
}

// Function to get all pins
const getPins = () => {
  return db.query(`SELECT * FROM pins;`)
  .then(res => res.rows);
}


// // Function to remove favourate map
// const deleteFavourite = (mapId, userId) => {
//   return db.query
// }

module.exports = {
  getFavourites,
  getPins
}
