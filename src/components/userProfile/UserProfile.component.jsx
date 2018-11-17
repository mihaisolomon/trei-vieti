import React from 'react';
import Header from '../header/Header.component'
import BloodRectangle from '../bloodRectangle/BloodRectangle.component'
import '../bloodRectangle/BloodRectangle.style.scss'
import '../header/Header.style.scss'
import './UserProfile.style.scss';


class UserProfile extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="user-container">

                <Header />
                <section className="user-section">
                    <div className="rectangle-wrapper">
                        <BloodRectangle bloodType="A" percentage="24" />
                        <BloodRectangle bloodType="B" percentage="55" />
                        <BloodRectangle bloodType="AB" percentage="30" />
                        <BloodRectangle bloodType="0" percentage="9" />
                    </div>
                   
                    <div className="user">
                        <img className="user-avatar" src="https://scontent-otp1-1.xx.fbcdn.net/v/t1.0-9/43108023_10156194198864608_6077071487649447936_n.jpg?_nc_cat=100&_nc_ht=scontent-otp1-1.xx&oh=3fc44eadb9429e451c83c041fb5aa365&oe=5C7804B6"/>
                        <h1>Alexandru Pavaloi</h1>
                        <p>Level: noob </p>
                    </div>
                    <div className="user-stats-container">
                        <div className="user-stats">300 puncte</div>
                        <div className="user-stats">3 donari</div>
                        <div className="user-stats">9 vieti salvate</div>
                    </div>
                    <div className="full-profile">
                        <h2>Full profile</h2>
                    </div>
                </section>

                <section className="time-section">

                    <div className="time">
                        <p>Au mai ramas</p>
                        <p></p>
                        <p>pana poti dona din nou. Succes!</p>
                    </div>
                    <div className="log-out">
                        <h2>Log out</h2>
                    </div>
                </section>
            </div>
        )
    }
}

export default UserProfile;