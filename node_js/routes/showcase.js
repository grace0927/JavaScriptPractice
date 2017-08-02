const fs = require('fs');
const router = require('express').Router();

router.get('/', (req, res) => {
  fs.readFile('react/showcase/index.html', (err, data) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    res.end();
  });
});

router.get('/showCase.js', (req, res) => {
  fs.readFile('react/showcase/showCase.js', (err, data) => {
    res.write(data);
    res.end();
  });
});

router.get('/api/', (req, res) => {
  fs.readFile('react/showcase/showcase.json', (err, data) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(data);
    res.end();
  });
});

module.exports = router;
