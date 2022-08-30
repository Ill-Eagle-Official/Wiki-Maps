const db = require('../connection');

const getPins = () => {
  return db.query('SELECT * FROM pins;')
    .then(data => {
      return data.rows;
    });
}

module.exports = { getPins };
