// load .env data into process.env
require('dotenv').config();

// Web server config
const sassMiddleware = require('./lib/sass-middleware');
const express = require('express');
const morgan = require('morgan');
const cookieSession = require("cookie-session");

const PORT = process.env.PORT || 8080;
const app = express();

app.set('view engine', 'ejs');

// translate the input data / request body
app.use(express.urlencoded({ extended: true }));

// for cookie encryption
app.use(cookieSession({
  name: 'session',
  keys: ["ndjkahjfi839jkwir7406fkjd"]
}));


// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(
  '/styles',
  sassMiddleware({
    source: __dirname + '/styles',
    destination: __dirname + '/public/styles',
    isSass: false, // false => scss, true => sass
  })
);
app.use(express.static('public'));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const userApiRoutes = require('./routes/users-api');
const widgetApiRoutes = require('./routes/widgets-api');
const usersRoutes = require('./routes/users');
const mapsRoutes = require('./routes/maps-api');
const db = require('./db/connection');

const myMapsRoutes = require('./routes/my-maps');
const { Template } = require('ejs');

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
app.use('/api/users', userApiRoutes);
app.use('/api/widgets', widgetApiRoutes);
app.use('/users', usersRoutes);
app.use('/api/maps', mapsRoutes(db));
app.use('/api/maps/:id', mapsRoutes(db));

// Note: mount other resources here, using the same pattern above
app.use('/api/maps', mapsRoutes);
app.use('/my-maps', myMapsRoutes);
// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.get('/', (req, res) => {
  const templateVars = { // creates dynamic header with/without login
    userId: req.session.user_id
  };
  res.render('index', templateVars);
});

app.get('/new', (req, res) => {
  const templateVars = {
    userId: req.session.user_id
  }
  res.render('new_map', templateVars);
});

app.get('/login/:id', (req, res) => {
  req.session.user_id = req.params.id; // set up cookie session
  res.redirect('/');
})


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
