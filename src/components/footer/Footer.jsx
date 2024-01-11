import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    /* footer-section */
    <footer className="footer">

        {/* container */}
        <div className="footer__container container">

            {/* title-footer */}
            <h1 className="footer__title">
                My Portfolio
            </h1>
            {/* subtitle-footer */}
            <span className="footer__subtitle">
                For additional information about my work, follow me:
            </span>

            {/* social-media */}
            <div className="footer__social">

                {/* facebook */}
                <a 
                href="https://www.facebook.com" 
                className="footer__social-icon"
                target="_blank">
                <i class="fa-brands fa-facebook-f"></i>
                </a>

                {/* instagram */}
                <a 
                href="https://www.instagram.com" 
                className="footer__social-icon"
                target="_blank">
                <i class="uil uil-instagram"></i>
                </a>

                {/* x-twitter */}
                <a 
                href="https://twitter.com" 
                className="footer__social-icon"
                target="_blank">
                <i class="fa-brands fa-x-twitter"></i>
                </a>

                {/* github */}
                <a 
                href="https://github.com" 
                className="footer__social-icon"
                target="_blank">
                <i class="uil uil-github-alt"></i>
                </a>

                {/* linkedin */}
                <a 
                href="https://www.linkedin.com" 
                className="footer__social-icon"
                target="_blank">
                <i class="fa-brands fa-linkedin-in"></i>
                </a>

                {/* youtube */}
                <a 
                href="https://www.youtube.com" 
                className="footer__social-icon"
                target="_blank">
                <i class="fa-solid fa-circle-play"></i>
                </a>
                
            </div>

            {/* copyright */}
            <span className="footer__copy">
                &#169; Portfolio - Nelson A. Mateus 2024. All rights reserved.  
            </span>

        </div>

    </footer>
  )
}

export default Footer;
