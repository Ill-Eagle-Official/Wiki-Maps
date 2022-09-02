const db = require('../connection');

// Function to get favourite maps given a user id
const getFavourites = (userId) => {
  return db.query(`
  SELECT favourites.id as fav_id, favourites.user_id, favourites.map_id, maps.title as title, maps.country as country, maps.city as city, maps.latitude as latitude, maps.longitude as longitude, maps.zoom as zoom
  FROM favourites
  JOIN maps ON maps.id = favourites.map_id
  WHERE favourites.user_id = $1`, [userId])
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


// Function to remove favourate map
const deleteFavourite = (favId) => {
  return db.query(`
  DELETE FROM favourites
  WHERE favourites.id = $1`, [favId])
    .catch((err) => {
      console.log(err.message);
    });
}

module.exports = {
  getFavourites,
  getPins,
  deleteFavourite
}
