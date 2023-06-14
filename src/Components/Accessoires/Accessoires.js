import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import image from '../../Images/cook-kids.jpg';
import './Accessoires.scss';

const Accessories = () => {
  return (
    <div className="card text-bg-dark">
      <img src={image} className="card-img" alt="..." />
      <div className="card-img-overlay">
        <h5 className="card-title">Les accessoires de cuisine</h5>
      </div>
    </div>
  );
};


export default Accessories;