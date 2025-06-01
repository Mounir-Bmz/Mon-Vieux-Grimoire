const express = require('express');
const dotenv = require('dotenv');

// Charger les variables d'environnement
dotenv.config();

// Créer l'application Express
const app = express();

// Middleware pour parser le JSON
app.use(express.json());

// Route test
app.get('/api/test', (req, res) => {
  res.json({ message: 'Serveur Express fonctionne !' });
});

// Port du serveur (défini dans .env ou 4000 par défaut)
const PORT = process.env.PORT || 4000;

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});