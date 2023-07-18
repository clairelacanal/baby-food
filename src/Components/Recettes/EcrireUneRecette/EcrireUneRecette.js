import React, { Component } from 'react';

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
      <div>
        <label>
          DME:
          <input 
            type="radio" 
            name="isDme" 
            value="true"
            checked={this.state.isDme === true}
            onChange={this.handleIsDmeChange}
          />
        </label>
        <label>
          PETITS POTS:
          <input 
            type="radio" 
            name="isDme" 
            value="false"
            checked={this.state.isDme === false}
            onChange={this.handleIsDmeChange}
          />
        </label>
        </div>
        <label>
          Proposez un titre:
          <input type="text" name="title" onChange={this.handleInputChange} />
        </label>
        <label>
          Téléchargez une photo:
          <input type="file" name="photo" onChange={this.handleFileChange} />
        </label>
        <label>
          Temps de préparation:
          <input type="text" name="prepTime" onChange={this.handleInputChange} />
        </label>
        <label>
          Temps de cuisson:
          <input type="text" name="cookTime" onChange={this.handleInputChange} />
        </label>
        <label>
          Indiquez l’âge de l’enfant:
          <input type="text" name="childAge" onChange={this.handleInputChange} />
        </label>
        {['Ingrédient 1', 'Ingrédient 2', 'Ingrédient 3'].map((label, i) => (
          <label key={i}>
            {label}:
            <input type="text" onChange={(e) => this.handleArrayChange(e, i, 'ingredients')} />
          </label>
        ))}
        {['Tâche 1', 'Tâche 2', 'Tâche 3'].map((label, i) => (
          <label key={i}>
            {label}:
            <input type="text" onChange={(e) => this.handleArrayChange(e, i, 'tasks')} />
          </label>
        ))}
        <input type="submit" value="Validez" />
      </form>
    );
  }
}


export default EcrireUneRecette;
