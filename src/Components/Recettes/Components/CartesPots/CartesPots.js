import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './CartesPots.scss';
import recette1 from '../../../../Images/recipebaby-1.jpg';
import React from 'react';
import StarRating from '../Etoiles/Etoiles';




const CardPots = () => {
  return (
    <div className="card-container">
      <h6>Dernières créations culinaires pour bébés</h6>
      <div className="card">
        <img src={recette1} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <StarRating/>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardPots;


