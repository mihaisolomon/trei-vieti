import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import AuthPage from './pages/auth-page/Auth.page';
import ProfilePage from './pages/profile/Profile.page';
import Header from './components/header/Header.component';

import store from './redux/store';
import { loginUserSuccess } from './redux/user/user.actions';
import AuthService from './services/Auth.service';

import './App.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOffline: !navigator.onLine
        };

        window.addEventListener('online', () => {
            this.setState({
                isOffline: false
            });
        });

        window.addEventListener('offline', () => {
            this.setState({
                isOffline: true
            });
        });
    }

    componentDidMount() {
        if (!store.getState().user) {
            AuthService.ping().then(user => store.dispatch(loginUserSuccess(user)));
        }
    }

    render() {
        return (
            <BrowserRouter>
                <Provider store={store}>
                    <div className="App">
                        <div className="container">
                            <Header />
                            <Switch>
                                <Route path="/" component={AuthPage} />
                                <Route exact path="/profile" component={ProfilePage} />
                            </Switch>
                        </div>
                    </div>
                </Provider>
            </BrowserRouter>
        );
    }
}

export default App;