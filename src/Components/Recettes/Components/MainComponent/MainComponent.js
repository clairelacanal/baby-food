import React from 'react';
import PetitsPotsRow from '../PetitsPotsRow/PetitsPotsRow';
import DmeRow from '../DmeRow/DmeRow';
import PropTypes from 'prop-types'; // Importez PropTypes


const MainComponent = ({ recipes }) => {
  return (
    <div className="main-container">
      <h2>Les nouvelles recettes de petits pots</h2>
      <PetitsPotsRow recipes={recipes} />

      <h2>Les nouvelles recettes de DME</h2>
      <DmeRow recipes={recipes} />
    </div>
  );
}

MainComponent.propTypes = {
    recipes: PropTypes.array.isRequired, // Définissez le propTypes pour recipes
};

export default MainComponent;
