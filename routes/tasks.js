const express = require('express');
const router = express.Router();
const taskModel = require('../src/taskModel');

// Afficher toutes les tâches (plus utilisé)
// router.get('/', async (req, res) => {
//   const tasks = await taskModel.getTasks();
//   res.render('tasks', { tasks });
// });

// Ajouter une tâche
router.post('/add', async (req, res) => {
  const { title } = req.body;
  if (title) await taskModel.createTask(title, null);
  res.redirect('/');
});

// Marquer comme terminée ou non
router.post('/toggle/:id', async (req, res) => {
  const task = await taskModel.getTask(req.params.id);
  if (task) await taskModel.updateTask(req.params.id, !task.completed);
  res.redirect('/');
});

// Supprimer une tâche
router.post('/delete/:id', async (req, res) => {
  await taskModel.deleteTask(req.params.id);
  res.redirect('/');
});

module.exports = router; 