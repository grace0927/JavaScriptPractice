const fs = require( 'fs' );
const router = require('express').Router();

router.get( '/*', (req, res) => {
    fs.readFile( 'assets'+req.url, (err, data) => {
        res.write(data);
        res.end();
    } );
} );

module.exports = router;
