import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Opciones from './Opciones';
import Main from './Main';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Menu</h1>
        </header>
        <div className="container">
          <Opciones />
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
