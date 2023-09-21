import React from 'react';
import './ButtonRecette.scss';
import { Link } from 'react-router-dom';


function ButtonEcrire() {
  return (
    <Link to="/ecrire-une-recette" className='link'>
        <button className="button-ecrire">
            <p>Ecrire une recette</p>
        </button>
    </Link>
  );
}

export default ButtonEcrire;