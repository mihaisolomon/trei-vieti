import React from 'react';
import MaterialIcon from 'material-icons-react';
import './NavBar.style.scss';

class NavBar extends React.Component {
    render() {
        return (
            <div className="nav-bar">
                <a href="#" className="go_back" onClick={() => window.history.back()}>
                    <MaterialIcon icon="arrow_back_ios" />
                </a>
                <a href="#" className="logo">
                    <img src="./assets/images/logo.png" className="App-logo" alt="logo" />
                </a>
                <a href="#" className="notifications" onClick={() => this.props.toggleShowNotifications()}>
                    <MaterialIcon icon="notifications_none" />
                </a>
            </div>
        );
    }
}
NavBar.defaultProps = {
    isLogged: false,
    toggleShowNotifications: function() {}
}
export default NavBar;
