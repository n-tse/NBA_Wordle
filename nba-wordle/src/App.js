import React from 'react';
import "./App.css";
import ResultsTable from './components/ResultsTable';
import SearchBar from './components/SearchBar';
import JsonDataDisplay from './components/DataTable';
import PlayerData from "./Data.json";

function App() {
  // const getHeadings = () => {
  //   return Object.keys(PlayerData[0]);
  // }

  return (
    <div className="App">
      <nav>
        <h1>NBA Wordle</h1>
      </nav>
      <SearchBar placeholder="Enter a player name" data={PlayerData} />
      <JsonDataDisplay />
      {/* <ResultsTable theadData={getHeadings()} tbodyData={PlayerData}/> */}
    </div>
  );
}

export default App;
