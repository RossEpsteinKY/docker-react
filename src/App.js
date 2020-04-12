import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p><h1>This is  </h1></p>

        <p>This react project is being compiled, pushed, and deployed automatically.</p>

        <div class="center">Things used in this project</div>
        <ul>
          <li>Docker</li>
          <li>Travis CI</li>
          <li>Amazon Web Service (AWS)</li>
          <li>Kubernetes</li>
        </ul>

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
}

export default App;
