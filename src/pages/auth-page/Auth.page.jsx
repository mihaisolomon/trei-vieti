import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Login from './components/Login.component';
import Register from './components/Register.component';

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
            </Switch>
        )
    }
}

export default AuthPage;
