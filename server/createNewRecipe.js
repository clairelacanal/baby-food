const Recipe = require('../models/Recipe');

const newRecipe = new Recipe({
  title: "Ma nouvelle recette",
  imageUrl: "http://exemple.com/monimage.jpg",
  note: 5,
  tempsPreparation: 30,
  tempsCuisson: 45,
  temperature: 180,
  age: 12,
  ingredients: ["pommes", "sucre", "cannelle"],
  enonce: "Je coupe la pomme et j'ajoute du sucre "
});

newRecipe.save()
  .then(() => console.log('Recette sauvegardée avec succès !'))
  .catch(error => console.error('Erreur lors de la sauvegarde de la recette :', error));