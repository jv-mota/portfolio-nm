import React from 'react';
import './home.css';
import Data from './Data';
import Social from './Social';
import ScrollDown from './ScrollDown';

const Home = () => {
  return (
    /* home-section */
    <section className="home section" id="home">

        {/* container */}
        <div className="home__container container grid">          

          {/* content */}
          <div className="home__content grid">

            {/* data */}
            <Data />

            {/* social-media */}
            <Social />

          </div>

        </div>

        {/* scroll-down */}
        <ScrollDown />

        {/* background-waves */}
        <svg className="home__waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none">
        <defs>
          <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352" />
        </defs>
        <g className="wave1">
          <use xlinkHref="#wave-path" x="50" y="3" fill="rgba(255,255,255, .1)" />
        </g>
        <g className="wave2">
          <use xlinkHref="#wave-path" x="50" y="0" fill="rgba(255,255,255, .2)" />
        </g>
        <g className="wave3">
          <use xlinkHref="#wave-path" x="50" y="4" fill="#F9F9F9" />
        </g>
        </svg>

    </section>
  )
}

export default Home;
