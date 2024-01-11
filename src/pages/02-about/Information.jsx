import React from 'react';

const Information = () => {
  return (
    /* information */
    <div className="about__info grid">

        {/* box-01 */}
        <div className="about__box">

            {/* about-icon */}
            <i class='bx bx-award about__icon'></i>
            {/* about-title */}
            <h3 className="about__title">Experience</h3>
            {/* about-subtitle */}
            <span className="about__subtitle">+ 10 Years</span>            

        </div>

        {/* box-02 */}
        <div className="about__box">

            {/* about-icon */}
            <i class='bx bx-briefcase about__icon'></i>
            {/* about-title */}
            <h3 className="about__title">Completed</h3>
            {/* about-subtitle */}
            <span className="about__subtitle">+ 25 Projects</span>            

        </div>

        {/* box-03 */}
        <div className="about__box">

            {/* about-icon */}
            <i class='bx bx-support about__icon'></i>
            {/* about-title */}
            <h3 className="about__title">Support</h3>
            {/* about-subtitle */}
            <span className="about__subtitle">Online 24/7</span>            

        </div>

    </div>
  )
}

export default Information;
