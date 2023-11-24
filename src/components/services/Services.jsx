import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>Frontend Development</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Designing and implementing user interfaces.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Writing Clean HTML, CSS and JavaScript code.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Optimizing web performances and load times.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Creating websites that display on different screen sizes.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Familiar with Version control tools such as git.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
          </ul>
        </article>
       {/* end of data analysis */}
       <article className="service">
          <div className="service_head">
            <h3>Backend Development</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Designing the logic that powers the application.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Managing databases to store and retrieve data.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Integrating the backend with other services or systems.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Ensuring the performance and security of the application.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Excellent team work with frontend developers.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Familiar with APIs using Django Rest Framework.</p>
            </li>
            {/* <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li> */}
          </ul>
        </article>
        {/* end of web development */}
        <article className="service">
          <div className="service_head">
            <h3>Data Structures</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsums dolor sit amet consectetur.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsums dolors sit amet consectetur.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
          </ul>
        </article>
        {/* end of data structures */}
      </div>
    </section>
  )
}

export default Services