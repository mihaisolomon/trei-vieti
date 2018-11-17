import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Login from './components/Login.component';
import Register from './components/Register.component';
import CodDonator from './components/CodDonator.component';

import './Auth.style.scss';

class AuthPage extends React.Component {
    constructor(props){
        super(props);
        this.showForgotPassword = false;
    }

    render() {
        return (
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/cod-donator" component={CodDonator} />
            </Switch>
        )
    }
}

export default AuthPage;
