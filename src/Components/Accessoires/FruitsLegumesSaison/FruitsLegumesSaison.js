import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import vegetables from '../../../Images/vegetables.jpg';

const FruitsVegetables = () => {
  return (
    <div className="card text-bg-dark">
      <img src={vegetables} className="card-img" alt="..."/>
      <div className="card-img-overlay">
        <h5 className="card-title">Card title</h5>
      </div>
    </div>
  );
};

export default FruitsVegetables;