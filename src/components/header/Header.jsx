import React from 'react'
import './header.css'
import CTA from './Cta'
import ME from '../../assets/edwin.jpeg'
import Headersocial from './Headersocials'

const Header = () => {
  return (
   <header>
    <div className="container header_container">
      <h4>Hello Im</h4>
      <h1>Edwin Igenegbai</h1>
      <h5 className="text-light">Fullstack Developer</h5>
      <CTA />
      <Headersocial />

      <div className='ed'>
        <img src={ME} alt="me" />
      </div>

      <a href="#contact" className='scroll__down'>Scroll Down</a>
    </div>
   </header>
  )
}

export default Header