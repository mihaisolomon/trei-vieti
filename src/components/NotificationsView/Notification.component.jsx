import React, { Component } from 'react'
import MaterialIcon from 'material-icons-react';
import { Colors } from '../../constants/Colors'

class Notification extends Component {
  render() {
    const { notification } = this.props
    
    return (
      <div className="notificationContainer">
        <div className="notificationIcon" onClick={() => this.props.toggleRead()}>
            {notification.read &&
                <MaterialIcon
                    color={Colors.secondary}
                    icon="notifications_none"/>
            }
            {!notification.read &&
                <MaterialIcon 
                color={Colors.yellow}
                icon="notifications"/>
            }
        </div>
        <div className="notificationBody">
            {notification.body}
        </div>
        <div className="notificationClose" onClick={() => this.props.onDismiss()}>
            <MaterialIcon 
              color={Colors.secondary}
              icon="close"/>
        </div>
      </div>
    )
  }
}
Notification.defaultProps = {
    toggleRead: function() {
        console.log("toggleRead")
    }
}
export default Notification