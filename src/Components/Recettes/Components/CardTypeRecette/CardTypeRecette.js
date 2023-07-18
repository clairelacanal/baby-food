import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import React from 'react';
import PropTypes from 'prop-types';
import './CardTypeRecette.scss';
import recette1 from '../../../../Images/recipebaby-1.jpg';
import recette2 from '../../../../Images/recipebaby-2.jpg';
import StarRating from '../Etoiles/Etoiles';
import { Link } from 'react-router-dom';

const CardTypeRecette = ({ isDme }) => {
  return (
    <div className="card-container">
      <h2>{isDme ? 'DME' : 'PETITS POTS'}</h2>
      <div className="card">
        <img src={isDme ? recette2 : recette1} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <StarRating/>
          <Link to={isDme ? '/dme' : '/petits-pots'} className="btn btn-primary">
            En savoir +
          </Link>
        </div>
      </div>
    </div>
  );
};

CardTypeRecette.propTypes = {
  isDme: PropTypes.bool.isRequired,
};

export default CardTypeRecette;




