import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import React from 'react';
import PropTypes from 'prop-types';
import './CardTypeRecette.scss';
import StarRating from '../Etoiles/Etoiles';
import { Link } from 'react-router-dom';

const CardTypeRecette = ({ recipe }) => { // Changer isDme par recipe
  return (
    <div className="card-container">
      <h2>{recipe.isDme ? 'DME' : 'PETITS POTS'}</h2> 
      <div className="card">
        <img src={recipe.imageUrl} className="card-img-top" alt="..." /> 
        <div className="card-body">
          <h5 className="card-title">{recipe.title}</h5> 
          <StarRating rating={recipe.note}/> 
          <Link to={recipe.isDme ? '/dme' : '/petits-pots'} className="btn btn-primary">
            En savoir +
          </Link>
        </div>
      </div>
    </div>
  );
};

CardTypeRecette.propTypes = {
  recipe: PropTypes.object.isRequired, // Changer isDme par recipe
};

export default CardTypeRecette;