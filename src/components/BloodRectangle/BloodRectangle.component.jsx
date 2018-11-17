import React from 'react'
import './BloodRectangle.style.scss'

class BloodRectangle extends React.Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        return (
            <div className="blood-rectangle" style={{background:`linear-gradient(to top, red 0%,red ${this.props.percentage}%,white ${this.props.percentage}%,white 100%)`}}>
                <h1> {this.props.bloodType} </h1>
                <p> {this.props.percentage} % </p>

            </div>
                
        )
    }
}

export default BloodRectangle;