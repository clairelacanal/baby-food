import React, { useState, useEffect } from 'react';
import './App.css';
import CreateAccountForm from './Components/Auth/Signup/Signup';
import LoginForm from './Components/Auth/Login/Login';
import BurgerMenu from './Components/MenuBurger/MenuBurger';
import Navbar from './Components/Navbar/Navbar';
import CardPots from './Components/Recettes/Components/CartesPots/CartesPots';
import CardDme from './Components/Recettes/Components/CartesDME/CartesDme';
import Accessories from './Components/Accessoires/Accessoires';
import FruitsVegetables from './Components/Accessoires/FruitsLegumesSaison/FruitsLegumesSaison';
import LargeButton from '../Buttons/Button';
import Footer from './Components/Footer/Footer';

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleShowLoginForm = () => {
    setShowLoginForm(true);
  };

  useEffect(() => {
    const handleWindowResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    // Clean up this component by removing the event listener when the component unmounts
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <div className="App">
      {windowWidth > 768 ? <Navbar /> : <BurgerMenu />}
      {showLoginForm ? <LoginForm /> : <CreateAccountForm/>}
      <CardPots/>
      <CardDme/>
      <Accessories/>
      <FruitsVegetables/>
      <LargeButton/>
      <Footer/>
    </div>
  );
}

export default App;

