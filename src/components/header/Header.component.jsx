import React from 'react';
import MaterialIcon, {colorPalette} from 'material-icons-react';

import './Header.style.scss';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <a href="#" className="go_back">
                    <MaterialIcon icon="arrow_back_ios" />
                </a>
                <a href="#" className="logo">
                    <img src="./assets/images/logo.png" className="App-logo" alt="logo" />
                </a>
                <a href="#" className="notifications">
                    <MaterialIcon icon="notifications_none" />
                </a>
            </div>
        );
    }
}

export default Header;
