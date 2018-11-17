import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MaterialIcon, {colorPalette} from 'material-icons-react';

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
                <Route exact path="/auth/" component={Login} />
                <Route exact path="/auth/register" component={Register} />
                <Route exact path="/auth/cod-donator" component={CodDonator} />
            </Switch>
        )
    }
}

export default AuthPage;
