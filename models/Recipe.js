const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
  title: String,
  imageUrl: String,
  note: Number,
  tempsPreparation: Number,
  tempsCuisson: Number,
  age: Number,
  ingredients: [String]
});

module.exports = mongoose.model('Recipe', RecipeSchemaSchema);