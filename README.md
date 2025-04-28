# Railway ToDo App

Application de gestion de tâches collaborative (ToDo App) déployée sur Railway avec CI/CD via GitHub Actions.

## 🚀 Démarrage rapide

### 1. Cloner le dépôt
```bash
git clone <url-du-repo>
cd railway-app
```

### 2. Installer les dépendances
```bash
npm install
```

### 3. Configurer l'environnement
Crée un fichier `.env` à la racine ou dans `backend/` avec :
```env
DATABASE_URL=postgresql://<user>:<password>@<host>:<port>/<database>
PORT=3000
```

### 4. Lancer en local
```bash
npm start
```
L'application sera accessible sur [http://localhost:3000](http://localhost:3000)

---

## 📚 Fonctionnalités
- Ajout, suppression, validation de tâches
- Interface moderne responsive (EJS + CSS)
- API REST pour les tâches et endpoints de test
- Connexion PostgreSQL (Railway ou local)
- CI/CD avec GitHub Actions

---

## 🗂️ Structure du projet

- `app.js` : Point d'entrée principal
- `routes/` : Routes Express (`index`, `tasks`, `users`)
- `src/` : Modèle de données (`taskModel.js`), middlewares, API
- `views/` : Templates EJS (`index.ejs`, `error.ejs`, `layout.ejs`)
- `public/stylesheets/` : Fichiers CSS personnalisés
- `test/` : Tests unitaires (Jest/Supertest)

---

## 🛠️ Développement
- **Backend** : Node.js, Express, EJS
- **Base de données** : PostgreSQL (Railway ou local)
- **Frontend** : EJS (pas de React)

---

## 📋 Endpoints principaux

### Web
- `/` : Page d'accueil, gestionnaire de tâches (ajout, suppression, validation)

### API
- `/api/v1` : Test API (GET)
- `/api/v1/emojis` : Liste d'emojis (GET)

### Tâches (POST)
- `/tasks/add` : Ajouter une tâche (`title`)
- `/tasks/toggle/:id` : Marquer comme terminée/à faire
- `/tasks/delete/:id` : Supprimer une tâche

---

## 🧪 Tests
Lance les tests avec :
```bash
npm test
```
Les tests couvrent l'API et les routes principales.

---

## 🎨 Personnalisation UI
Modifie le fichier `public/stylesheets/style.css` pour personnaliser l'apparence de l'application.

---

## 🚀 Déploiement Railway
1. Crée un compte sur [railway.app](https://railway.app)
2. Crée un projet Railway et ajoute le plugin PostgreSQL
3. Configure l'URL de la base dans les variables d'environnement
4. Ajoute le token Railway dans les secrets GitHub (`RAILWAY_TOKEN`)
5. Pousse sur `main` pour déclencher le déploiement

---

## 📄 Licence
MIT

---

## 🙋‍♂️ Questions
Pour toute question, consulte la documentation ou ouvre une issue sur [GitHub](https://github.com/killer-pro/railway-app). 