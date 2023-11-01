import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {RiInstagramLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <MdOutlineMail />
            <h4>Email</h4>
            <h5>samueledwin67@gmail.com</h5>
            <a href="mailto:samueledwin67@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className='contact_option'>
            <RiInstagramLine />
            <h4>Instagram</h4>
            <h5>EdwinIgenegbai</h5>
            <a href="https://m.me/www.instagram.com/edwinigenegbai/" target='_blank'>Send a message</a>
          </article>
          <article className='contact_option'>
            <BsWhatsapp />
            <h4>Whatsapp</h4>
            <h5>+2349160399839</h5>
            <a href="https://api.whatsapp.com/send?phone+2347087743041" target='_blank'>Send a message</a>
          </article>

        </div>
        {/* END OF CONTACT */}
        <form action="">
          <input type="text" name='name' placeholder='Enter Your Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Enter Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact