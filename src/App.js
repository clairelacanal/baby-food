import React, { useState, useEffect } from 'react';
import './App.css';
import CreateAccountForm from './Components/Auth/Signup/Signup';
import BurgerMenu from './Components/MenuBurger/MenuBurger';
import Navbar from './Components/Navbar/Navbar';
import CardPots from './Components/Recettes/Components/CartesPots/CartesPots';
import CardDme from './Components/Recettes/Components/CartesDME/CartesDme';
import Accessories from './Components/Accessoires/Accessoires';
import FruitsVegetables from './Components/Accessoires/FruitsLegumesSaison/FruitsLegumesSaison';
import Footer from './Components/Footer/Footer';

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    // Clean up this component by removing the event listener when the component unmounts
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <div className="App">
      {windowWidth > 768 ? <Navbar /> : <BurgerMenu />}
      <CreateAccountForm/>
      <CardPots/>
      <CardDme/>
      <Accessories/>
      <FruitsVegetables/>
      <Footer/>
    </div>
  );
}

export default App;

