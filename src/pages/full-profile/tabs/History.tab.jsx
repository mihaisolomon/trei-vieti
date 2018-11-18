import React, { Component } from 'react'

const donations = [{
        date: new Date(),
    },
    {
        date: new Date(),
    },
    {
        date: new Date(),
    },
    {
        date: new Date(),
    },
];
export default class History extends Component {
  render() {
    return (
      <div>
        <h3>Istoric donari</h3>
        {donations && donations.map((donation,index) => 
            <div key={index}>
                <span>Check</span>{`$donation.date`}
            </div>
        )}
      </div>
    )
  }
}
