const express = require('express');
const router  = express.Router();

router.get('/map', (req, res) => {
  res.render('map_page');
});

module.exports = router;
