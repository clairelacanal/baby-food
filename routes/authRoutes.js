const express = require('express');
const bcrypt = require('bcryptjs');
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

module.exports = router;
