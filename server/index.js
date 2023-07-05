const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./db');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

connectDB();

app.use('/auth', authRoutes);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});