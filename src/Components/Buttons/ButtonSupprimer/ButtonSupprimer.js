import React from 'react';
import './ButtonSupprimer.scss';

function ButtonSupprimer({ onSupprimer }) {
  return (
    <button className="button-supprimer" onClick={onSupprimer}>
      <p>Supprimer la recette</p>
    </button>
  );
}

export default ButtonSupprimer;
