# Railway Fullstack App

Ce projet est une application de gestion de tâches collaborative (ToDo App) déployée sur Railway avec CI/CD via GitHub Actions.

## 🚀 Démarrage rapide

### 1. Cloner le dépôt
```bash
git clone <url-du-repo>
cd railway-app
```

### 3. Lancer en local
Dans deux terminaux séparés :
```bash
npm start
```

---

## ⚙️ Configuration

- Crée un fichier `.env` dans `backend/` avec :
  ```env
  DATABASE_URL=postgresql://postgres:IrykdMRYO0dsPHjjhXFhBAAlQ0TxXLOz@postgres.railway.internal:5432/railway
  PORT=5000
  ```
- Pour Railway, configure les variables d'environnement dans le dashboard Railway.

---

## 🛠️ Développement

- **Backend** :
  - Express.js
  - Connexion à PostgreSQL (Railway)
  - Routes REST pour gérer les tâches (CRUD)
- **Frontend** :
  - React.js
  - Appels à l'API backend pour afficher et gérer les tâches

---

## 🗄️ Base de données (PostgreSQL)

- Table principale : `tasks`
  - `id` (UUID, PK)
  - `title` (string)
  - `completed` (boolean)
  - `user` (string ou user_id)

---

## 🚀 Déploiement Railway

1. Crée un compte sur [railway.app](https://railway.app)
2. Crée un projet Railway
3. Ajoute le plugin PostgreSQL
4. Récupère l'URL de la base et configure-la dans les variables d'environnement
5. Ajoute le token Railway dans les secrets GitHub (`RAILWAY_TOKEN`)
6. Pousse sur `main` pour déclencher le déploiement

---

## 🤖 CI/CD avec GitHub Actions

- Le workflow `.github/workflows/deploy.yml` installe les dépendances, lance les tests et déploie automatiquement sur Railway à chaque push sur `main`.

---

## 📚 Utilisation

- Accède à l'URL Railway pour utiliser l'application
- Ajoute, modifie, supprime et termine des tâches

---

## 📁 Dossiers importants

- `/` : Code source de l'API, connexion DB, routes, modèles ,pages
- `.github/workflows/` : Fichiers de CI/CD

---

Pour toute question, consulte la documentation dans chaque dossier ou ouvre une issue ! 