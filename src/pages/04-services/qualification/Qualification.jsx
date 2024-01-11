import React, { useState } from 'react';
import './qualification.css';

const Qualification = () => {
  /* =========== active-btn-qualification =========== */
  const[toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  }

  return (
    /* qualification-section */
    <section className="qualification section" id="qualification">

        {/* title-services */}
        <h1 className="section__title">Qualification</h1>
        {/* subtitle-services */}
        <span className="section__subtitle">My personal journey</span>

        {/* container */}
        <div className="qualification__container container">

            {/* button-qualification */}
            <div className="qualification__tabs">
                
                {/* experience */}
                <div 
                className={toggleState === 1 
                ? "qualification__button qualification__active" 
                : "qualification__button"}
                onClick={() => toggleTab(1)}>
                <i class="fa-solid fa-briefcase qualification__icon"></i>
                Experience
                </div>

                {/* graduation */}
                <div 
                className={toggleState === 2 
                ? "qualification__button qualification__active" 
                : "qualification__button"}
                onClick={() => toggleTab(2)}>
                <i class="fa-solid fa-graduation-cap qualification__icon"></i>
                Graduation
                </div>

            </div>

            {/* content */}
            <div className="qualification__sections">

                {/* experience */}
                <div 
                className={toggleState === 1 
                ? "qualification__content qualification__content-active" 
                : "qualification__content"}>  
                
                    {/* experience-01 */}
                    <div className="qualification__data">

                        {/* data-01 */}
                        <div>
                            {/* title */}
                            <h3 className="qualification__title">
                                Meteorologist
                            </h3>
                            {/* subtitle */}
                            <span className="qualification__subtitle">
                                INPE
                            </span>
                            {/* calender */}
                            <div className="qualification__calender">
                            <i class="uil uil-calendar-alt"></i>
                                2020 - 2022
                            </div>
                        </div>

                        {/* line */}
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                    </div>

                    {/* experience-02 */}
                    <div className="qualification__data">

                        <div></div>

                        {/* line */}
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        {/* data-02 */}
                        <div>
                            {/* title */}
                            <h3 className="qualification__title">
                                Scholarship <br />
                                holder
                            </h3>
                            {/* subtitle */}
                            <span className="qualification__subtitle">
                                CPTEC - INPE
                            </span>
                            {/* calender */}
                            <div className="qualification__calender">
                            <i class="uil uil-calendar-alt"></i>
                                2018 - 2020
                            </div>
                        </div>                       

                    </div>

                    {/* experience-03 */}
                    <div className="qualification__data">

                        {/* data-03 */}
                        <div>
                            {/* title */}
                            <h3 className="qualification__title">
                                Trainee
                            </h3>
                            {/* subtitle */}
                            <span className="qualification__subtitle">
                                UFA 
                            </span>
                            {/* calender */}
                            <div className="qualification__calender">
                            <i class="uil uil-calendar-alt"></i>
                                2017
                            </div>
                        </div>

                        {/* line */}
                        <div>
                            <span className="qualification__rounder"></span>                            
                        </div>

                    </div>                   

                </div>

                {/* graduation */}
                <div 
                className={toggleState === 2 
                ? "qualification__content qualification__content-active" 
                : "qualification__content"}>  

                    {/* education-01 */}
                    <div className="qualification__data">

                        <div></div>

                        {/* line */}
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        {/* data-01 */}
                        <div>
                            {/* title */}
                            <h3 className="qualification__title">
                                Meteorologist
                            </h3>
                            {/* subtitle */}
                            <span className="qualification__subtitle">
                                UFA
                            </span>
                            {/* calender */}
                            <div className="qualification__calender">
                            <i class="uil uil-calendar-alt"></i>
                                2014 - 2018
                            </div>
                        </div>                       

                    </div>
                
                    {/* education-02 */}
                    <div className="qualification__data">

                        {/* data-02 */}
                        <div>
                            {/* title */}
                            <h3 className="qualification__title">
                                ADS
                            </h3>
                            {/* subtitle */}
                            <span className="qualification__subtitle">
                                IMPACTA
                            </span>
                            {/* calender */}
                            <div className="qualification__calender">
                            <i class="uil uil-calendar-alt"></i>
                                2022 - present
                            </div>
                        </div>

                        {/* line */}
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                    </div>     

                    {/* education-03 */}
                    <div className="qualification__data">

                        <div></div>

                        {/* line */}
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        {/* data-03 */}
                        <div>
                            {/* title */}
                            <h3 className="qualification__title">
                                Meteorologist
                            </h3>
                            {/* subtitle */}
                            <span className="qualification__subtitle">
                                INPE
                            </span>
                            {/* calender */}
                            <div className="qualification__calender">
                                Master's degree
                            </div>
                        </div>                       

                    </div>
                
                    {/* education-04 */}
                    <div className="qualification__data">

                        {/* data-04 */}
                        <div>
                            {/* title */}
                            <h3 className="qualification__title">
                                Natural 
                                <br/>disasters
                            </h3>
                            {/* subtitle */}
                            <span className="qualification__subtitle">
                                UNESP
                            </span>
                            {/* calender */}
                            <div className="qualification__calender">
                            <i class="uil uil-calendar-alt"></i>
                                Master's degree
                            </div>
                        </div>

                        {/* line */}
                        <div>
                            <span className="qualification__rounder"></span>  
                            <span className="qualification__line"></span>                          
                        </div>

                    </div>    

                    {/* education-05 */}
                    <div className="qualification__data">

                        <div></div>

                        {/* line */}
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        {/* data-05 */}
                        <div>
                            {/* title */}
                            <h3 className="qualification__title">
                                Big Data
                                <br/>& Data Science
                            </h3>
                            {/* subtitle */}
                            <span className="qualification__subtitle">
                                INPACTA
                            </span>
                            {/* calender */}
                            <div className="qualification__calender">
                                MBA
                            </div>
                        </div>                       

                    </div>          

                    {/* education-06 */}
                    <div className="qualification__data">

                        {/* data-06 */}
                        <div>
                            {/* title */}
                            <h3 className="qualification__title">
                                Systems modeling
                            </h3>
                            {/* subtitle */}
                            <span className="qualification__subtitle">
                                UFMG
                            </span>
                            {/* calender */}
                            <div className="qualification__calender">
                            <i class="uil uil-calendar-alt"></i>
                                Doctorate degree
                            </div>
                        </div>

                        {/* line */}
                        <div>
                            <span className="qualification__rounder"></span>                        
                        </div>

                    </div>      
                                    

                </div>

            </div>

        </div>

    </section>
  )
}

export default Qualification;
