import Sketch from 'react-p5';

import logo from './logo.svg';
import './App.css';
import './sketch_multi.js';
import './objects.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="bg-red-500 text-4xl">
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
      <div className="one"></div>
    </div>
  );
}

export default App;
