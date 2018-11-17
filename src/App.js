import React, { Component } from 'react';
import './App.scss';

import Header from './components/header/Header.component';
import BloodRectangle from './components/BloodRectangle/BloodRectangle.component'
import './App.css';
import Auth from './components/auth/Auth.component';

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
        <div className="container">
          <Header appName = {"Trei Vieti #2"} />
          <Auth />
        </div>
      </div>
    );
  }
}

export default App;
