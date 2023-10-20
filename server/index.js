const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('../routes/authRoutes');
const connectDB = require('../config/database') // ajustez le chemin en fonction de l'emplacement de votre fichier database.js
const recipeRoutes = require('../routes/recipeRoutes');

const app = express();

// Connect to MongoDB
connectDB();

app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/recipes', recipeRoutes);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});