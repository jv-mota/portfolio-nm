import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

const Contact = () => {
    
    /* email-js */
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ejzm0v9', 'template_h9fdp8j', form.current, 'HvbQMTifeveF8_Trq')
      e.target.reset()
  };

  return (
    /* contact-section */
    <section className="contact section" id="contact">

        {/* title-contact */}
        <h1 className="section__title">Contact Me</h1>
        {/* subtitle-contact */}
        <span className="section__subtitle">Get in touch</span>

        {/* container */}
        <div className="contact__container container grid">

            {/* content-01 */}
            <div className="contact__content">
                {/* title-contact */}
                <h3 className="contact__title">Talk to me</h3>

                {/* contact-info */}
                <div className="contact__info">

                    {/* card-01 EMAIL */}
                    <div className="contact__card">
                        
                        {/* icon */}
                        <i className="bx bx-mail-send contact__card-icon"></i>
                        {/* title */}
                        <h3 className="contact__card-title">E-mail</h3>
                        {/* data */}
                        <span className="contact__card-data">nelson.mateus.pa@gmail.com</span>
                        {/* card-button */}
                        <a 
                        href="mailto:nelson.mateus.pa@gmail.com" 
                        className="contact__button">
                            Write me
                            <i class="fa-solid fa-arrow-right contact__button-icon"></i>
                        </a>

                    </div>

                    {/* card-02 WHATSAPP */}
                    <div className="contact__card">
                        
                        {/* icon */}
                        <i className="bx bxl-whatsapp contact__card-icon"></i>
                        {/* title */}
                        <h3 className="contact__card-title">Whatsapp</h3>
                        {/* data */}
                        <span className="contact__card-data">+55 (12) 99719-3405</span>
                        {/* card-button */}
                        <a 
                        href="https://wa.me/5512997193405" 
                        target="_blank"
                        className="contact__button">
                            Write me
                            <i class="fa-solid fa-arrow-right contact__button-icon"></i>
                        </a>

                    </div>

                    {/* card-03 FACEBOOK */}
                    <div className="contact__card">
                        
                        {/* icon */}
                        <i className="bx bxl-messenger contact__card-icon"></i>
                        {/* title */}
                        <h3 className="contact__card-title">Messenger</h3>
                        {/* data */}
                        <span className="contact__card-data">user.fb123</span>
                        {/* card-button */}
                        <a 
                        href="#" 
                        className="contact__button">
                            Write me
                            <i class="fa-solid fa-arrow-right contact__button-icon"></i>
                        </a>

                    </div>

                </div>

            </div>

            {/* content-02 */}
            <div className="contact__content">
                {/* title-contact */}
                <h3 className="contact__title">Write me your project</h3>

                {/* form */}
                <form
                ref={form} onSubmit={sendEmail}
                className="contact__form">

                    {/* name */}
                    <div className="contact__form-div">
                        <label className="contact__form-tag">Name</label>
                        <input 
                        type="text" 
                        name="name" 
                        className="contact__form-input" 
                        placeholder="Insert your name" />
                    </div>

                    {/* email */}
                    <div className="contact__form-div">
                        <label className="contact__form-tag">E-mail</label>
                        <input 
                        type="email" 
                        name="email" 
                        className="contact__form-input" 
                        placeholder="Insert your e-mail" />
                    </div>

                    {/* project */}
                    <div className="contact__form-div contact__form-area">
                        <label className="contact__form-tag">Project</label>
                        <textarea 
                        name="project" 
                        cols="30" 
                        rows="10"
                        className="contact__form-input"
                        placeholder="Write your message">                            
                        </textarea>
                    </div>

                    {/* button-send */}
                    <button 
                    className="button__send">
                        Send Message
                    <i class="fa-solid fa-paper-plane button__send-icon"></i>
                    </button>

                </form>

            </div>            

        </div>

        {/* contact-waves */}
        <svg className="contact__waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none">
            <defs>
            <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352" />
            </defs>
            <g className="wave1">
            <use xlinkHref="#wave-path" x="50" y="3" fill="rgba(148,148,148, .1)" />
            </g>
            <g className="wave2">
            <use xlinkHref="#wave-path" x="50" y="0" fill="rgba(138,138,138, .2)" />
            </g>
            <g className="wave3">
            <use xlinkHref="#wave-path" x="50" y="2" fill="#000000" />
            </g>
        </svg>

    </section>
  )
}

export default Contact;
