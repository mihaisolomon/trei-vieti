import React from 'react';
import MaterialIcon, {colorPalette} from 'material-icons-react';

class ForgotPass extends React.Component {
    render() {
        return (
            <div className="auth-box">
                <h2>Recuperare parola</h2>
                <p>Completează adresa de e-mail cu care te-ai înregistrat și îți vom trimite un e-mail cu noua parola.</p>

                <form action="">
                    <label>
                        <input type="text" placeholder="Adresa de email" />
                        <span className="error"><MaterialIcon icon="error_outline" /> Acest câmp este obligatoriu.</span>
                    </label>

                    <button type="submit">Resetează parola</button>
                    <button type="button" onClick={() => this.props.onBack() } className="go-back"><MaterialIcon icon="arrow_back_ios" /> Înapoi</button>
                </form>
            </div>        	
    	);
    }
}

export default ForgotPass;
