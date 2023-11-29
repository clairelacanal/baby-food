import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import vegetables from '../../Images/vegetables.jpg';
import './FruitsLegumesSaison.scss';  // Continuez à utiliser vos styles SCSS

const FruitsVegetables = () => {
  return (
    <div className="card bg-light">  {/* Remplacez text-bg-black par bg-light ou bg-white */}
      <img src={vegetables} className="card-img" alt="..."/>
      <div className="card-img-overlay">
        <h5 className="card-title">Les légumes & fruits de saison</h5>
      </div>
    </div>
  );
};

export default FruitsVegetables;
