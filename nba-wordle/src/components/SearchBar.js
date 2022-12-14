import React, { useState } from 'react';
import './SearchBar.css';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

function SearchBar({ placeholder, data }) {
  
  const [filteredData, setFilteredData] = useState([]);
  const [nameEntered, setNameEntered] = useState("");
  
  const handleFilter = (event) => {
    const searchName = event.target.value;
    setNameEntered(searchName);
    const newFilter = data.filter((value) => {
      return (value.first_name.toLowerCase() + " " + value.last_name.toLowerCase()).includes(searchName.toLowerCase());
    });

    if (searchName === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  }

  const clearInput = () => {
    setFilteredData([]);
    setNameEntered("");
  }

  const submitGuess = () => {
    alert("guess made");
    clearInput();
  }

  return (
    <div className="search">
      <div className="searchInputs">
        <input 
          type="text"
          placeholder={placeholder}
          value={nameEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? <SearchIcon /> : <ClearIcon id="clearBtn" onClick={clearInput}/>}
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.map((value, key) => {
            return (
              <div className="dataItem" onClick={submitGuess}> 
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