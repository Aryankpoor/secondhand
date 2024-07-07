import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pinterest_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>AESTHETIC</p>
      </div>
      <ul className="footer-links">
      <li><a href="https://github.com/Aryankpoor" alt="github author link">Author</a></li>
        <li><a href="https://github.com/Aryankpoor/secondhand" alt="github repo link">Github</a></li>
        
        <li><a href="https://github.com/Aryankpoor/secondhand" alt="More projects like this">Projects</a></li>
        <li><a href="https://Aryankpoor.github.io" alt="aryan kapoor portfolio">Portfolio</a></li>
        <li><a href="https://read.cv/aryankkap" alt="CV">About</a></li>
        
      </ul>
      <div className="footer-social-icon">
         <div className="footer-icons-container">
            <img src={instagram_icon} alt="" />
         </div>
         <div className="footer-icons-container">
            <img src={pinterest_icon} alt="" />
         </div>
         <div className="footer-icons-container">
            <img src={whatsapp_icon} alt="" />
         </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Rights Reserved. This is just a project, not a real website</p>
      </div>
    </div>
  )
}

export default Footer
