import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Accueil from './Components/Accueil/Accueil';
import LargeButton from './Components/Buttons/Button';
import LoginForm from './Components/Auth/Login/Login';
import CreateAccountForm from './Components/Auth/Signup/Signup';


function App() {
  return (
    <Router>
        <div className="App">
          <Link to="/connexion"><LargeButton/></Link>
        </div>
        <Routes>
          <Route path="/" element={<Accueil/>}/>
          <Route path="/connexion" element={<LoginForm/>}/>
          <Route path="/creation-du-compte" element={<CreateAccountForm/>}/>
        </Routes>
    </Router>
  );
}

export default App;


