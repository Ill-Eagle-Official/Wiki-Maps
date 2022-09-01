const db = require('../connection');

const addFavMap = function(map) {

  const queryString = `
  INSERT INTO favourites (user_id, map_id)
  VALUES ($1, $2);`;

  const values = [map.user_id, map.map_id];

  return db
  .query(queryString, values)
  .then((res) => {
    // console.log(res.rows[0]);
    return res.rows[0];
  })
  .catch((err) => {
    return err;
  });
}
exports.addFavMap = addFavMap;
