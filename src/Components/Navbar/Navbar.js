import React from 'react';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="container">
      <ul className="menu">
        <li className="menu-item">
          <a href="/petits-pots">Recettes petits pots</a>
        </li>
        <li className="menu-item">
          <a href="/dme">Recettes DME</a>
        </li>
        <li className="menu-item">
          <a href="/legumes-fruits">Légumes et fruits de saison</a>
        </li>
        <li className="menu-item">
          <a href="/accessoires">Accessoires de cuisine</a>
        </li>
        <li className="menu-item">
          <a href="/mon-compte">Mon compte</a>
        </li>
        <li className="menu-item">
          <a href="/deconnexion">Déconnexion</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
