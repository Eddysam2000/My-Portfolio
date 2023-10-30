import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/jazzyburger.png'
import IMG2 from '../../assets/portfolio.png'
import IMG3 from '../../assets/newsletter.png'
import IMG4 from '../../assets/snapkart.png'
import IMG5 from '../../assets/backend api.png'
import IMG6 from '../../assets/excel analysis.jpeg'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG1} alt="" />

          </div>
          <h3>This is a portfolio Title</h3>
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>

        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG1} alt="" />

          </div>
          <h3>This is a portfolio Title</h3>
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>

        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG1} alt="" />

          </div>
          <h3>This is a portfolio Title</h3>
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>

        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG1} alt="" />

          </div>
          <h3>This is a portfolio Title</h3>
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>

        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG1} alt="" />

          </div>
          <h3>This is a portfolio Title</h3>
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>

        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG1} alt="" />

          </div>
          <h3>This is a portfolio Title</h3>
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>

        </article>
      </div>
    </section>
  )
}

export default Portfolio