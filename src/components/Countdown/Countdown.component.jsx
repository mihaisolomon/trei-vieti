import React, { Component } from 'react'
import './Countdown.style.scss'
class Countdown extends Component {
    constructor(props){
        super(props)
        this.state = {
            remainingDays: 0,
            remainingHours: 0,
            remainingMinutes: 0,
        }
    }

    componentDidMount = () => {
        var that = this
        setInterval( () => {
            that.updateTime()
        },1000)
    }
    
    updateTime() {
        var today = new Date();
   
       var distance = this.props.endDate - today;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        //var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        this.setState({
          remainingDays: days,
          remainingHours: hours,
          remainingMinutes: minutes,
        })
    }
  render() {
    return (
        <section className="time-section">
            <div className="time">
                <p>Au mai ramas</p>
                <ul>
                    <li>
                        <span id="days">{this.state.remainingDays}</span>
                        Zile
                    </li>
                    <li>
                        <span id="hours">{this.state.remainingHours}</span>
                        Ore
                    </li>
                    <li>
                        <span id="minutes">{this.state.remainingMinutes}</span>
                        Minute
                    </li>
                </ul>
                <p>pana poti dona din nou. Succes!</p>
            </div>
        </section>
    )
  }
}

Countdown.defaultProps = {
    endDate: new Date()
}

export default Countdown