import React from "react";
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
                </div>
            </div>
            <div className="collection-item-avatar">
                <li><FontAwesomeIcon icon={faHeart}/>Mes recettes préférées</li>
                <li><FontAwesomeIcon icon={faUsers}/>Mes recettes partagées</li>
                <li><FontAwesomeIcon icon={faSpoon}/>Mes aliments testés</li>
            </div>
        </ul>
    </div>
    )
}

export default Profil;
