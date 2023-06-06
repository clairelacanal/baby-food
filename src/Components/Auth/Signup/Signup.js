import React, { useState, UserContext } from 'react';
import {Link} from 'react-router-dom';



const CreateAccountForm = () => {
  // Créer un état local pour stocker les valeurs des champs de formulaire
  const [formData, setFormData] = useState({
    nameUser:'',
    email: '',
    password: '',
  });

  const [rememberMe, setRememberMe] = useState(false);

  // Fonction de gestionnaire de soumission de formulaire
  const handleSubmit = (event) => {
    event.preventDefault();
    // Envoyer les données de formulaire à l'API backend pour créer un compte utilisateur
    // Ajouter des validations de formulaire pour éviter les erreurs de saisie
    // Réinitialiser les champs du formulaire
    setFormData({
      nameUser: '',
      email: '',
      password: '',
    });
  };

  // Fonction de gestionnaire de changement de champ
  const handleChange = (event) => {
    // Mettre à jour l'état local avec la nouvelle valeur du champ de formulaire
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };


  return (
    <div>
    <form onSubmit={handleSubmit}>
    <h1>Créez votre compte</h1>
    <div>
        <label htmlFor="nameUser">Nom:</label>
        <input
          type="text"
          id="nameUser"
          name="nameUser"
          value={formData.nameUser}
          onChange={handleChange}
          required
        />
    </div>
    <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
    </div>
    <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
    </div>
    <div>
          <label>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={handleRememberMeChange}
            />
            Se souvenir de moi
          </label>
        </div>
      <button type="submit">Créer mon compte</button>
    </form>
    <p>
      {`Vous avez déjà un compte ? `}
      <Link to="/connexion">Connectez-vous</Link> 
    </p>
    </div>
   );
};

export default CreateAccountForm;