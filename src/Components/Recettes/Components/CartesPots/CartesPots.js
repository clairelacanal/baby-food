import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import React from 'react';

const CardPots = () => {
  return (
    <div>
    <h6>Les nouvelles recettes de petits pots</h6>
     <div className="card" style={{ width: '18rem' }}>
       <img src="..." className="card-img-top" alt="..." />
       <div className="card-body">
         <h5 className="card-title">Card title</h5>
         <p className="card-text">
           Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
         </p>
          <a href="#" className="btn btn-primary">
           Go somewhere
         </a>
       </div>
     </div>
 </div>
  );
};

export default CardPots;
