import React, { Component } from 'react'
import MaterialIcon from 'material-icons-react';
import './styles.css'
import { Colors } from '../../constants/Colors'
import Notification from './Notification.component'
import { PulseLoader } from 'react-spinners'
import { offlineNotifications } from './data'

class NotificationsView extends Component {
  constructor(props) {
    super(props)

    this.state = {
      notifications: [],
      loading: true,
    }
  }

  componentDidMount() {
    document.addEventListener('scroll', this.trackScrolling);
    this.loadNotifications()
  }
  loadNotifications() {
    let notifCount = this.state.notifications.length
    let perPage = 10
    this.setState({
      loading: true
    })
    let that = this
    setTimeout(function() {
      that.setState({
        notifications: that.state.notifications.concat(offlineNotifications.slice(notifCount,notifCount+perPage)),
        loading: false
      })
    },1000)
  }
  componentWillUnmount() {
    document.removeEventListener('scroll', this.trackScrolling);
  }

  trackScrolling = () => {
    const wrappedElement = document.getElementById('notificationsContainer')
    if (this.isBottom(wrappedElement)) {
      if(this.state.notifications.length === offlineNotifications.length) {
        document.removeEventListener('scroll', this.trackScrolling)
      } else {
        if(!this.state.loading) {
          this.loadNotifications()
        }
      }
    }
  };

  isBottom(el) {
    if(el === null)
    {
      return
    }
    return el.getBoundingClientRect().bottom <= window.innerHeight
  }
  toggleRead(index) {
    let newNotif = this.state.notifications.slice(0)
    newNotif[index]['read']  = !newNotif[index]['read']
    this.setState({
      notifications: newNotif
    })
  }
  dismissNotification(index) {
    let newNotif = this.state.notifications.slice(0)
    newNotif.splice(index,1)
    this.setState({
      notifications: newNotif
    })
  }
  render() {
    const { notifications } = this.state
    return (
      <div id="notificationsContainer" className="container">
          <div className="header">
            <div className="title">
              <h3>Notificari</h3>
            </div>
            <MaterialIcon
              onClick={() => this.props.onClose()}
              color={Colors.secondary}
              icon="close"/>
          </div>
          <div className="body">
            {notifications.length > 0 && notifications.map((notification, index) =>
                <Notification
                  key={index}
                  notification={notification}
                  toggleRead={() => this.toggleRead(index) }
                  onDismiss={() => this.dismissNotification(index)} />
            )}
            {notifications.length === 0 && !this.state.loading &&
              <p>Nici o notificare</p>
            }
            <PulseLoader
                className="loader"
                sizeUnit={"px"}
                size={25}
                color={Colors.primary}
                loading={this.state.loading}
              />
          </div>
      </div>
    )
  }
}

NotificationsView.defaultProps = {
  onClose: function() {
    console.log("onClose")
  }
}

export default NotificationsView