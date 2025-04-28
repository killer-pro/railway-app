const API_URL = process.env.REACT_APP_API_URL;

export async function getTasks() {
  const res = await fetch(`${API_URL}/api/tasks`);
  return res.json();
}

export async function addTask(task) {
  const res = await fetch(`${API_URL}/api/tasks`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task),
  });
  return res.json();
}

export async function updateTask(id, updates) {
  const res = await fetch(`${API_URL}/api/tasks/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updates),
  });
  return res.json();
}

export async function deleteTask(id) {
  await fetch(`${API_URL}/api/tasks/${id}`, { method: 'DELETE' });
} 