import React from 'react'
import './navbar.css'
import logo from '../assets/logo.png';
import cart_icon from '../assets/cart_icon.png';

const navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SecondHand</p>
      </div>
      <ul className="nav-menu">
        <li>Shop <hr/></li>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt="cart" />
      </div>
    </div>
  )
}

export default navbar
 