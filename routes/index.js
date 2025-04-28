var express = require('express');
var router = express.Router();
const taskModel = require('../src/taskModel');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const tasks = await taskModel.getTasks();
  res.render('index', { title: 'Gestionnaire de tâches', tasks });
});

module.exports = router;
