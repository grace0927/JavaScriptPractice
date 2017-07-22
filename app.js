const cors = require( 'cors' );
const express = require( 'express' );
const fs = require( 'fs' );
const routes = require('./node_js/routes');

// express app
const app = express();

app.use( cors() );
app.use( '/', routes.showcase );
app.use( '/assets', routes.assets );
app.use( '/showcase', routes.showcase );
app.use( '/todo', routes.todo );

// 404 other pages
app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
})

// error handler
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen( 8080, () => {} );

module.exports = app;
