import React, { Component } from 'react';
import './EcrireUneRecette.scss';

class EcrireUneRecette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      isDme: true,
      photo: null,
      prepTime: '',
      cookTime: '',
      childAge: '',
      ingredients: [],
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

  handleIsDmeChange = (event) => {
    this.setState({
      isDme: event.target.value === 'true',
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  handleArrayChange = (event, index, arrayName) => {
    const newArray = [...this.state[arrayName]];
    newArray[index] = event.target.value;
    this.setState({
      [arrayName]: newArray,
    });
  }

  handleAddIngredient = () => {
    this.setState(prevState => ({
      ingredients: [...prevState.ingredients, ''],
    }));
  }

  handleRemoveIngredient = (index) => {
    const newIngredients = [...this.state.ingredients];
    newIngredients.splice(index, 1);
    this.setState({ ingredients: newIngredients });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='form-container'>
        <h1 className='form-title'>Ecrire une recette</h1>
        <div className='div-input-radio'>
          <label className='form-label'>
            DME:
            <input 
              type="radio" 
              name="isDme" 
              value="true"
              checked={this.state.isDme === true}
              onChange={this.handleIsDmeChange}
              className='form-radio'
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
              className='form-radio'
            />
          </label>
        </div>
        <label className='form-label'>
          <input type="text" name="title" onChange={this.handleInputChange} className='form-input' placeholder='Titre de la recette' />
        </label>
        <label className='form-label'>
          <input type="file" name="photo" onChange={this.handleFileChange} className='form-input' placeholder='Téléchargez une photo' />
        </label>
        <label className='form-label'>
          <input type="text" name="prepTime" onChange={this.handleInputChange} className='form-input' placeholder='Temps de préparation' />
        </label>
        <label className='form-label'>
          <input type="text" name="cookTime" onChange={this.handleInputChange} className='form-input' placeholder='Temps de cuisson' />
        </label>
        <label className='form-label'>
          <input type="text" name="childAge" onChange={this.handleInputChange} className='form-input' placeholder="L'âge de l'enfant"/>
        </label>
        {this.state.ingredients.map((ingredient, i) => (
        <div key={i} className='ingredient-container'>
          <label className='form-label'>
            Ingrédient {i + 1}:
            <input 
              type="text"
              value={ingredient}
              onChange={(e) => this.handleArrayChange(e, i, 'ingredients')} 
              className='form-input' 
              placeholder='Un ingrédient' 
            />
          </label>
            <button type="button" onClick={() => this.handleRemoveIngredient(i)}>
              Supprimer
            </button>
        </div>
      ))}
      <button type="button" onClick={this.handleAddIngredient}>
        Ajouter un ingrédient
      </button>
        {['Tâche 1'].map((label, i) => (
          <label key={i} className='form-label'>
            {label}:
            <input type="text" onChange={(e) => this.handleArrayChange(e, i, 'tasks')} className='form-input' placeholder='Une tâche' />
          </label>
        ))}
        <input type="submit" value="Validez" className='button-validate' />
      </form>
    );
  }
}

export default EcrireUneRecette;

