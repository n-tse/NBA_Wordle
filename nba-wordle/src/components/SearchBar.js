import React from 'react';
import './SearchBar.css';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar({ placeholder, data }) {
  return (
    <div className="search">
      <div className="searchInputs">
        <input 
          type="text"
          placeholder={placeholder}
        />
        <div className="searchIcon">
          <SearchIcon />
        </div>
      </div>
      <div className="dataResult">
        {data.map((value, key) => {
          return (
            <div className="dataItem"> 
              {value.first_name + " " + value.last_name} 
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SearchBar;