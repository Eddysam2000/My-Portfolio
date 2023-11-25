import React from 'react'
import './about.css'
import ME from '../../assets/edwin.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {PiFolderOpen} from 'react-icons/pi'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>

        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>1year Experience</small>
            </article>

            <article className='about_card'>
              <FiUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>10+ Nigerian Clients</small>
            </article>

            <article className='about_card'>
              <PiFolderOpen className='about_icon'/>
              <h5>Projects</h5>
              <small>10+ projects done</small>
            </article>
          </div>

          <p>
          Hey, I'm Edwin, a fullstack developer who loves crafting seamless user experiences. From designing beautiful frontends with HTML, CSS, and JavaScript to building robust backends with Python and Django, I've got you covered. Let's collaborate and bring your ideas to life!
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talks</a>

        </div>
      </div>
    </section>
  )
}

export default About