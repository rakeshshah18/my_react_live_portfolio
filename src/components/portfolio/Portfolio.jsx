import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'


const data = [

  {
    id: 1,
    image: IMG1,
    title: 'Portfolio',
    github: 'https://github.com/rakeshshah18/my_react_live_portfolio',
    demo: 'https://rakesh-shah.vercel.app/'
  },

  {
    id: 2,
    image: IMG2,
    title: 'Yogya Capital',
    github: 'https://github.com/rakeshshah18/',
    demo: 'https://yogyacapital.com/'
  },

  {
    id: 3,
    image: IMG3,
    title: 'CM Placement Services',
    github: 'https://github.com/LMS-Valsad/CM_PS',
    demo: 'https://cm-placement-services.vercel.app/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Excel Data View',
    github: 'https://github.com/rakeshshah18/excel-view-react-app',
    demo: 'https://excel-view-zeta.vercel.app/'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='container portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  {id === 2 ? (
                    <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                  ) : (
                    <>
                      <a href={github} className='btn' target='_blank'>See On Github</a>
                      <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                    </>
                  )}
                </div>
              </article>
            );
          })
        }


      </div>


    </section>
  )
}

export default Portfolio
