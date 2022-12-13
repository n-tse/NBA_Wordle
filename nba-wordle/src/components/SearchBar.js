import React, { useState } from 'react';
import './SearchBar.css';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar({ placeholder, data }) {
  
  const [filteredData, setFilteredData] = useState([]);
  const handleFilter = (event) => {
    const searchName = event.target.value
    const newFilter = data.filter((value) => {
      return (value.first_name.toLowerCase() + " " + value.last_name.toLowerCase()).includes(searchName.toLowerCase());
    });
    if (searchName === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  }
  return (
    <div className="search">
      <div className="searchInputs">
        <input 
          type="text"
          placeholder={placeholder}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          <SearchIcon />
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.map((value, key) => {
            return (
              <div className="dataItem"> 
                <p> {value.first_name + " " + value.last_name} </p> 
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;