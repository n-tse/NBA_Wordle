import React from 'react';
import "./App.css";
import ResultsTable from './components/ResultsTable';
import SearchBar from './components/SearchBar';
import PlayerData from "./Data.json";

function App() {
  return (
    <div className="App">
      <nav>
        <h1>NBA Wordle</h1>
      </nav>
      <SearchBar placeholder="Enter a player name" data={PlayerData} />
      <ResultsTable />
    </div>
  );
}

export default App;
