import React from 'react';
import Header from '../../components/header/Header.component';
import BloodRectangle from '../../components/BloodRectangle/BloodRectangle.component';
import './Profile.style.scss';

class ProfilePage extends React.Component {
    render() {
        return (
            <div className="user-container">
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
                                300 <p>puncte</p>
                            </div>
                            <div className="user-stats">
                                3 <p>donari</p>
                            </div>
                            <div className="user-stats">
                                9 <p>vieti salvate</p>
                            </div>
                        </div>
                        <div className="full-profile">
                            <h2>FULL PROFILE</h2>
                        </div>
                    </div>
                </section>

                <section className="time-section">
                    <div className="time">
                        <p>Au mai ramas</p>

                        <ul>
                            <li>
                                <span id="days" />days
                            </li>
                            <li>
                                <span id="hours" />Hours
                            </li>
                            <li>
                                <span id="minutes" />Minutes
                            </li>
                            <li>
                                <span id="seconds" />Seconds
                            </li>
                        </ul>

                        <p>12 : 06 : 55</p>
                        <p>pana poti dona din nou. Succes!</p>
                    </div>
                    <div className="log-out">
                        <h2>LOG OUT</h2>
                    </div>
                </section>
            </div>
        );
    }
}

export default ProfilePage;
