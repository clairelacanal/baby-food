import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Accueil from './Components/Accueil/Accueil';
import LargeButton from './Components/Buttons/Button';
import LoginForm from './Components/Auth/Login/Login';


function App() {
  return (
    <Router>
        <div className="App">
          <Link to="/creation-du-compte"><LargeButton/></Link>
        </div>
        <Routes>
          <Route path="/" element={<Accueil/>}/>
          <Route path="/creation-du-compte" element={<LoginForm/>}/>
        </Routes>
    </Router>
  );
}

export default App;


