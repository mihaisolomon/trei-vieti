import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './App.scss';

import Header from './components/header/Header.component';
import UserProfile from './components/userProfile/UserProfile.component'
import BloodRectangle from './components/bloodRectangle/BloodRectangle.component'
import './App.scss';
import Auth from './components/auth/Auth.component';

class App extends React.Component {
  render() {
    return (
      <div className="App">        
        
        <div className="container">          
          <UserProfile />
        </div>
      </div>
    );
  }
}

export default App;
