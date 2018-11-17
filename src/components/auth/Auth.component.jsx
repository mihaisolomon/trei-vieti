import React from 'react';
import MaterialIcon, {colorPalette} from 'material-icons-react';

import './Auth.style.scss';

class Auth extends React.Component {
    constructor(props){
        super(props);
        this.showForgotPassword = false;
    }

    render() {
        return (
            <React.Fragment>
                <div className="auth-box">
                    <h2>Autentificare</h2>
                    <p>În câteva minute poți salva lumea, în ochii celor care au nevoie de urgență de sânge.</p>

                    <form action="">
                        <label class="has-error">
                            <input type="text" placeholder="Adresa de email" />
                            <span className="error"><MaterialIcon icon="error_outline" /> Acest câmp este obligatoriu.</span>
                        </label>

                        <label>
                            <input type="password" placeholder="Parola" />
                            <span className="error"></span>
                        </label>

                        <label className="checkbox">
                            <input type="checkbox" placeholder="Parola" />
                            <p>Păstrează-ma logat</p>
                        </label>

                        <a href="#">Ai uitat parola?</a>

                        <button type="submit">Login</button>
                    </form>
                </div>

                <div className="auth-box">
                    <h2>Recuperare parola</h2>
                    <p>Completează adresa de e-mail cu care te-ai înregistrat și îți vom trimite un e-mail cu noua parola.</p>

                    <form action="">
                        <label>
                            <input type="text" placeholder="Adresa de email" />
                            <span className="error"><MaterialIcon icon="error_outline" /> Acest câmp este obligatoriu.</span>
                        </label>

                        <button type="submit">Resetează parola</button>
                    </form>
                </div>

                <div className="auth-box">
                    <div className="success-message">
                        <MaterialIcon icon="done" />

                        <h2>Felicitări</h2>
                        <p>Ți-am trimis un e-mail cu pașii pe care trebuie să ii urmezi pentru resetarea parolei.</p>
                    </div>
                </div>                
            </React.Fragment>
        )
    }
}

export default Auth;