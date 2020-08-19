import React from 'react';
import './App.css';
import {buildBoard} from './components/buildBoard'

function App() {
  console.log(buildBoard(25, 25, false))
  return (
    <div className="App">
      <h1>Conway's Game of Life</h1>
    </div>
  );
}

export default App;
