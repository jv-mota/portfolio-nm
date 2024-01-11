import React from 'react';
import './statistics.css';
import ReactPlayer from 'react-player';
import Content from './Content';
import Testimonials from './testimonials/Testimonials';

const Statistics = () => {
  return (
    /* statistics-section */
    <section className="statistics section" id="statistics">

        {/* title-statistics */}
        <h1 className="section__title">Statistics</h1>
        {/* subtitle-statistics */}
        <span className="section__subtitle">My algorithms</span>

        {/* container */}
        <div className="statistics__container container grid">

          {/* statistics-content */}
          <div className="statistics__content grid">

            {/* content */}        
            <Content />            

          </div>

          {/* statistics-video */}
          <div className="statistics__video">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=U1-tNfr9P8k"
              controls={true}  
              width="100%"
              height="375px" 
            />
          </div>   

        </div>

        {/* statistics-description */}
        <div className="statistics__description container grid">

          {/* description */}
          <p>
            I'm pleased to welcome you to my channel dedicated to statistical 
            analysis, where transforming data into engaging narratives reveals
            patterns, trends and curiosities that have a significant impact on
            our daily lives.
            <br/>
            <br/>
            If you are interested in taking a closer look at my recent projects,
            I cordially invite you to subscribe to my YouTube channel. The 
            community that forms around these statistical studies is a dynamic 
            space for exchanging ideas and the incessant search for more refined
              understanding.
            <br/>
            <br/>
            Thank you for your attention and I look forward to sharing the fascinating
            journey through numbers and statistical analysis with you on my channel. 
            To stay up to date with the latest projects, we welcome your registration.
          </p>

          {/* statistics-channel */}
          <div className="statistics__channel">
            <a 
            href="#" 
            className="statistics__button" 
            target="_blank"
            title="Youtube Channel">
              Youtube channel
            <i class="fa-brands fa-youtube statistics__button-icon"></i>
            </a>           
          </div>      

        </div>    

        {/* testimonials */}
        <Testimonials />  
      
    </section>

  )
}

export default Statistics;
