import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Profil = () => {
    return (
        <div className="container-profil">
            <div className="container-user">
            <img>

            </img>
            <div className="container-userName">
                <h3>John Doe</h3>
                <h6>Bienvenue sur votre profil</h6>
                <p>Mes recettes préférées</p>
                <p>Mes recettes partagées</p>
                <p>Mes aliments testés</p>
            </div>
            </div>
        </div>
    )
}

export default Profil;