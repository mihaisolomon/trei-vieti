import React from 'react';
import MaterialIcon, {colorPalette} from 'material-icons-react';

import './Header.style.scss';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                {this.props.isLogged &&
                    <a href="#" className="go_back">
                        <MaterialIcon icon="arrow_back_ios" />
                    </a>
                }
                <a href="#" className="logo">
                    <img src="./assets/images/logo.png" className="App-logo" alt="logo" />
                </a>
                {this.props.isLogged &&
                    <a href="#" className="notifications" onClick={() => this.props.toggleShowNotifications()}>
                        <MaterialIcon icon="notifications_none" />
                    </a>
                }
               
            </div>
        );
    }
}
Header.defaultProps = {
    isLogged: false,
    toggleShowNotifications: function() {
        console.log("toggle notif");
        
    }
}
export default Header;
