const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');  // Ajoutez cette ligne

require('dotenv').config();

const middlewares = require('./middlewares');
const api = require('./api');
const tasksRoutes = require('../routes/tasks');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));
app.set('layout', 'layout');  // Utilisez layout.ejs comme layout par défaut
app.use(expressLayouts);  // Utilisez express-ejs-layouts

app.use(morgan('dev'));
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'", "cdn.jsdelivr.net"],
      styleSrc: ["'self'", "'unsafe-inline'", "cdn.jsdelivr.net"],
      imgSrc: ["'self'", "data:"],
    }
  }
}));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Pour les formulaires
app.use(express.static(path.join(__dirname, '../public')));  // Dossier pour fichiers statiques

app.get('/', (req, res) => {
  res.redirect('/tasks');
});

app.use('/tasks', tasksRoutes);

app.use('/api/v1', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;