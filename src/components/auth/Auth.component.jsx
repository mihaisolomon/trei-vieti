import React from 'react';
import MaterialIcon, {colorPalette} from 'material-icons-react';

import './Auth.style.scss';

class Auth extends React.Component {
    render() {
        return (
            <div className="auth-box">
                <h2>Autentificare</h2>
                <p>În câteva minute poți salva lumea, în ochii celor care au nevoie de urgență de sânge.</p>

                <form action="">
                    <label class="has-error">
                        <input type="text" placeholder="Adresa de email" />
                        <span className="error">Acest câmp este obligatoriu.</span>
                    </label>

                    <label>
                        <input type="password" placeholder="Parola" />
                        <span className="error"></span>
                    </label>

                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}

export default Auth;