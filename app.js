const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const routes = require('./node_js/routes');

// express app
const app = express();

// include body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

// include cross domain request
app.use(cors());

// include self-defined routes
app.use('/', routes.showcase);
app.use('/assets', routes.assets);
app.use('/showcase', routes.showcase);
app.use('/todo', routes.todo);

// include response of 404 other pages
app.use((req, res) => {
  res.status(404).send("Sorry can't find that!");
});

// include error handler
app.use((err, req, res) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// listen port 8080
// TODO: make port number configurable
app.listen(8080, () => {});

module.exports = app;
