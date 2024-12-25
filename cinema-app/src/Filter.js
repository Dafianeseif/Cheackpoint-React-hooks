import React, { useState } from 'react';

function Filter({ onFilter }) {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');

  const handleFilter = () => {
    onFilter({ title, rating });
  };

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filtrer par titre"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Filtrer par note"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <button onClick={handleFilter}>Filtrer</button>
    </div>
  );
}

export default Filter;
