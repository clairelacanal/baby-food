import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardTypeRecette from '../Components/CardTypeRecette/CardTypeRecette';

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    axios.get('/recettes')
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
    <CardTypeRecette isDme={true} />
    <CardTypeRecette isDme={false} />
      
      {recipes.map(recipe => (
        <CardTypeRecette key={recipe._id} type={recipe.isDme} onClick={() => handleTitleClick(recipe)} />
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
