import React from 'react';
import MaterialIcon, {colorPalette} from 'material-icons-react';

class Register extends React.Component {
    render() {
        return (
            <div className="auth-box">
                <h2>Creare cont</h2>
                <p>În câteva minute poți salva lumea, în ochii celor care au nevoie de urgență de sânge.</p>

                <form action="">
                    <label class="has-error">
                        <input type="text" placeholder="Adresa de email" />
                        <span className="error"><MaterialIcon icon="error_outline" /> Acest câmp este obligatoriu.</span>
                    </label>

                    <label class="has-error">
                        <input type="text" placeholder="Adresa de email" />
                        <span className="error"><MaterialIcon icon="error_outline" /> Acest câmp este obligatoriu.</span>
                    </label>

                    <label className="checkbox">
                        <input type="checkbox" placeholder="Parola" />
                        <p>Păstrează-ma logat</p>
                    </label>

                    <button type="submit">Următor</button>
                </form>
            </div>
    	);
    }
}

export default Register;
