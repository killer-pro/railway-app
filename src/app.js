const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const path = require('path');

require('dotenv').config();

const middlewares = require('./middlewares');
const api = require('./api');
const tasksRoutes = require('../routes/tasks');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Pour les formulaires

app.get('/', (req, res) => {
  res.redirect('/tasks');
});

app.use('/tasks', tasksRoutes);

app.use('/api/v1', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;