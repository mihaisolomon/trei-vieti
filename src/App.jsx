import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import AuthPage from './pages/auth-page/Auth.page';
import ProfilePage from './pages/profile/Profile.page';
import FullProfilePage from './pages/full-profile/FullProfile.page'
import NavBar from './components/NavBar/NavBar.component';

import store from './redux/store';
import { loginUserSuccess } from './redux/user/user.actions';
import AuthService from './services/Auth.service';

import './App.scss';
import NotificationsView from './components/NotificationsView/NotificationsView.component'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOffline: !navigator.onLine,
            showNotifications: false
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
            AuthService.ping().then(user => {
                store.dispatch(loginUserSuccess(user));
            }).catch(err => {
                store.dispatch(loginUserSuccess({
                    isLogged: false
                }));
            })
        }
    }
    toggleShowNotifications() {
        this.setState({
            showNotifications: !this.state.showNotifications
        })
    }
    render() {
        return (
            <BrowserRouter>
                <Provider store={store}>
                    <div className="App">
                        <div className="container">
                            <NavBar 
                                isLogged={store.getState().user}
                                toggleShowNotifications={()=> this.toggleShowNotifications() }/>
                        </div>
                        <Switch>
                            <Route path="/full-profile" component={FullProfilePage} />
                            <Route path="/profile" component={ProfilePage} />
                            <Route path="/" component={AuthPage} />
                        </Switch>
                        {this.state.showNotifications &&
                            <NotificationsView 
                                onClose={() => this.toggleShowNotifications()}/>
                        }
                    </div>
                </Provider>
            </BrowserRouter>
        );
    }
}

export default App;
