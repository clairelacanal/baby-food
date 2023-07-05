import React, { useState } from 'react';


const AucuneRecettePreferee = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  }
  
  return (
    <div>
      <p>Vous n’avez pas encore de recettes préférées</p>
      <input 
        type="search" 
        placeholder="Chercher une recette" 
        value={searchTerm} 
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default AucuneRecettePreferee;
