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
        <div className="container">
          <Header />
          <Auth />
        </div>
      </div>
    );
  }
}

export default App;
