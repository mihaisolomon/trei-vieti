import React from 'react';
import MaterialIcon, {colorPalette} from 'material-icons-react';
import { connect } from 'react-redux';
import ForgotPass from './ForgotPass.component';

import AuthService from '../../../services/Auth.service';
import { loginUserSuccess } from '../../../redux/user/user.actions';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showForgotPass: false
        };

        this.formRef = React.createRef();
        this.login = this.login.bind(this);
    }

    toggle() {
        this.setState({
            showForgotPass: !this.state.showForgotPass
        });
    }

    login(event) {
        event.preventDefault();

        const data = {
            email: this.formRef.current.email.value,
            password: this.formRef.current.password.value
        };

        AuthService.login(data)
            .then(user => {
				localStorage.setItem("authToken", user.token);

				AuthService.getUser().then(user => {
					this.props.dispatch(loginUserSuccess(user));
					this.props.history.push('/profile');
				})

			})
            .catch(err => {
                alert('Login fail!');
            });
    }

    render() {
        return (
            <React.Fragment>
                {!this.state.showForgotPass && (
                    <div className="auth-box">
                        <h2>Autentificare</h2>
                        <p>În câteva minute poți salva lumea, în ochii celor care au nevoie de urgență de sânge.</p>

                        <form onSubmit={this.login} ref={this.formRef}>
                            <label className="has-error">
                                <input required name="email" type="email" placeholder="Adresa de email" />
                                <span className="error">
                                    <MaterialIcon icon="error_outline" /> Acest câmp este obligatoriu.
                                </span>
                            </label>

                            <label>
                                <input required name="password" type="password" placeholder="Parola" />
                                <span className="error" />
                            </label>

                            <label className="checkbox">
                                <input type="checkbox" placeholder="Parola" />
                                <p>Păstrează-ma logat</p>
                            </label>

                            <button type="button" onClick={() => this.toggle()}>
                                Ai uitat parola?
                            </button>
                            <button type="submit">Login</button>
                        </form>
                    </div>
                )}

                {this.state.showForgotPass && <ForgotPass onBack={() => this.toggle()} />}
            </React.Fragment>
        );
    }
}

function mapStateToProps() {
	return {}
}

export default connect(mapStateToProps)(Login);
