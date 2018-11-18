import React, { Component } from 'react'
import MaterialIcon from 'material-icons-react';

export default class General extends Component {
  render() {
    return (
      <div style={{ top: '40px' }}>
        <form>
            <label>
                <input required name="email" type="email" placeholder="Adresa de email" />
                <span className="error">
                    <MaterialIcon icon="error_outline" /> Acest câmp este obligatoriu.
                </span>
            </label>

            <label>
                <input required name="password" type="password" placeholder="Parola" />
                <span className="error" />
            </label>

            <button type="submit">Save</button>
        </form>
      </div>
    )
  }
}
