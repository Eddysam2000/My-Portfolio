import React from 'react'
import './testimonial.css'
import IMG1 from '../../assets/client.webp'
import IMG2 from '../../assets/client2.webp'
import IMG3 from '../../assets/client3.jpeg'
import IMG4 from '../../assets/client4.jpeg'


const data = [
  {
    image: IMG1,
    name: 'BLARD Coach',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus sint officiis libero suscipit. Omnis placeat, architecto facere repudiandae tempore aspernatur culpa optio rem error officia a unde. Molestias, pariatur fugiat.'
  },
  {
    image: IMG2,
    name: 'Nathan Yinka',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus sint officiis libero suscipit. Omnis placeat, architecto facere repudiandae tempore aspernatur culpa optio rem error officia a unde. Molestias, pariatur fugiat.'
  },
  {
    image: IMG3,
    name: 'Jerome Darrell',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus sint officiis libero suscipit. Omnis placeat, architecto facere repudiandae tempore aspernatur culpa optio rem error officia a unden. Molestias, pariatur fugiat.'
  },
  {
    image: IMG4,
    name: 'Gerard Butler',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus sint officiis libero suscipit. Omnis placeat, architecto facere repudiandae tempore aspernatur culpa optio rem error officia a unde. Molestias, pariatur fugiat.'
  }
]

const Testimonial = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials_container">
        {
          data.map(({image, name, review}, index) => {
            return (
              <article key={index} className="testimonial">
              <div className="client_avatar">
                <img src={image} />
              </div>
              <h5 className='client_name'>{name}</h5>
              <small className='client_review'>{review}</small>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Testimonial