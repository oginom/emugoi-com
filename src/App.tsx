import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          荻野 将拓 / Masahiro Ogino
        </p>
        <p>
          email: oginomaa@gmail.com
        </p>
        <p>
          github:&nbsp; 
          <a
            className="App-link"
            href="https://github.com/oginom"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/oginom
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
