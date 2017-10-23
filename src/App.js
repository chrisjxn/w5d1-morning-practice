import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar">
          <div className="title">CHRIS'S PORTFOLIO</div>
          <button className="menu-button">Menu =</button>
          <div className="links">
            <div>ABOUT</div>
            <div>DOWNLOAD</div>
            <div>CONTACT</div>
          </div>
        </nav>
      </div>
    );
  }
}

export default App;
