import React, { useState, createContext, useEffect } from 'react';
import "./App.css";
import ResultsTable from './components/ResultsTable';
import SearchBar from './components/SearchBar';
import JsonDataDisplay from './components/DataTable';
import PlayerData from "./Data.json";
import { boardDefault, generatePlayerSet } from './MysteryPlayer';
// import GameOver from './components/GameOver';

export const AppContext = createContext();

function App() {
  // const getHeadings = () => {
  //   return Object.keys(PlayerData[0]);
  // }

  const [board, setBoard] = useState(boardDefault);
  const [playerSet, setPlayerSet] = useState(new Set());
  const [guessedPlayer, setGuessedPlayer] = useState([]);
  const [correctPlayer, setCorrectPlayer] = useState("");
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessedWord: false,
  });

  useEffect(() => {
    generatePlayerSet().then((players) => {
      setPlayerSet(players.playerSet);
      setCorrectPlayer(players.todaysPlayer);
    });
  }, []);

  const onGuess = () => {
    console.log(guessedPlayer);

  }
  
  return (
    <div className="App">
      <nav>
        <h1>NBA Wordle</h1>
      </nav>
      <AppContext.Provider value={{board, setBoard, correctPlayer, guessedPlayer, onGuess}}>
        <SearchBar placeholder="Enter a player name" data={PlayerData} />
        {/* <JsonDataDisplay /> // to display all data in json file */}
        {/* <ResultsTable theadData={getHeadings()} tbodyData={PlayerData}/> */}
      </AppContext.Provider>
    </div>
  );
}

export default App;
