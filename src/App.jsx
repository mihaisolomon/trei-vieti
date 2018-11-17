import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import AuthPage from './pages/auth-page/Auth.page';
import ProfilePage from './pages/profile/Profile.page';

import Header from './components/header/Header.component';

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
    render() {
        return (
            <div className="App">
                <div className="container">
                    <Header />
                    
                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/" component={AuthPage} />
                            <Route exact path="/profile" component={ProfilePage} />
                        </Switch>
                    </BrowserRouter>
                </div>
            </div>
        );
    }
}

export default App;
