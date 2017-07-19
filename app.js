const cors = require( 'cors' );
const express = require( 'express' );
const fs = require( 'fs' );
const routes = require('./node_js/routes');

// express app
const app = express();

app.use( cors() );

// server asset
app.use( '/assets', (req, res) => {
    fs.readFile( 'assets'+req.url, (err, data) => {
        res.write(data);
        res.end();
    } );
} );

app.use( '/showcase', routes.showcase );

app.listen( 8080, () => {} );

module.exports = app;
