import React from 'react'
import './BloodRectangle.style.scss'

class BloodRectangle extends React.Component {
    render() {
        return (
            <div className="blood-rectangle" style={{background:`linear-gradient(to top, #e93e4b 0%,#e93e4b ${this.props.percentage}%,white ${this.props.percentage}%,white 100%)`}}>
                <h1> {this.props.bloodType} </h1>
                <p> {this.props.percentage} % </p>
            </div>
        )
    }
}

export default BloodRectangle;