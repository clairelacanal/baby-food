import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // N'oubliez pas d'importer Link
import ButtonEcrire from "../Buttons/ButtonEcrireRecette/ButtonRecette";
import BurgerMenu from "../MenuBurger/MenuBurger";
import Navbar from "../Navbar/Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faSpoon, faUsers } from '@fortawesome/free-solid-svg-icons';
import 'materialize-css/dist/css/materialize.min.css';
import './Profil.scss';

const Profil = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    // Clean up this component by removing the event listener when the component unmounts
    return () => window.removeEventListener("resize", handleWindowResize);
  }, 
  []);
    
return (
    <div className="container">
        {windowWidth > 768 ? <Navbar /> : <BurgerMenu />}
        <ul className="ul-avatar">
            <div className="container-avatar">
                <div className="circle"></div>
                <div className="container-name">
                    <span className="title">John Doe</span>
                    <br/>
                    <span className="bienvenue">Bienvenue sur votre profil</span>
                    <ButtonEcrire/>
                </div>
            </div>
            <div className="collection-item-avatar">
                <li>
                    <Link to="/mes-recettes-preferees" className="link-without-style" id="recettes-preferees">
                        <FontAwesomeIcon icon={faHeart} className="icon-avatar"/>
                        <p>Mes recettes préférées</p>
                    </Link>
                </li>
                <li>
                    <Link to="/mes-recettes-partagees" className="link-without-style">
                        <FontAwesomeIcon icon={faUsers} className="icon-avatar"/>
                        <p>Mes recettes partagées</p>
                    </Link>
                </li>
                <li>
                    <Link to="/mes-aliments-testes" className="link-without-style" id="aliments-testes">
                        <FontAwesomeIcon icon={faSpoon} className="icon-avatar"/>
                        <p>Mes aliments testés</p>
                    </Link>
                </li>
            </div>
        </ul>
    </div>
    )
}

export default Profil;
