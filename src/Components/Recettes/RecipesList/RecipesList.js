import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardTypeRecette from '../Components/CardTypeRecette/CardTypeRecette';

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/')
      .then(response => {
        console.log(response.data); // ajouter cette ligne
        setRecipes(response.data);
      })
      .catch(error => console.error('Erreur:', error));
  }, []);

  const handleTitleClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  return (
    <div>
    <CardTypeRecette recipe={true} />
    <CardTypeRecette recipe={false} />
      
    {recipes.length > 0 && recipes.map(recipe => (
    <CardTypeRecette key={recipe._id} recipe={recipe} onClick={() => handleTitleClick(recipe)} />
      ))}

      {selectedRecipe && (
        <div>
          <h2>{selectedRecipe.title}</h2>
          {/* Affichez les autres détails de la recette ici */}
        </div>
      )}
    </div>
  );
}

export default RecipeList;
