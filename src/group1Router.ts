const group1Router = require('express').Router();

group1Router.get('/', (req, res) => {
  res.send({
    from: 'group1',
  });
});

group1Router.get('/:id', (req, res) => {
  res.send({
    from: `group1/${req.params.id}`,
  });
});

module.exports = group1Router;
