import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <h4>Email</h4>
            <h5>samueledwin67@gmail.com</h5>
            <a href="mailto:samueledwin67@gmail.com">Send a message</a>
          </article>

        </div>
        {/* END OF CONTACT */}
        <form action=""></form>
      </div>
    </section>
  )
}

export default Contact