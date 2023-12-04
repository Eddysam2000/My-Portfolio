import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/jazzyburger.png'
import IMG2 from '../../assets/portfolio.png'
import IMG3 from '../../assets/newsletter.png'
import IMG4 from '../../assets/snapkart.png'
import IMG5 from '../../assets/backend api.png'
import IMG6 from '../../assets/travel-tour.png'



const data = [
  {
    id: 1,
    image: IMG1,
    title: 'JazzyBurger  | Jazzy Juicy Burger',
    github: 'https://github.com/',
    demo: 'https://jazzy-burger.vercel.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Edwin Personal Portfolio | with React',
    github: 'https://github.com/',
    demo: 'jazzy-burger.vercel.app'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Newsletter Front Page with React',
    github: 'https://github.com/',
    demo: 'https://news-letter-page-with-react.vercel.app/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'SnapKart E-Commerce Store with Django | Shopping Made Easy',
    github: 'https://github.com/',
    demo: 'jazzy-burger.vercel.app'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Tech-Studio Community API | Django-Rest-Framework',
    github: 'https://github.com/',
    demo: 'http://127.0.0.1:8000/swagger/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Travel-Tour Vacation Website | Search your desired destination',
    github: 'https://github.com/',
    demo: 'https://travel-tour-chi.vercel.app/'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({id, image, title, github, demo})=> {
            return (
              <article key={id} className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={image} alt={title} />

          </div>
          <h3>{title}</h3>
          <div className="portfolio_item-cta">
            <a href={github} className='btn' target='_blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio