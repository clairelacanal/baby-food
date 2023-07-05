const mongoose = require('mongoose');

module.exports = async function connectDB() {
  await mongoose.connect('mongodb://localhost:27017/yourDatabaseName', { useNewUrlParser: true, useUnifiedTopology: true });
  console.log('Connected to MongoDB');
}
