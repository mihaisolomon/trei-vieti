import React from 'react';
import MaterialIcon, {colorPalette} from 'material-icons-react';

import AuthService from '../../../services/Auth.service';

class Register extends React.Component {
    constructor(props) {
        super(props);

        this.formRef = React.createRef();
        this.register = this.register.bind(this);
    }

    register(event) {
        event.preventDefault();

        const data = {
            email: this.formRef.current.email.value,
            name: this.formRef.current.name.value,
            password: this.formRef.current.password.value
        };

        AuthService.register(data)
            .then(user => {
                //
            })
            .catch(err => {
                alert('Aoleu! Smallpox everywhere!');
            });
    }

    render() {
        return (
            <div className="auth-box">
                <h2>Creare cont</h2>
                <p>În câteva minute poți salva lumea, în ochii celor care au nevoie de urgență de sânge.</p>

                <form ref={this.formRef} onSubmit={this.register}>
                    <label class="has-error">
                        <input required type="text" placeholder="Nume" name="name" />
                        <span className="error">
                            <MaterialIcon icon="error_outline" /> Acest câmp este obligatoriu.
                        </span>
                    </label>

                    <label class="has-error">
                        <input required type="email" placeholder="Adresa de email" name="email" />
                        <span className="error">
                            <MaterialIcon icon="error_outline" /> Acest câmp este obligatoriu.
                        </span>
                    </label>

                    <label class="has-error">
                        <input required type="password" placeholder="Parola" name="password" />
                        <span className="error">
                            <MaterialIcon icon="error_outline" /> Acest câmp este obligatoriu.
                        </span>
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
