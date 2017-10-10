import React, { Component } from 'react';
import Dragabble from './components/Dragable.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Finansiera förslag</h1>
        </header>
        <div>
          <Dragabble />
        </div>
      </div>
    );
  }
}

export default App;
