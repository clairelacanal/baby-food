import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import './Signup.scss';
import axios from 'axios'; // N'oubliez pas d'importer axios

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '', // champ supplémentaire pour le formulaire d'inscription
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // vérifier si les mots de passe correspondent
    if (formData.password !== formData.confirmPassword) {
      alert("Les mots de passe ne correspondent pas.");
      return;
    }

    // Vous voudrez probablement faire un POST à une API différente pour l'inscription
    const response = await axios.post('http://your-api-url.com/signup', formData);

    if (response.status === 200) {
      console.log("Inscription réussie");
    }
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className='signup-form'> 
      <h2>Inscription</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="password">Mot de passe:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirmer le mot de passe:</label>
          <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
        </div>
        <button type="submit">{"S'inscrire"}</button>
        <hr className="hr-style" />
        <p>OU</p>
        <hr className="hr-style" />
      </form>
      <button className="btn-google">
        <FontAwesomeIcon icon={faGoogle} className="google-icon" />
        {"S'inscrire"} avec Google
      </button>
      <button className="btn-facebook">
        <FontAwesomeIcon icon={faFacebook} className="facebook-icon" />
        {"S'inscrire"} avec Facebook
      </button>
      <p>
        {`Déjà membre ? `}
        <Link to="/connexion">Se connecter</Link>
      </p>
    </div>
  );
};

export default SignUpForm;
