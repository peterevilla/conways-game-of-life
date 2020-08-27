import React from 'react';
import './App.css';
import Grid from './components/Grid'
import ControlBoard from './components/ControlBoard'
import Rules from './components/Rules'



function App() {
  return (
    <div className='conway'>
      <h1>Conway's Game of Life</h1>
      <div className="App">
      
      <div className="dash">
        <Grid/>
        <ControlBoard/>
      </div>
      <div className='rules'>
      <Rules/>
      </div>
    </div>
    </div>
    
  );

}

export default App;
