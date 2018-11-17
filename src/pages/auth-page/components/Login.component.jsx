import React from 'react';
import MaterialIcon, {colorPalette} from 'material-icons-react';
import ForgotPass from './ForgotPass.component';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showForgotPass: false
        };
    }

    toggle() {
        this.setState({
            showForgotPass: !this.state.showForgotPass
        });
    }

    login(event) {
        event.preventDefault();
    }

    render() {
        return (
            <React.Fragment>
                {!this.state.showForgotPass && (
                    <div className="auth-box">
                        <h2>Autentificare</h2>
                        <p>În câteva minute poți salva lumea, în ochii celor care au nevoie de urgență de sânge.</p>

                        <form onSubmit={this.login}>
                            <label className="has-error">
                                <input type="text" placeholder="Adresa de email" />
                                <span className="error">
                                    <MaterialIcon icon="error_outline" /> Acest câmp este obligatoriu.
                                </span>
                            </label>

                            <label>
                                <input type="password" placeholder="Parola" />
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
                            <button type="button" className="register">Nu ai cont? Înregistrează-te, <br/> durează foarte puțin.</button>
                        </form>
                    </div>
                )}

                {this.state.showForgotPass && <ForgotPass onBack={() => this.toggle()} />}
            </React.Fragment>
        );
    }
}

export default Login;
