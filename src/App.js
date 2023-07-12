import React, { useState, createContext, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Accueil from './Components/Accueil/Accueil';
import LargeButton from './Components/Buttons/ButtonConnexion/Button';
import LoginForm from './Components/Auth/Login/Login';
import CreateAccountForm from './Components/Auth/Signup/Signup';
import CardTypeRecette from './Components/Recettes/Components/CardTypeRecette/CardTypeRecette';
import EcrireUneRecette from './Components/Recettes/EcrireUneRecette/EcrireUneRecette';
import RecettesPreferees from './Components/Recettes/RecettesPreferees/Components/NothingRecipes/Nothing/RecettesPrefs';
// Créer un nouveau contexte
export const UserContext = createContext();

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  return (
    <Router>
      <UserContext.Provider value={{ isUserLoggedIn, setIsUserLoggedIn }}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Accueil/>}/>
            <Route path="/connexion" element={<LoginForm/>}/>
            <Route path="/creation-du-compte" element={<CreateAccountForm/>}/>
            <Route path="/ecrire-une-recette" element={<EcrireUneRecette/>}/>
            <Route path="/mes-recettes-preferees" element={<RecettesPreferees/>}/>
            <Route path="/dme" element={<CardTypeRecette type="DME" />}/>
            <Route path="/petits-pots" element={<CardTypeRecette type="PETITS-POTS"/>}/>
          </Routes>
          {!isUserLoggedIn && <Link to="/connexion"><LargeButton/></Link>}
        </div>
      </UserContext.Provider>
    </Router>
  );
}

export default App;



