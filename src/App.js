import React from 'react';
import './App.css';
import Grid from './components/Grid'


function App() {
  return (
    <div className="App">
      <h1>Conway's Game of Life</h1>
      <div className="dash">
        <Grid/>
      </div>

    </div>
  );

}

export default App;
