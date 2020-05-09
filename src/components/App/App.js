import React, { useState } from 'react';

const App = () => {
  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=orlando&appid=${process.env.REACT_APP_WEATHER_APP_KEY}`).then(res => {
    return res.json();
  }).then(function(res) {
    console.log(res);
  }).catch((err) => console.log(err));

  console.log(`${process.env.REACT_APP_WEATHER_APP_KEY}`);
  useState(() => {

  });

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
