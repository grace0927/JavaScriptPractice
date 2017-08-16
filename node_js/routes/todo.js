const fs = require('fs');
const router = require('express').Router();

router.get('/', (req, res) => {
  fs.readFile('backbone/todo/todo.html', (err, data) => {
    res.writeHead(200, {
      'Content-Type': 'text/html',
    });
    res.write(data);
    res.end();
  });
});

router.get('/api', (req, res) => {
  fs.readFile('node_js/resource/todo.json', 'utf-8', (err, data) => {
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });
    res.write(data);
    res.end();
  });
});

router.post('/api', (req, res) => {
  const todo = {
    author: req.body.author,
    title: req.body.title,
    due: req.body.due,
  };

  fs.readFile('node_js/resource/todo.json', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    // retrieve current todos and parse it to object
    const todos = JSON.parse(data);

    // totoal amount control
    if (todos.length > 100) {
      return;
    }

    todos.push(todo);
    fs.writeFile('node_js/resource/todo.json', JSON.stringify(todos));
  });

  res.writeHead(200, {
    'Content-Type': 'application/json',
  });
  res.write(JSON.stringify(todo));
  res.end();
});

module.exports = router;
