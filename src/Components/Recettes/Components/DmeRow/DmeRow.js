// DmeRow.jsx
import React from 'react';
import CardTypeRecette from '../CardTypeRecette/CardTypeRecette';
import PropTypes from 'prop-types'; // Importez PropTypes

const DmeRow = ({ recipes }) => {
  const dmeRecipes = recipes.filter(recipe => recipe.isDme);

  return (
    <div className="row">
      {dmeRecipes.map(recipe => (
        <CardTypeRecette key={recipe._id} recipe={recipe} />
      ))}
    </div>
  );
}

DmeRow.propTypes = {
    recipes: PropTypes.array.isRequired, // Définissez le propTypes pour recipes
};

export default DmeRow;
