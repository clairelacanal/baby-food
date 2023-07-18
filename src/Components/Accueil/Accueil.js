import React, { useState, useEffect } from 'react';
import BurgerMenu from '../MenuBurger/MenuBurger';
import Profil from '../Profile/Profil';
import ButtonEcrire from '../Buttons/ButtonEcrireRecette/ButtonRecette';
import RecipeList from '../Recettes/RecipesList/RecipesList';
import Navbar from '../Navbar/Navbar';
import FruitsVegetables from '../Accessoires/FruitsLegumesSaison/FruitsLegumesSaison';
import Accessories from '../Accessoires/Accessoires';
import Footer from '../Footer/Footer';

const Accueil = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    // Clean up this component by removing the event listener when the component unmounts
    return () => window.removeEventListener("resize", handleWindowResize);
  }, 
  []);

  return (
        <div>
            {windowWidth > 768 ? <Navbar /> : <BurgerMenu />}
            <Profil/>
            <ButtonEcrire/>
            <RecipeList/>
            <FruitsVegetables/>
            <Accessories/>
            <Footer/>
        </div> 
  );
};

export default Accueil;

