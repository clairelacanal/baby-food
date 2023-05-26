import React from 'react';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/petits-pots">Recettes petits pots</a>
        </li>
        <li>
          <a href="/dme">Recettes DME</a>
        </li>
        <li>
          <a href="/legumes-fruits">Légumes et fruits de saison</a>
        </li>
        <li>
          <a href="/accessoires">Accessoires de cuisine</a>
        </li>
        <li>
          <a href="/mon-compte">Mon compte</a>
        </li>
        <li>
          <a href="/deconnexion">Déconnexion</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;