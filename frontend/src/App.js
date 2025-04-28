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
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {tasks.map(task => (
            <li key={task.id} style={{ marginBottom: 10 }}>
              <button
                type="button"
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  textDecoration: task.completed ? 'line-through' : 'none',
                  marginRight: 10,
                  cursor: 'pointer',
                  color: 'inherit',
                  font: 'inherit',
                }}
                onClick={() => handleToggleComplete(task)}
              >
                {task.title}
              </button>
              <button onClick={() => handleDelete(task.id)} style={{ marginLeft: 10 }}>
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
