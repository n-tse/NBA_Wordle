import React, { useState, useContext } from 'react';
import './SearchBar.css';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import ResultsTable from './ResultsTable';
import { AppContext } from "../App";

function SearchBar({ placeholder, data }) {
  
  const [filteredData, setFilteredData] = useState([]);
  const [nameEntered, setNameEntered] = useState("");
  const [guessHistory, setGuessHistory] = useState([]);

  const {
    onGuess
  } = useContext(AppContext);
  
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
    // console.log(guessedPlayer);
    setFilteredData([]);
    setNameEntered("");
  }

  const submitGuess = (guess) => {
    // alert("guess made");
    const playerFullName = guess.first_name + " " + guess.last_name;
    // setGuessHistory(guessHistory => guessHistory.concat(playerFullName));
    onGuess();
    setGuessHistory(guessHistory => [...guessHistory, playerFullName]);
    console.log("submit guess: player name " + playerFullName);
    console.log("submit guess: guessHistory " + guessHistory);
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
          {filteredData.map((value) => {
            let playerFullName = value.first_name + " " + value.last_name;
            return (
              // <div className="dataItem" onClick={() => setGuessedPlayer((oldGuess) => oldGuess.concat(value.first_name + " " + value.last_name))}> 
              // <div className="dataItem" onClick={() => setGuessedPlayer((oldGuess) => oldGuess.concat(playerFullName))}>            
              <div className="dataItem" onClick={() => submitGuess(value) }>        
                {/* <p> {value.first_name + " " + value.last_name} </p>  */}
                {/* <ResultsTable guessesMade={guessHistory}/> */}
                <p> {playerFullName} </p> 
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;