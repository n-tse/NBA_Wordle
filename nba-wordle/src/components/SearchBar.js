import React from 'react';
import './SearchBar.css';

function SearchBar({ placeholder, data }) {
  return (
    <div className="search">
      <div className="searchInputs">
        <input type="text"/>
        <div className="searchIcon"></div>
      </div>
      <div className="dataResult"></div>
    </div>
  );
}

export default SearchBar;