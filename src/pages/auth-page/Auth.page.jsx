import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Login from './components/Login.component';
import Register from './components/Register.component';
import CodDonator from './components/CodDonator.component';
import Header from '../../components/header/Header.component'

import './Auth.style.scss';

class AuthPage extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/cod-donator" component={CodDonator} />
                </Switch>
            </div>
        )
    }
}

export default AuthPage;
