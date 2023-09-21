import React from "react";
import { Link } from 'react-router-dom'; // N'oubliez pas d'importer Link
import ButtonEcrire from "../Buttons/ButtonEcrireRecette/ButtonRecette";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faSpoon, faUsers } from '@fortawesome/free-solid-svg-icons';
import 'materialize-css/dist/css/materialize.min.css';
import imageAvatar from '../../Images/image-avatar.jpg';
import './Profil.scss';

const Profil = () => {
    return (
    <div className="container">
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
                        <FontAwesomeIcon icon={faHeart} className="icon-avatar"/>Mes recettes préférées
                    </Link>
                </li>
                <li>
                    <Link to="/mes-recettes-partagees" className="link-without-style">
                        <FontAwesomeIcon icon={faUsers} className="icon-avatar"/>Mes recettes partagées
                    </Link>
                </li>
                <li>
                    <Link to="/mes-aliments-testes" className="link-without-style" id="aliments-testes">
                        <FontAwesomeIcon icon={faSpoon} className="icon-avatar"/>Mes aliments testés
                    </Link>
                </li>
            </div>
        </ul>
    </div>
    )
}

export default Profil;
