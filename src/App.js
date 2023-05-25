
import './App.css';
import React from 'react';
import CreateAccountForm from './Components/Auth/Signup/Signup';
import BurgerMenu from './Components/MenuBurger/MenuBurger';
import Navbar from './Components/Navbar/Navbar';
import CardPots from './Components/Recettes/Components/CartesPots/CartesPots';
import CardDme from './Components/Recettes/Components/CartesDME/CartesDme';
import Accessories from './Components/Accessoires/Accessoires';
import FruitsVegetables from './Components/Accessoires/FruitsLegumesSaison/FruitsLegumesSaison';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BurgerMenu/>
      <Navbar/>
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
