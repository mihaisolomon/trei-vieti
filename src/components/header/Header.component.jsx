import React, { Component } from 'react'
import './Header.style.scss'
class Header extends Component {
  render() {
    return (
      <div id="header" style={{ height: this.props.height }}>
        {this.props.renderContent}
      </div>
    )
  }
}
Header.defaultProps = {
    renderContent: '',
    height: 150
}
export default Header