import React, { useState } from 'react';
import SearchBar from '../../../../Components/SearchBar/SearchBar';

const RecettesPreferees = () => {
  const [items] = useState(['Agneau', 'Boeuf', 'Poisson', 'Poulet', 'Féculents', 'Légumes', 'Fruits']);  
  const [filteredItems, setFilteredItems] = useState(items);

  const handleSearch = searchTerm => {
    const filtered = items.filter(item =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  return (
    <div>
      <p>Vous n’avez pas encore de recettes préférées</p>
      <SearchBar onSearch={handleSearch} />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};


export default RecettesPreferees;

