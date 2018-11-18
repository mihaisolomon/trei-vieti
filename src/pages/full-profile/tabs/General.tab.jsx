import React, { Component } from 'react'
import MaterialIcon from 'material-icons-react';

export default class General extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      submitted: false
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name] : value
    })
  }
  render() {
    const { email, password, submitted } = this.state
    return (
      <React.Fragment>
        <div className="tab-container">
          <form>
            <div className={'mdl-group' + (submitted && !email ? ' has-error' : '')}>
                <input type="text"
                    required
                    id="email"
                    name="email"
                    placeholder="Adresa de email"
                    value={email} 
                    onChange={this.handleChange}/>
                <span className="bar"></span>
                <label htmlFor="email">Adresa de email</label>
                {submitted && !email &&
                    <span className="error"> <MaterialIcon icon="error_outline" />Adresa de email este obligatorie</span>
                }
            </div>
            <div className={'mdl-group' + (submitted && !password ? ' has-error' : '')}>
                <input type="password"
                    required
                    id="password"
                    name="password"
                    placeholder="Parola"
                    value={password} 
                    onChange={this.handleChange}/>
                <span className="bar"></span>
                <label htmlFor="password">Parola</label>
                {submitted && password && password.length < 6 &&
                    <span className="error"> <MaterialIcon icon="error_outline" />Parola este prea scurta</span>
                }
            </div>
              <button type="submit">Save</button>
          </form>
          <div className='mdl-group'>
            <input type="text"
                disabled
                value="AB" />
            <label htmlFor="saguin">Grupa de sange</label>
          </div>
        <div className='mdl-group'>
          <input type="text"
              disabled
              value="Pozitiv" />
          <label htmlFor="saguin">Rh</label>
        </div>
      </div>
      <div className="referral-container">
        <h4>Share this link with your friends</h4>
        <p>www.treivieti.ro/?ref=dsaEewq13f</p>
      </div>
      </React.Fragment>
      
    )
  }
}
