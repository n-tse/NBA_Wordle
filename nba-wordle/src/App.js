import React from 'react';
import "./App.css";
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <nav>
        <h1>NBA Wordle</h1>
      </nav>
      < SearchBar placeholder="Enter a player name" />
    </div>
  );
}

export default App;
