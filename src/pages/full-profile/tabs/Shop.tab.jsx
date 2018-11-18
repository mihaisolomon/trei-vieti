import React, { Component } from 'react'
import './Shop.style.scss'

const vouchers = [
  {
    id: Math.random() * 1000,
    points: 100,
    image: 'http://moneybuzz.ro/wp-content/uploads/2017/01/altex.png',
    title: 'Voucher 50 RON Altex'
  },
  {
    id: Math.random() * 1000,
    points: 200,
    image: 'https://media.rtv.net/image/201701/full/screenshot_2017_01_23_12_18_28_95137200.png',
    title: 'Voucher emag'
  },
  {
    id: Math.random() * 1000,
    points: 100,
    image: 'http://moneybuzz.ro/wp-content/uploads/2017/01/altex.png',
    title: 'Voucher 50 RON Altex'
  },
  {
    id: Math.random() * 1000,
    points: 100,
    image: 'http://moneybuzz.ro/wp-content/uploads/2017/01/altex.png',
    title: 'Voucher 50 RON Altex'
  }

]
export default class Shop extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="shop" className="tab-container">
          <h3>300</h3>
          <p>puncte</p>
          <div className="vouchers-wrapper">
            {vouchers && vouchers.map((voucher,index) => 
              <div key={voucher.id} className="voucher">
                <span>{voucher.points} pct</span>
                <div className="voucher-image">
                  <img src={voucher.image} alt=""/>
                </div>
                <p>{voucher.title}</p>
              </div>
            )}
          </div>
        </div>
      </React.Fragment>
    )
  }
}
