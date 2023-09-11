import React, { Component } from 'react';
import './EcrireUneRecette.scss';

class EcrireUneRecette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      isDme: true, // Initialiser isDme dans l'état
      photo: null,
      prepTime: '',
      cookTime: '',
      childAge: '',
      ingredients: ['', '', ''],
      tasks: ['', '', ''],
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleFileChange = (event) => {
    this.setState({
      photo: event.target.files[0],
    });
  }

 /* handleArrayChange = (event, index, arrayName) => {
    const array = this.state[arrayName].slice();
    array[index] = event.target.value;
    this.setState({ [arrayName]: array });
  }*/

  handleIsDmeChange = (event) => {
    this.setState({
      isDme: event.target.value === 'true', // Convertir la valeur du bouton radio en booléen
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Ecrire une recette</h1>
      <div className='div-input-radio'>
        <label className='form-label'>
          DME:
          <input 
            type="radio" 
            name="isDme" 
            value="true"
            checked={this.state.isDme === true}
            onChange={this.handleIsDmeChange}
            className='radio-input'
          />
        </label>
        <label className='form-label'>
          PETITS POTS:
          <input 
            type="radio" 
            name="isDme" 
            value="false"
            checked={this.state.isDme === false}
            onChange={this.handleIsDmeChange}
            className='radio-input'
          />
        </label>
        </div>
        <label className='form-label'>
          Proposez un titre:
          <input type="text" name="title" onChange={this.handleInputChange} className="form-input" />
        </label>
        <label className='form-label'>
          Téléchargez une photo:
          <input type="file" name="photo" onChange={this.handleFileChange} className='form-input' />
        </label>
        <label className='form-label'>
          Temps de préparation:
          <input type="text" name="prepTime" onChange={this.handleInputChange} className='form-input' />
        </label>
        <label className='form-label'>
          Temps de cuisson:
          <input type="text" name="cookTime" onChange={this.handleInputChange} className='form-input' />
        </label>
        <label className='form-label'>
          Indiquez l’âge de l’enfant:
          <input type="text" name="childAge" onChange={this.handleInputChange} className='form-input'/>
        </label>
        {['Ingrédient 1', 'Ingrédient 2', 'Ingrédient 3'].map((label, i) => (
          <label key={i} className='form-label'>
            {label}:
            <input type="text" onChange={(e) => this.handleArrayChange(e, i, 'ingredients')} className='form-input' />
          </label>
        ))}
        {['Tâche 1', 'Tâche 2', 'Tâche 3'].map((label, i) => (
          <label key={i} className='form-label'>
            {label}:
            <input type="text" onChange={(e) => this.handleArrayChange(e, i, 'tasks')} className='form-input' />
          </label>
        ))}
        <input type="submit" value="Validez" />
      </form>
    );
  }
}


export default EcrireUneRecette;
