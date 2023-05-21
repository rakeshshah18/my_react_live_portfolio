import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const data = [

  {
    id: 1,
    image:IMG1,
    title:'E-Commerce website',
    github: 'https://github.com',
    demo:'https://dribbble.com/shots/20895141-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
  
  {
    id: 2,
    image:IMG2,
    title:'Collage Project',
    github: 'https://github.com',
    demo:'https://dribbble.com/shots/20894932-Orion-UI-kit-data-visualization-and-charts-templates-for-Figma'
  },
  
  {
    id: 3,
    image:IMG3,
    title:'Android App-Image slideshow using flitter ',
    github: 'https://github.com',
    demo:'https://dribbble.com/shots/20894654-Orion-UI-kit-data-visualization-and-charts-templates-for-Figma'
  },
  
  {
    id: 4,
    image:IMG4,
    title:'Portfolio Using ReactJs',
    github: 'https://github.com',
    demo:'https://dribbble.com/shots/20894779-Orion-UI-kit-data-visualization-and-charts-templates-for-Figma'
  },
  
  {
    id: 5,
    image:IMG5,
    title:'Will updates in feature',
    github: 'https://github.com',
    demo:'https://dribbble.com/shots/21277585-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
  
  {
    id: 6,
    image:IMG6,
    title:'Will updates in feature',
    github: 'https://github.com',
    demo:'https://dribbble.com/shots/21221476-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id,image,title,github,demo}) =>{
            return(
              <article key={id} className='container portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
          <a href={github} className='btn' target='_blank'>See On Github</a>
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