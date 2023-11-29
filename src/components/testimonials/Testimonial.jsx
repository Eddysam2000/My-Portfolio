import React from 'react'
import './testimonial.css'
import IMG1 from '../../assets/client.webp'
import IMG2 from '../../assets/client2.webp'
import IMG3 from '../../assets/client3.jpeg'
import IMG4 from '../../assets/client4.jpeg'

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


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
    name: 'Gerard Bultrer',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus sint officiis libero suscipit. Omnis placeat, architecto facere repudiandae tempore aspernatur culpa optio rem error officia a unde. Molestias, pariatur fugiat.'
  }
]

const Testimonial = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Client</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({image, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src={image} />
              </div>
              <h5 className='client_name'>{name}</h5>
              <small className='client_review'>{review}</small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonial