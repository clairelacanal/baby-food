import React from 'react';
import PropTypes from 'prop-types';
import StarRating from '../Etoiles/Etoiles';
import { Link } from 'react-router-dom';
import CardTypeRecettes from './CardTypeRecettes.scss';

const CardTypeRecette = ({ recipe }) => {
  return (
    <div className="card">
      <img src={recipe.imageUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{recipe.title}</h5>
        <StarRating rating={recipe.note} />
        <Link to={recipe.isDme ? '/dme' : '/petits-pots'} className="btn btn-primary">
          En savoir +
        </Link>
      </div>
    </div>
  );
};

CardTypeRecette.propTypes = {
  recipe: PropTypes.object.isRequired,
};

export default CardTypeRecette;
