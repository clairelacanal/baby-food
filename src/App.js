import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Accueil from './Components/Accueil/Accueil';
import LargeButton from './Components/Buttons/Button';
import LoginForm from './Components/Auth/Login/Login';
import CreateAccountForm from './Components/Auth/Signup/Signup';


function App() {
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleClick = () => {
    setButtonClicked(true);
  };
  return (
    <Router>
        <div className="App">
          {!buttonClicked && <Link to="/connexion" onClick={handleClick}><LargeButton/></Link>}
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


