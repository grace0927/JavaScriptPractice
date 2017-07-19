const cors = require( 'cors' );
const express = require( 'express' );
const fs = require( 'fs' );
const routes = require('./node_js/routes');

// express app
const app = express();

app.use( cors() );
app.use( '/assets', routes.assets );
app.use( '/showcase', routes.showcase );
app.use( '/todo', routes.todo );

app.listen( 8080, () => {} );

module.exports = app;
