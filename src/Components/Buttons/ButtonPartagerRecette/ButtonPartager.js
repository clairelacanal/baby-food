import React from 'react';
import './ButtonPartager.scss';



function ButtonPartager() {
    const handlePartager = () => {
        // ajouter la recette à l'état global ici
      };
  return (
        <button className="button-partager">
            {/* autres éléments du composant */}
            <ButtonPartager onPartager={handlePartager} />
        </button>
  );
}

export default ButtonPartager;