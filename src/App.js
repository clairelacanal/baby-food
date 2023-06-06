import React, { useState, createContext, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Accueil from './Components/Accueil/Accueil';
import LargeButton from './Components/Buttons/Button';
import LoginForm from './Components/Auth/Login/Login';
import CreateAccountForm from './Components/Auth/Signup/Signup';

// Créer un nouveau contexte
export const UserContext = createContext();

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  return (
    <Router>
      <UserContext.Provider value={{ isUserLoggedIn, setIsUserLoggedIn }}>
        <div className="App">
          {!isUserLoggedIn && <Link to="/connexion"><LargeButton/></Link>}
        </div>
        <Routes>
          <Route path="/" element={<Accueil/>}/>
          <Route path="/connexion" element={<LoginForm/>}/>
          <Route path="/creation-du-compte" element={<CreateAccountForm/>}/>
        </Routes>
      </UserContext.Provider>
    </Router>
  );
}

export default App;



