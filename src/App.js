import React, { Component } from 'react';
import './App.scss';

import Header from './components/header/Header.component';
import BloodRectangle from './components/BloodRectangle/BloodRectangle.component'
import Auth from './components/auth/Auth.component';

import OfflineAlert from './components/offline-alert/OfflineAlert.component';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header appName = {"Trei Vieti"}/>
        <BloodRectangle bloodType="A" percentage="22" />
        <BloodRectangle bloodType="B" percentage="55" />
        <header className="App-header">
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
        <OfflineAlert></OfflineAlert>
      </div>
    );
  }
}

export default App;
