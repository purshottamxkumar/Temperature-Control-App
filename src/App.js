import React from 'react';
import TemperatureApp from './Components/TemperatureApp';
import './App.css';

function App() {
  return (
    <>
      <div className="title">
        <h1>Temperature Control App</h1>
      </div>
      <div className="main-div">
        <TemperatureApp />
      </div>
    </>
  );
}

export default App;
