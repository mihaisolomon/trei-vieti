import React from 'react';
import BloodRectangle from '../../components/BloodRectangle/BloodRectangle.component';
import './Profile.style.scss';
import OnlyAuth from '../../components/OnlyAuth';

class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            remainingDays: 0,
          remainingHours: 0,
          remainingMinutes: 0,
          remainingSeconds: 0
        }
    }

    logout() {
        localStorage.removeItem("authToken");
        window.location = "/";
    }

    updateTime() {
        var today = new Date();
        var donationDate = new Date(2018,11,24,0,0);
    /*
        // get total seconds between the times
        var delta = Math.abs(donationDate - today) / 1000;
    
        // calculate (and subtract) whole days
        var days = Math.floor(delta / 86400);
        delta -= days * 86400;
    
        // calculate (and subtract) whole hours
        var hours = Math.floor(delta / 3600) % 24;
        delta -= hours * 3600;
    
        // calculate (and subtract) whole minutes
        var minutes = Math.floor(delta / 60) % 60;
        delta -= minutes * 60;
        
        var seconds = Math.floor(delta / 60) % 60;
        console.log(seconds);
        */
       var distance = donationDate - today;

  // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        this.setState({
          remainingDays: days,
          remainingHours: hours,
          remainingMinutes: minutes,
          remainingSeconds: seconds
        })
    }
    componentDidMount = () => {
        var that = this
        setInterval( () => {
            that.updateTime()
        },1000)
        
      }

    render() {
        return (
            <OnlyAuth>
                <div className="user-container">
                    <h2>Resurse actuale</h2>
                    <section className="user-section-wrapper">
                        <div className="user-section">
                            <div className="rectangle-wrapper">
                                <BloodRectangle bloodType="A" percentage="24" />
                                <BloodRectangle bloodType="B" percentage="55" />
                                <BloodRectangle bloodType="AB" percentage="30" />
                                <BloodRectangle bloodType="0" percentage="9" />
                            </div>

                            <div className="user">
                                <img
                                    className="user-avatar"
                                    src="https://scontent-otp1-1.xx.fbcdn.net/v/t1.0-9/43108023_10156194198864608_6077071487649447936_n.jpg?_nc_cat=100&_nc_ht=scontent-otp1-1.xx&oh=3fc44eadb9429e451c83c041fb5aa365&oe=5C7804B6"
                                />
                                <h1>Alexandru Pavaloi</h1>
                                <p>Level: Hardcore donor</p>
                            </div>
                            <div className="user-stats-container">
                                <div className="user-stats">
                                    <b>300</b> <p>puncte</p>
                                </div>
                                <div className="user-stats">
                                    <b>3</b> <p>donari</p>
                                </div>
                                <div className="user-stats">
                                    <b>9</b> <p>vieti salvate</p>
                                </div>
                            </div>
                            <div className="full-profile">
                                <h3>FULL PROFILE</h3>
                            </div>
                        </div>
                    </section>

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
                                <li>
                                    <span id="seconds">{this.state.remainingSeconds}</span>
                                    Secunde
                                </li>
                            </ul>

                            <p>pana poti dona din nou. Succes!</p>
                        </div>
                        <button onClick={this.logout} className="log-out">
                            <h3>LOG OUT</h3>
                        </button>
                    </section>
                </div>
            </OnlyAuth>
        );
    }
}

export default ProfilePage;
