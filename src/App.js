import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import CreateAccountForm from './Components/Auth/Signup/Signup';
import LoginForm from './Components/Auth/Login/Login';
import BurgerMenu from './Components/MenuBurger/MenuBurger';
import Navbar from './Components/Navbar/Navbar';
import CardPots from './Components/Recettes/Components/CartesPots/CartesPots';
import CardDme from './Components/Recettes/Components/CartesDME/CartesDme';
import Accessories from './Components/Accessoires/Accessoires';
import FruitsVegetables from './Components/Accessoires/FruitsLegumesSaison/FruitsLegumesSaison';
import LargeButton from './Components/Buttons/Button';
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
    <Router>
        <div className="App">
          {windowWidth > 768 ? <Navbar /> : <BurgerMenu />}
          {showLoginForm ? <LoginForm /> : <CreateAccountForm/>}
          <CardPots/>
          <CardDme/>
          <Accessories/>
          <FruitsVegetables/>
          <Link to="/creation-du-compte"><LargeButton/></Link>
          <Footer/>
        </div>
        <Routes>
          <Route path="/creation-du-compte" component={CreateAccountForm}/>
        </Routes>
    </Router>
  );
}

export default App;

