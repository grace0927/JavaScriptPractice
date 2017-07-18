const fs = require( 'fs' );
const router = require('express').Router();

router.get( '/', (req, res) => {
    fs.readFile( 'NodeJs/source/showcase', function(err, data) {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write( data );
        res.end();
    } );
} );

module.exports = router;
