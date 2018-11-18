import React from 'react';
import MaterialIcon from 'material-icons-react';
import ForgotPass from './ForgotPass.component';
import AuthService from '../../../services/Auth.service';
import { connect } from 'react-redux';
import { loginUserSuccess } from '../../../redux/user/user.actions';

class CodDonator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showForgotPass: false
        };

        this.login = this.login.bind(this);
    }

    toggle() {
        this.setState({
            showForgotPass: !this.state.showForgotPass
        });
    }

    login(event) {
        event.preventDefault();

        AuthService.login({
            email: "pbarsham0@ezinearticles.com",
            password: "asdqwe123"
        }).then(user => {
            localStorage.setItem("authToken", user.token);

				AuthService.getUser().then(user => {
					this.props.dispatch(loginUserSuccess(user));
					this.props.history.push('/profile');
				})
        })
    }

    render() {
        return (
            <React.Fragment>
                {!this.state.showForgotPass && (
                    <div className="auth-box" style={{ top: '200px' }}>
                        <h2>Activare cont</h2>
                        <p>În câteva minute poți salva lumea, în ochii celor care au nevoie de urgență de sânge.</p>

                        <form onSubmit={this.login}>
                            <label>
                                <input type="text" placeholder="Cod donator" />
                                <span className="error">
                                    <MaterialIcon icon="error_outline" /> Acest câmp este obligatoriu.
                                </span>
                            </label>

                            <button type="submit">Înregistrare</button>
                        </form>
                    </div>
                )}

                {this.state.showForgotPass && <ForgotPass onBack={() => this.toggle()} />}
            </React.Fragment>
        );
    }
}

function mapStateToProps() {

}

export default connect(mapStateToProps)(CodDonator);
