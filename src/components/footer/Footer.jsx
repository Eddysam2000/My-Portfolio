import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'
import { IoLogoTwitter } from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>EDWIN</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Service</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonial</a></li>
        <li><a href="#contact">Contacts</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://facebook.com"><FaFacebookF /></a>
        <a href="https://www.linkedin.com"><BsLinkedin /></a>
        <a href="https://twitter.com"><IoLogoTwitter /></a>
      </div>

      <div className="footer_copyright">
        <small>&copyright; Edwin Samuel. All rights reserved.</small>
      </div>

    </footer>
  )
}

export default Footer