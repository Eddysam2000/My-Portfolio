import React from 'react'
import './testimonial.css'
import IMG1 from '../../assets/client.webp'
import IMG2 from '../../assets/client2.webp'
import IMG3 from '../../assets/client3.jpeg'
import IMG4 from '../../assets/client4.jpeg'

const Testimonial = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials_container">
        <article className="testimonial">
          <div className="client_avatar">
            <img src={IMG1} alt="Image 1" />
            <h5 className='client_name'>Joshua Samuel</h5>
            <small className='client_review'></small>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Testimonial