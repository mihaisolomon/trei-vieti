import React from 'react';



class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 2
        }

        setInterval(() => {
            this.setState({
                number: this.state.number + 1
            })
        }, 1000);
    }
    render() {
        return (
            <header>  {this.props.appName} - {this.state.number} </header>
        )
    }
}

export default Header;