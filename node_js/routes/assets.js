const fs = require('fs');
const router = require('express').Router();

router.get('/*.css', (req, res) => {
  fs.readFile(`assets${req.url}`, (err, data) => {
    res.writeHead(200, {
      'Content-Type': 'text/css',
    });
    res.write(data);
    res.end();
  });
});

router.get('/*', (req, res) => {
  fs.readFile(`assets${req.url}`, (err, data) => {
    res.write(data);
    res.end();
  });
});

module.exports = router;
