import React, { Component } from 'react';
//import OverCard from "./components/OverCard";
import Game from "./components/game";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Game/>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;
