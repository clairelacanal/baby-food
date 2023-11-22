// PetitsPotsRow.jsx
import React from 'react';
import CardTypeRecette from '../CardTypeRecette/CardTypeRecette';
import PropTypes from 'prop-types'; // Importez PropTypes

const PetitsPotsRow = ({ recipes }) => {
  const petitsPotsRecipes = recipes.filter(recipe => !recipe.isDme);

  return (
    <div className="row">
      {petitsPotsRecipes.map(recipe => (
        <CardTypeRecette key={recipe._id} recipe={recipe} />
      ))}
    </div>
  );
}

PetitsPotsRow.propTypes = {
    recipes: PropTypes.array.isRequired, // Définissez le propTypes pour recipes
};

export default PetitsPotsRow;
