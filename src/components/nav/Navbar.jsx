import React from 'react'
import './navbar.css'
import {MdOutlineHome} from 'react-icons/md'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageDetail} from 'react-icons/bi'
import { useState } from 'react'

const Navbar = () => {
  const [activeNavbar, setActiveNavbar] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNavbar('#')} className={activeNavbar === '#' ? 'active' : ''}><MdOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNavbar('#about')} className={activeNavbar === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={() => setActiveNavbar('#experience')} className={activeNavbar === '#experience' ? 'active' : ''}><BiBook/></a>
      <a href="#services" onClick={() => setActiveNavbar('#services')} className={activeNavbar === '#services' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#contact" onClick={() => setActiveNavbar('#contact')} className={activeNavbar === '#contact' ? 'active' : ''}><BiMessageDetail/></a>
    </nav>
  )
}

export default Navbar