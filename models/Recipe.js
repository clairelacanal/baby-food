const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
  title: String,
  isDme: Boolean,
  imageUrl: String,
  note: Number,
  tempsPreparation: Number,
  tempsCuisson: Number,
  temperature: Number,
  age: Number,
  ingredients: [String],
  enonce: String
});

module.exports = mongoose.model('Recipe', RecipeSchema);