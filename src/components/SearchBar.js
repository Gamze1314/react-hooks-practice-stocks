import React, { useState } from "react";

function SearchBar({ sortByName, sortByPrice , onChangeType }) {
  const [onSortByName, setOnSortByName] = useState(false)
  const [onSortByPrice, setOnSortByPrice] = useState(false)
  const [type, setType] = useState("");
 

  function handleTicker() {
    setOnSortByName(!onSortByName);
    setOnSortByPrice(false); 
    sortByName();
  }
 
  function handlePrice() {
    setOnSortByPrice(!onSortByPrice);
    setOnSortByName(false); 
    sortByPrice();
  }

function handleFilterChange(e) {
  const selectedType = e.target.value;
  setType(selectedType);
  onChangeType(selectedType);
}

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={onSortByName}
          onChange={handleTicker}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={onSortByPrice}
          onChange={handlePrice}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={handleFilterChange}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
