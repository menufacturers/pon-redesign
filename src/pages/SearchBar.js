import React, { useState } from 'react';
import "../assets/styles/SearchBar.css";

function SearchBar(props) {
  const [searchQuery, setSearchQuery] = useState('');

  function handleSearchInputChange(event) {
    setSearchQuery(event.target.value);
  }

  return (
    <input
      className="search-bar"
      type="text"
      placeholder="Search..."
      value={searchQuery}
      onChange={handleSearchInputChange}
    />
  );
}

export default SearchBar;