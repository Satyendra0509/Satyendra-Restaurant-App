import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>Welcome to <b>Satyendra Restaurant</b>, where tradition meets innovation. Enjoy a delightful mix of Indian, Chinese, and Continental dishes, crafted with fresh, locally sourced ingredients. Whether it’s a family meal or a romantic dinner, our warm ambiance and friendly service ensure an unforgettable dining experience. Come savor the flavors and create lasting memories!</p>
          <div className="footer-social-icons">
            <a href="https://www.facebook.com/your-profile" >
              <img src={assets.facebook_icon} alt="Facebook Profile" />
            </a>

            <a href="https://www.twitter.com/your-profile" >
              <img src={assets.twitter_icon} alt="Twitter Profile" />
            </a>

            <a href="https://www.linkedin.com/in/satyendrakb/" ><img src={assets.linkedin_icon} alt="LinkedIn Profile" /></a>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+9621XXXXX</li>
            <li>contact@satyendra.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © Satyendra.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
