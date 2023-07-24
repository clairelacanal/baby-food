import React, { useState } from 'react';
import './MenuBurger.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';


const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="burger-menu">
      <div className={`burger-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {isOpen && (
        <ul className={`menu-items ${isOpen ? 'open' : ''}`}>
          <li>
            <a href="/petits-pots">Recettes petits pots</a>
            <hr/>
          </li>
          <li>
            <a href="/dme">Recettes DME</a>
            <hr/>
          </li>
          <li>
            <a href="/legumes-fruits">Légumes et fruits de saison</a>
            <hr/>
          </li>
          <li>
            <a href="/accessoires">Accessoires de cuisine</a>
            <hr/>
          </li>
          <li>
            <a href="/mon-compte"><FontAwesomeIcon className='icon' icon={faUserCircle}/>Mon compte</a>
            <hr/>
          </li>
          <li>
            <a href="/deconnexion" className='red-light'><FontAwesomeIcon id ="red-icon" className='icon' icon={faTrashCan}/>Déconnexion</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default BurgerMenu;