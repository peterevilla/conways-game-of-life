import React from 'react';
import './App.css';
import Grid from './components/Grid'
import ControlBoard from './components/ControlBoard'



function App() {
  return (
    <div className="App">
      <h1>Conway's Game of Life</h1>
      <div className="dash">
        <Grid/>
      </div>
      <ControlBoard/>
    </div>
  );

}

export default App;
