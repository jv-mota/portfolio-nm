import React from 'react';
import './portfolio.css';
import Works from './Works';

const Portfolio = () => {
  return (
    /* portfolio-section */
    <section className="portfolio section" id="portfolio">

        {/* title-portfolio */}
        <h1 className="section__title">Portfolio</h1>
        {/* subtitle-portfolio */}
        <span className="section__subtitle">Most recent works</span>

        {/* container */}
        <div className="portfolio__container container grid">

          {/* works */}
          <Works />                  

        </div>

    </section>    
  )
}

export default Portfolio;
