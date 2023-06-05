import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Accueil from './Components/Accueil/Accueil';
import CreateAccountForm from './Components/Auth/Signup/Signup';
import LargeButton from './Components/Buttons/Button';

function App() {
  return (
    <Router>
        <div className="App">
          <Accueil/>
          <Link to="/creation-du-compte"><LargeButton/></Link>
        </div>
        <Routes>
          <Route path="/Accueil" element={<Accueil/>}/>
          <Route path="/creation-du-compte" element={<CreateAccountForm/>}/>
        </Routes>
    </Router>
  );
}

export default App;


