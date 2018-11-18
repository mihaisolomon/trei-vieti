import React, { Component } from 'react'

const randomDate = (start, end) => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

const donations = [{
        date: randomDate(new Date(2000, 0, 1), new Date()),
    },
    {
        date: randomDate(new Date(2000, 0, 1), new Date()),
    },
    {
        date: randomDate(new Date(2000, 0, 1), new Date()),
    },
    {
        date: randomDate(new Date(2000, 0, 1), new Date()),
    },
];

const months = ["Ianuarie","Februarie","Martie","Aprilie","Mai","Iunie","Iulie","August","Septembrie","Octombrie","Noiembrie","Decembrie"]

export default class History extends Component {
    onChange() {}
    formatDate(date) {
        var month = date.getUTCMonth();
        var day = date.getUTCDate();
        var year = date.getUTCFullYear();

        return day + ' ' + months[month] + ' ' + year
    }
  render() {
    return (
      <div className="tab-container">
        <h3>Istoric donari</h3>
        {donations && donations.map((donation,index) => 
            <div key={index}>
                <label className="checkbox-container">{this.formatDate(donation.date)}
                    <input type="checkbox" checked="checked"
                        onChange={this.onChange}/>
                    <span className="checkmark"></span>
                </label>
            </div>
        )}
      </div>
    )
  }
}
