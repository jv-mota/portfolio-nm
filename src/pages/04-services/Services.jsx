import React, { useState } from 'react';
import './services.css';
import Qualification from './qualification/Qualification';

const Services = () => {
  /* =========== active-modal =========== */
  const[toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  }

  return (   
    /* services-section */
    <section className="services section" id="services">

        {/* title-services */}
        <h1 className="section__title">Services</h1>
        {/* subtitle-services */}
        <span className="section__subtitle">What I offer</span>

        {/* container */}
        <div className="services__container container grid">

          {/* content-01 */}
          <div className="services__content">

            {/* title-services */}
            <div>
              <i class="uil uil-cloud-check services__icon"></i>
              <h3 className="services__title">Meteorologist</h3>
            </div>

            {/* button-services */}
            <span 
            className="services__button"
            onClick={() => toggleTab(1)}>
              View more
            <i class="fa-solid fa-arrow-right services__button-icon"></i>
            </span>

            {/* services-modal */}
            <div 
            className={toggleState === 1 
            ? "services__modal active-modal" 
            : "services__modal"}>
              {/* content */}
              <div className="services__modal-content">

                {/* button-close */}
                <i 
                onClick={() => toggleTab(0)}
                class="fa-solid fa-xmark services__modal-close"></i>

                {/* title-modal */}
                <h3 className="services__modal-title">Meteorologist</h3>

                {/* description-modal */}
                <p className="services__modal-description">
                  Services with more than 3 years of experience. Providing 
                  quality work to clients and companies.
                </p>

                {/* list-modal */}
                <ul className="services__modal-services grid">

                  {/* check-01 */}
                  <li className="services__modal-service">  
                    {/* check-icon */}
                    <i class="fa-solid fa-check-double services__modal-icon"></i>
                    {/* content-list */}
                    <p className="services__modal-info">
                      I develop the user interface.
                    </p>
                  </li>

                  {/* check-02 */}
                  <li className="services__modal-service">  
                    {/* check-icon */}
                    <i class="fa-solid fa-check-double services__modal-icon"></i>
                    {/* content-list */}
                    <p className="services__modal-info">
                      Web page development.
                    </p>
                  </li>

                  {/* check-03 */}
                  <li className="services__modal-service">  
                    {/* check-icon */}
                    <i class="fa-solid fa-check-double services__modal-icon"></i>
                    {/* content-list */}
                    <p className="services__modal-info">
                      I create ux element interactions.
                    </p>
                  </li>

                  {/* check-04 */}
                  <li className="services__modal-service">  
                    {/* check-icon */}
                    <i class="fa-solid fa-check-double services__modal-icon"></i>
                    {/* content-list */}
                    <p className="services__modal-info">
                      I position your company brand.
                    </p>
                  </li>

                  {/* check-05 */}
                  <li className="services__modal-service">  
                    {/* check-icon */}
                    <i class="fa-solid fa-check-double services__modal-icon"></i>
                    {/* content-list */}
                    <p className="services__modal-info">
                      I create design and mockups.
                    </p>
                  </li>

                </ul>

              </div>

            </div>

          </div>

          {/* content-02 */}
          <div className="services__content">

            {/* title-services */}
            <div>
              <i class="uil uil-arrow-growth services__icon"></i>
              <h3 className="services__title">System analyst</h3>
            </div>

            {/* button-services */}
            <span 
            className="services__button"
            onClick={() => toggleTab(2)}>
              View more
            <i class="fa-solid fa-arrow-right services__button-icon"></i>
            </span>

            {/* services-modal */}
            <div 
            className={toggleState === 2 
            ? "services__modal active-modal" 
            : "services__modal"}>
              {/* content */}
              <div className="services__modal-content">

                {/* button-close */}
                <i 
                onClick={() => toggleTab(0)}
                class="fa-solid fa-xmark services__modal-close"></i>

                {/* title-modal */}
                <h3 className="services__modal-title">System analyst</h3>

                {/* description-modal */}
                <p className="services__modal-description">
                  Services with more than 3 years of experience. Providing 
                  quality work to clients and companies.
                </p>

                {/* list-modal */}
                <ul className="services__modal-services grid">

                  {/* check-01 */}
                  <li className="services__modal-service">  
                    {/* check-icon */}
                    <i class="fa-solid fa-check-double services__modal-icon"></i>
                    {/* content-list */}
                    <p className="services__modal-info">
                      I develop the user interface.
                    </p>
                  </li>

                  {/* check-02 */}
                  <li className="services__modal-service">  
                    {/* check-icon */}
                    <i class="fa-solid fa-check-double services__modal-icon"></i>
                    {/* content-list */}
                    <p className="services__modal-info">
                      Web page development.
                    </p>
                  </li>

                  {/* check-03 */}
                  <li className="services__modal-service">  
                    {/* check-icon */}
                    <i class="fa-solid fa-check-double services__modal-icon"></i>
                    {/* content-list */}
                    <p className="services__modal-info">
                      I create ux element interactions.
                    </p>
                  </li>

                  {/* check-04 */}
                  <li className="services__modal-service">  
                    {/* check-icon */}
                    <i class="fa-solid fa-check-double services__modal-icon"></i>
                    {/* content-list */}
                    <p className="services__modal-info">
                      I position your company brand.
                    </p>
                  </li>

                  {/* check-05 */}
                  <li className="services__modal-service">  
                    {/* check-icon */}
                    <i class="fa-solid fa-check-double services__modal-icon"></i>
                    {/* content-list */}
                    <p className="services__modal-info">
                      I create design and mockups.
                    </p>
                  </li>

                </ul>

              </div>

            </div>

          </div>

          {/* content-03 */}
          <div className="services__content">

            {/* title-services */}
            <div>
              <i class="uil uil-database services__icon"></i>
              <h3 className="services__title">Data Scientist</h3>
            </div>

            {/* button-services */}
            <span 
            className="services__button"
            onClick={() => toggleTab(3)}>
              View more
            <i class="fa-solid fa-arrow-right services__button-icon"></i>
            </span>

            {/* services-modal */}
            <div 
            className={toggleState === 3 
            ? "services__modal active-modal" 
            : "services__modal"}>
              {/* content */}
              <div className="services__modal-content">

                {/* button-close */}
                <i 
                onClick={() => toggleTab(0)}
                class="fa-solid fa-xmark services__modal-close"></i>

                {/* title-modal */}
                <h3 className="services__modal-title">Data Scientist</h3>

                {/* description-modal */}
                <p className="services__modal-description">
                  Services with more than 3 years of experience. Providing 
                  quality work to clients and companies.
                </p>

                {/* list-modal */}
                <ul className="services__modal-services grid">

                  {/* check-01 */}
                  <li className="services__modal-service">  
                    {/* check-icon */}
                    <i class="fa-solid fa-check-double services__modal-icon"></i>
                    {/* content-list */}
                    <p className="services__modal-info">
                      I develop the user interface.
                    </p>
                  </li>

                  {/* check-02 */}
                  <li className="services__modal-service">  
                    {/* check-icon */}
                    <i class="fa-solid fa-check-double services__modal-icon"></i>
                    {/* content-list */}
                    <p className="services__modal-info">
                      Web page development.
                    </p>
                  </li>

                  {/* check-03 */}
                  <li className="services__modal-service">  
                    {/* check-icon */}
                    <i class="fa-solid fa-check-double services__modal-icon"></i>
                    {/* content-list */}
                    <p className="services__modal-info">
                      I create ux element interactions.
                    </p>
                  </li>

                  {/* check-04 */}
                  <li className="services__modal-service">  
                    {/* check-icon */}
                    <i class="fa-solid fa-check-double services__modal-icon"></i>
                    {/* content-list */}
                    <p className="services__modal-info">
                      I position your company brand.
                    </p>
                  </li>

                  {/* check-05 */}
                  <li className="services__modal-service">  
                    {/* check-icon */}
                    <i class="fa-solid fa-check-double services__modal-icon"></i>
                    {/* content-list */}
                    <p className="services__modal-info">
                      I create design and mockups.
                    </p>
                  </li>

                </ul>

              </div>

            </div>

          </div>

          {/* content-04 */}
          <div className="services__content">

            {/* title-services */}
            <div>
              <i class="uil uil-arrow services__icon"></i>
              <h3 className="services__title">Developer</h3>
            </div>

            {/* button-services */}
            <span 
            onClick={() => toggleTab(4)}
            className="services__button">
              View more
            <i class="fa-solid fa-arrow-right services__button-icon"></i>
            </span>

            {/* services-modal */}
            <div 
            className={toggleState === 4 
            ? "services__modal active-modal" 
            : "services__modal"}>
              {/* content */}
              <div className="services__modal-content">

                {/* button-close */}
                <i 
                onClick={() => toggleTab(0)}
                class="fa-solid fa-xmark services__modal-close"></i>

                {/* title-modal */}
                <h3 className="services__modal-title">Developer</h3>

                {/* description-modal */}
                <p className="services__modal-description">
                  Services with more than 3 years of experience. Providing 
                  quality work to clients and companies.
                </p>

                {/* list-modal */}
                <ul className="services__modal-services grid">

                  {/* check-01 */}
                  <li className="services__modal-service">  
                    {/* check-icon */}
                    <i class="fa-solid fa-check-double services__modal-icon"></i>
                    {/* content-list */}
                    <p className="services__modal-info">
                      I develop the user interface.
                    </p>
                  </li>

                  {/* check-02 */}
                  <li className="services__modal-service">  
                    {/* check-icon */}
                    <i class="fa-solid fa-check-double services__modal-icon"></i>
                    {/* content-list */}
                    <p className="services__modal-info">
                      Web page development.
                    </p>
                  </li>

                  {/* check-03 */}
                  <li className="services__modal-service">  
                    {/* check-icon */}
                    <i class="fa-solid fa-check-double services__modal-icon"></i>
                    {/* content-list */}
                    <p className="services__modal-info">
                      I create ux element interactions.
                    </p>
                  </li>

                  {/* check-04 */}
                  <li className="services__modal-service">  
                    {/* check-icon */}
                    <i class="fa-solid fa-check-double services__modal-icon"></i>
                    {/* content-list */}
                    <p className="services__modal-info">
                      I position your company brand.
                    </p>
                  </li>

                  {/* check-05 */}
                  <li className="services__modal-service">  
                    {/* check-icon */}
                    <i class="fa-solid fa-check-double services__modal-icon"></i>
                    {/* content-list */}
                    <p className="services__modal-info">
                      I create design and mockups.
                    </p>
                  </li>

                </ul>

              </div>

            </div>

          </div>

        </div>

        {/* qualification */}
        <Qualification />

    </section>
  )
}

export default Services;
