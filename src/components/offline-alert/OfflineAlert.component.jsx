import React from 'react';
import "./OfflineAlert.style.scss";

class OfflineAlert extends React.Component {
    render() {
        return (
            <p className={`offline-alert ${this.props.isVisible ? "is--visible" : ""}`}> You're offline. Please connect to the internet for the full experience! </p>
        )
    }
}

export default OfflineAlert;
