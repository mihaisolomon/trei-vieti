import React from 'react';
import BloodRectangle from '../../components/BloodRectangle/BloodRectangle.component';
import './Profile.style.scss';
import OnlyAuth from '../../components/OnlyAuth';
import Countdown from '../../components/Countdown/Countdown.component'
import Header from '../../components/header/Header.component'
import { Link } from "react-router-dom";
class ProfilePage extends React.Component {
    logout() {
        localStorage.removeItem("authToken");
        window.location = "/";
    }
    render() {
        return (
            <OnlyAuth>
                <Header 
                    renderContent={<h2>Resurse actuale</h2>}/>
                <div className="container" style={{ top: '210px'}}>
                    <div className="user-container">
                        <div className="rectangle-wrapper">
                            <BloodRectangle bloodType="A" percentage="24" />
                            <BloodRectangle bloodType="B" percentage="55" />
                            <BloodRectangle bloodType="AB" percentage="30" />
                            <BloodRectangle bloodType="0" percentage="9" />
                        </div>
                        <section className="user-section-wrapper">
                            <div className="user-section">
                                <div className="user">
                                    <img
                                        className="user-avatar"
                                        src="https://scontent-otp1-1.xx.fbcdn.net/v/t1.0-9/43108023_10156194198864608_6077071487649447936_n.jpg?_nc_cat=100&_nc_ht=scontent-otp1-1.xx&oh=3fc44eadb9429e451c83c041fb5aa365&oe=5C7804B6"
                                    />
                                    <h1>Alexandru Pavaloi</h1>
                                    <p>Level: <span>Hardcore donor</span></p>
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
                                <Link to="/full-profile" className="full-profile"><h3>FULL PROFILE</h3></Link>
                            </div>
                        </section>
                        <Countdown
                            endDate={new Date(2018,11,24,0,0)}/>
                        <section className="bg-white">
                            <button onClick={this.logout} className="log-out">
                                <h3>LOG OUT</h3>
                            </button>
                        </section>
                    </div>
                </div>
            </OnlyAuth>
        );
    }
}

export default ProfilePage;
