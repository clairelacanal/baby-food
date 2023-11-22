import React, { useState, useEffect } from 'react';
import BurgerMenu from '../MenuBurger/MenuBurger';
import Profil from '../Profile/Profil';
import RecipeList from '../Recettes/RecipesList/RecipesList';
import Navbar from '../Navbar/Navbar';
import FruitsVegetables from '../FruitsLegumesSaison/FruitsLegumesSaison';
import Accessories from '../Accessoires/Accessoires';
import Footer from '../Footer/Footer';

const Accueil = () => {

  return (
        <div>
            <Profil/>
            <RecipeList/>
            <FruitsVegetables/>
            <Accessories/>
            <Footer/>
        </div> 
  );
};

export default Accueil;

