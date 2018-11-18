import React, { Component } from 'react'
import MaterialIcon from 'material-icons-react';
import { Colors } from '../../constants/Colors'

class Notification extends Component {
    constructor(props){
        super(props)

        this.state = {
            read: props.notification.read
        }
    }
    toggleRead() {
        this.setState({
            read: !this.state.read
        })
    }
  render() {
    const { notification } = this.props
    const { read } = this.state
    return (
      <div className="notificationContainer">
        <div className="notificationIcon" onClick={() => this.toggleRead()}>
            {read &&
                <MaterialIcon
                    color={Colors.secondary}
                    icon="notifications_none"/>
            }
            {!read &&
                <MaterialIcon 
                color={Colors.yellow}
                icon="notifications" />
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
    onDismiss: function() {}
}
export default Notification