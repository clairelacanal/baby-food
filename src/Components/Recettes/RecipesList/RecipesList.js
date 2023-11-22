import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardTypeRecette from '../Components/CardTypeRecette/CardTypeRecette';
import PetitsPotsRow from '../Components/PetitsPotsRow/PetitsPotsRow';
import DmeRow from '../Components/DmeRow/DmeRow';

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/recipes')
      .then(response => {
        console.log(response.data); 
        setRecipes(response.data);
      })
      .catch(error => console.error('Erreur:', error));
  }, []);

  const handleTitleClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const petitsPotsRecipes = recipes.filter(recipe => !recipe.isDme);
  const dmeRecipes = recipes.filter(recipe => recipe.isDme);

  return (
    <div>
      <CardTypeRecette recipe={{ isDme: true, title: "Test", imageUrl: "http://example.com/image.jpg", note: 5, tempsPreparation: 10, tempsCuisson: 45, temperature: 180, age: 6, ingredients: ["banane", "chocolat"], enonce: "je coupe la banane" }} />

      {petitsPotsRecipes.length > 0 && (
        <PetitsPotsRow recipes={petitsPotsRecipes} />
      )}

      {dmeRecipes.length > 0 && (
        <DmeRow recipes={dmeRecipes} />
      )}

      {selectedRecipe && (
        <div>
          <h2>{selectedRecipe.title}</h2>
          <p>{selectedRecipe.imageUrl}</p>
          <p>{selectedRecipe.note}</p>
          {/* Affichez les autres détails de la recette ici */}
        </div>
      )}
    </div>
  );
}

export default RecipeList;
