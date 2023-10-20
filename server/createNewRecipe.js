const connectDB = require('../config/database');
const Recipe = require('../models/Recipe');


connectDB();

const newRecipe = new Recipe({
  title: "Ma nouvelle recette",
  isDme: true,
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


const newRecipe2 = new Recipe({
  title: "Ma deuxième nouvelle recette",
  isDme: false,
  imageUrl: "http://exemple.com/monimage2.jpg",
  note: 4,
  tempsPreparation: 25,
  tempsCuisson: 35,
  temperature: 200,
  age: 18,
  ingredients: ["bananes", "chocolat"],
  enonce: "Je coupe la banane et j'ajoute du chocolat "
  });
  
  newRecipe2.save()
    .then(() => console.log('Deuxième recette sauvegardée avec succès !'))
    .catch(error => console.error('Erreur lors de la sauvegarde de la deuxième recette :', error));
  

const newRecipe3 = new Recipe({
  title: "Ma troisieme nouvelle recette",
  isDme: false,
  imageUrl: "http://exemple.com/monimage2.jpg",
  note: 4,
  tempsPreparation: 25,
  tempsCuisson: 35,
  temperature: 200,
  age: 18,
  ingredients: ["bananes", "chocolat"],
  enonce: "Je coupe la banane et j'ajoute du chocolat "
  });
  
  newRecipe3.save()
    .then(() => console.log('Troisième recette sauvegardée avec succès !'))
    .catch(error => console.error('Erreur lors de la sauvegarde de la deuxième recette :', error));
  