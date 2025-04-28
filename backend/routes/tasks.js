const express = require('express');
const router = express.Router();
const taskModel = require('../src/taskModel');

// GET /tasks - liste toutes les tâches
router.get('/', async (req, res) => {
  try {
    const tasks = await taskModel.getTasks();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /tasks/:id - récupère une tâche
router.get('/:id', async (req, res) => {
  try {
    const task = await taskModel.getTask(req.params.id);
    if (!task) return res.status(404).json({ error: 'Tâche non trouvée' });
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /tasks - crée une tâche
router.post('/', async (req, res) => {
  try {
    const { title, user } = req.body;
    if (!title) return res.status(400).json({ error: 'Le titre est requis' });
    const task = await taskModel.createTask(title, user || null);
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT /tasks/:id - met à jour l'état terminé
router.put('/:id', async (req, res) => {
  try {
    const { completed } = req.body;
    const task = await taskModel.updateTask(req.params.id, completed);
    if (!task) return res.status(404).json({ error: 'Tâche non trouvée' });
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE /tasks/:id - supprime une tâche
router.delete('/:id', async (req, res) => {
  try {
    await taskModel.deleteTask(req.params.id);
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router; 