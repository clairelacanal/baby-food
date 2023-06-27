import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faSpoon, faUsers } from '@fortawesome/free-solid-svg-icons';
import 'materialize-css/dist/css/materialize.min.css';
import imageAvatar from '../../Images/image-avatar.jpg';

const Profil = () => {
    return (
    <div className="container">
    <ul>
      <li className="collection-item avatar">
      <img src={imageAvatar} alt="" className="circle" style={{width: '60px', height: '60px'}} />
        <span className="title">John Doe</span>
        <br/>
        <span>Bienvenue sur votre profil</span>
        <p><FontAwesomeIcon icon={faHeart}/>Mes recettes préférées</p>
        <br/>
        <p><FontAwesomeIcon icon={faUsers}/>Mes recettes partagées</p>
        <br/>
        <p><FontAwesomeIcon icon={faSpoon}/>Mes aliments testés</p>
      </li>
    </ul>
        </div>
    )
}

export default Profil;
