const cors = require( 'cors' );
const express = require( 'express' );
const routes = require('./NodeJs/routes');

// express app
const app = express();

app.use( cors() );
app.use('/showcase', routes.showcase);

app.listen( 8080, () => {} );

module.exports = app;
