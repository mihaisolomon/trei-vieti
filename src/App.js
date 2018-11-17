import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/header/Header.component';
import BloodRectangle from './components/BloodRectangle/BloodRectangle.component'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header appName = {"Trei Vieti"}/>
        <BloodRectangle bloodType="A" percentage="22" />
        <BloodRectangle bloodType="B" percentage="55" />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Bla bla <code>src/App.js</code> and save to reload.
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
  }
}

export default App;
