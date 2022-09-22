import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Search } from './features/search/Search';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="infoiser.png" className="App-logo" alt="logo" />
        <Search />
      </header>
    </div>
  );
}

export default App;
