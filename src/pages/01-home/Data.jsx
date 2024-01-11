import React from 'react';

const Data = () => {
  return (
    /* data */
    <div className="home__data">

        {/* home-title */}
        <h1 className="home__title">
        <span>Hello,</span> I'm
        </h1>

        {/* home-subtitle */}
        <h3 className="home__subtitle">
        Nelson A. Mateus
        </h3>

        {/* home-work */}
        <p className="hero-subtitle">
          <span 
          className="typed" 
          data-typed-items="Designer, Developer, Freelancer, Photographer">
          </span>
        </p>

        {/* home-description */}
        <p className="home__description">
        Welcome to my personal portfolio, where I share my multifaceted trajectory 
        in the areas of meteorology, systems analysis, data science and programming.
        To learn more, follow me:
        </p>

    </div>
  )
}

export default Data;
