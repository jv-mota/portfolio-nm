import React from 'react';
import './skills.css';
import FrontEnd from './FrontEnd';
import BackEnd from './BackEnd';
import Meteorologist from './Meteorologist';
import Analyst from './Analyst';
import DataScience from './DataScience';
import Others from './Others';

const Skills = () => {
  return (
    /* skills-section */
    <section className="skills section" id="skills">

      {/* title-skills */}
      <h1 className="section__title">Skills</h1>
      {/* subtitle-skills */}
      <span className="section__subtitle">My technical level</span>

      {/* container */}      
      <div className="skills__container container grid">

        {/* frontend */}   
        {/* <FrontEnd />*/}       

        {/* backend */}
        {/* <BackEnd /> */}

        {/* meteorologist */}
        <Meteorologist />

        {/* analyst */}
        <Analyst />

        {/* data-scientist */}
        <DataScience />

        {/* others */}
        <Others />

      </div>

    </section>
  )
}

export default Skills;
