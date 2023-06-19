import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';
import axios from 'axios'; // N'oubliez pas d'importer axios
import { UserContext } from '../../../App'; 

const LoginForm = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // Récupérez setIsUserLoggedIn du contexte
  const { setIsUserLoggedIn } = useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        // Appel à l'API backend pour vérifier l'identifiant de l'utilisateur
        const response = await axios.post('http://your-api-url.com/login', formData);
        console.log(response.data); // Résultat de la requête backend

        // Si la réponse indique un succès, alors mettre à jour l'état de connexion
        if (response.status === 200) {
          setIsUserLoggedIn(true);
        }

      } catch (error) {
        console.error(error);
      }
    // Envoyer les données de formulaire à l'API backend pour vérification et authentification
    console.log(formData);
    // Réinitialiser les champs du formulaire
    setFormData({
      email: '',
      password: '',
    });
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Log In</button>
      </form>
      <p>
        {`Vous n'avez pas encore de compte ? `}
        <Link to="/creation-du-compte">Inscrivez-vous</Link> 
      </p>
    </div>
  );
};

export default LoginForm;
