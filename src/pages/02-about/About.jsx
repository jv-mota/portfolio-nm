import React from 'react';
import './about.css';
import Profile from './Profile';
import Information from './Information';
import CV from '../../assets/curriculum-vitae.pdf';

const About = () => {
  return (
    /* about-section */
    <section className="about section" id="about">
      
      {/* title-about */}
      <h1 className="section__title">About me</h1>
      {/* subtitle-about */}
      <span className="section__subtitle">My introduction</span>

      {/* container */}
      <div className="about__container container grid">

        {/* profile */}
        <Profile />

        {/* content */}
        <div className="about__data">

          {/* information */}
          <Information />

          {/* description */}
          <p className="about__description">
          I am a Systems Analyst and Meteorologist with a passion for data science and full stack development. 
          <br/>
          <br/>
          With a solid background in meteorology and systems analysis, I approach complex problems in a 
          multidisciplinary way.
          <br/>
          <br/>
          My experience as a data scientist enables me to transform information into
          actionable insights, while my full stack development skills allow me to create complete and effective
          technological solutions.
          <br/>
          <br/>
          I am committed to applying my experience to deliver innovation and solutions that meet real-world needs.
          </p>

          {/* download-cv */}
          <button 
          download={" "}
          href={ CV } 
          className="download__cv">
            Download CV
          <i class="fa-solid fa-download download__cv-icon"></i>
          </button>

        </div>

      </div>
        
    </section>
  )
}

export default About;
