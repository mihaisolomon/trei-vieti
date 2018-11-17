import React, { Component } from 'react';
import './App.scss';

import Header from './components/header/Header.component';
import Auth from './components/auth/Auth.component';

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
