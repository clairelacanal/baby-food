const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

router.post('/signup', async (req, res) => {
  try {
    const { email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ email, hashedPassword });

    await newUser.save();

    res.status(200).json({ message: 'Inscription réussie' });
  } catch (error) {
    res.status(500).json({ message: 'Une erreur est survenue' });
  }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Chercher l'utilisateur dans la base de données
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: 'L\'email ou le mot de passe est incorrect' });
      }
  
      // Vérifier le mot de passe
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'L\'email ou le mot de passe est incorrect' });
      }
  
      // Si tout est ok, créer et retourner un jeton JWT
      const token = jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET,  // Assurez-vous d'avoir une clé secrète pour signer le JWT
        { expiresIn: '1h' }  // Le jeton expire dans 1 heure
      );
  
      return res.json({ token });
  
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Erreur serveur' });
    }
  });

module.exports = router;
