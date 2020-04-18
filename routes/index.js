var express = require('express');
var router = express.Router();

const todosCtrl = require('../controllers/todos');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'To Do List' });
});

// GET users
router.get('/', todosCtrl.index);
router.post('/', todosCtrl.create);

router.delete('/:id', todosCtrl.deleteTodo);

module.exports = router;
