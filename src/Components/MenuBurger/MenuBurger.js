import React, { useState } from 'react';
import MenuBurger from './MenuBurger.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faCarrot } from '@fortawesome/free-solid-svg-icons';
import { faKitchenSet } from '@fortawesome/free-solid-svg-icons';
import { faBowlFood } from '@fortawesome/free-solid-svg-icons';
import { faHand } from '@fortawesome/free-solid-svg-icons';


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
            <a href="/petits-pots"><FontAwesomeIcon icon={faBowlFood}/>Recettes petits pots</a>
          </li>
          <li>
            <a href="/dme"><FontAwesomeIcon icon={faHand}/>Recettes DME</a>
          </li>
          <li>
            <a href="/legumes-fruits"><FontAwesomeIcon icon={faCarrot}/>Légumes et fruits de saison</a>
          </li>
          <li>
            <a href="/accessoires"><FontAwesomeIcon icon={faKitchenSet}/>Accessoires de cuisine</a>
          </li>
          <li>
            <a href="/mon-compte"><FontAwesomeIcon icon={faUserCircle}/>Mon compte</a>
          </li>
          <li>
            <a href="/deconnexion"><FontAwesomeIcon icon={faTrashCan}/>Déconnexion</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default BurgerMenu;