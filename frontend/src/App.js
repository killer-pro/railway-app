import React, { useEffect, useState } from 'react';
import './App.css';
import { getTasks, addTask, updateTask, deleteTask } from './api';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTasks();
  }, []);

  async function fetchTasks() {
    setLoading(true);
    const data = await getTasks();
    setTasks(data);
    setLoading(false);
  }

  async function handleAddTask(e) {
    e.preventDefault();
    if (!newTitle.trim()) return;
    await addTask({ title: newTitle, completed: false });
    setNewTitle('');
    fetchTasks();
  }

  async function handleToggleComplete(task) {
    await updateTask(task.id, { completed: !task.completed });
    fetchTasks();
  }

  async function handleDelete(id) {
    await deleteTask(id);
    fetchTasks();
  }

  return (
    <div className="App">
      <h1>Gestionnaire de tâches</h1>
      <form onSubmit={handleAddTask} style={{ marginBottom: 20 }}>
        <input
          value={newTitle}
          onChange={e => setNewTitle(e.target.value)}
          placeholder="Nouvelle tâche"
        />
        <button type="submit">Ajouter</button>
      </form>
      {loading ? (
        <p>Chargement...</p>
      ) : (
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <button
                type="button"
                className={`task-title${task.completed ? ' completed' : ''}`}
                onClick={() => handleToggleComplete(task)}
                onKeyDown={e => {
                  if (e.key === 'Enter' || e.key === ' ') handleToggleComplete(task);
                }}
                aria-pressed={task.completed}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  margin: 0,
                  cursor: 'pointer',
                  textAlign: 'left',
                  width: '100%',
                }}
              >
                {task.title}
              </button>
              <button
                className="delete-btn"
                onClick={() => handleDelete(task.id)}
                aria-label={`Supprimer la tâche ${task.title}`}
              >
                Supprimer
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
