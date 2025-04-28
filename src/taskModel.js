const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production'
      ? { rejectUnauthorized: false }
      : false,
});
console.log("DATABASE_URL:", process.env.DATABASE_URL);


// Création de la table si elle n'existe pas
const createTable = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS tasks (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      title TEXT NOT NULL,
      completed BOOLEAN DEFAULT false,
      "user" TEXT
    );
  `);
};

createTable();

const getTasks = async () => {
  const res = await pool.query('SELECT * FROM tasks ORDER BY id DESC');
  return res.rows;
};

const getTask = async (id) => {
  const res = await pool.query('SELECT * FROM tasks WHERE id = $1', [id]);
  return res.rows[0];
};

const createTask = async (title, user) => {
  const res = await pool.query(
    'INSERT INTO tasks (title, "user") VALUES ($1, $2) RETURNING *',
    [title, user]
  );
  return res.rows[0];
};

const updateTask = async (id, completed) => {
  const res = await pool.query(
    'UPDATE tasks SET completed = $1 WHERE id = $2 RETURNING *',
    [completed, id]
  );
  return res.rows[0];
};

const deleteTask = async (id) => {
  await pool.query('DELETE FROM tasks WHERE id = $1', [id]);
};

module.exports = {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
}; 