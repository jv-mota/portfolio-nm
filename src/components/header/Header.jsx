import React, { useState } from 'react';
import './header.css';
import Logotipo from '../../assets/logotipo.png';

const Header = () => {
    /* =========== change background header =========== */
    window.addEventListener("scroll", function() {
        const header = document.querySelector(".header");
        // when the scroll is higher than 200 viewport height, add the scroll-header class to a tag with the header tag
        if (this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    });
    
    /* =========== toggle-menu =========== */
    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");

  return (
    /* header */
    <header className="header">

        {/* container */}
        <nav className="nav container">

            {/* logotipo */}
            <a 
            href="#home" 
            className="nav__logo">
                <img src={ Logotipo } alt="Logotipo" />
            </a>

            {/* navigation */}
            <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>

                {/* menu-links */}
                <ul className="nav__list grid">

                    {/* home */}
                    <li className="nav__item">
                        <a 
                        href="#home" 
                        onClick={() => setActiveNav("#home")}
                        className={activeNav === "#home" 
                        ? "nav__link active-link" 
                        : "nav__link"}>
                        <i class="fa-solid fa-house nav__icon"></i>
                            Home
                        </a>
                    </li>

                    {/* about */}
                    <li className="nav__item">
                        <a 
                        href="#about"
                        onClick={() => setActiveNav("#about")}
                        className={activeNav === "#about" 
                        ? "nav__link active-link" 
                        : "nav__link"}>
                        <i class="fa-solid fa-user nav__icon"></i>
                            About
                        </a>
                    </li>

                    {/* skills */}
                    <li className="nav__item">
                        <a 
                        href="#skills" 
                        onClick={() => setActiveNav("#skills")}
                        className={activeNav === "#skills" 
                        ? "nav__link active-link" 
                        : "nav__link"}>
                        <i class="fa-solid fa-code nav__icon"></i>
                            Skills
                        </a>
                    </li>

                    {/* services */}
                    <li className="nav__item">
                        <a 
                        href="#services" 
                        onClick={() => setActiveNav("#services")}
                        className={activeNav === "#services" 
                        ? "nav__link active-link" 
                        : "nav__link"}>
                        <i class="fa-solid fa-briefcase nav__icon"></i>
                            Services
                        </a>
                    </li>

                    {/* portfolio */}
                    <li className="nav__item">
                        <a 
                        href="#portfolio" 
                        onClick={() => setActiveNav("#portfolio")}
                        className={activeNav === "#portfolio" 
                        ? "nav__link active-link" 
                        : "nav__link"}>
                        <i class="fa-solid fa-layer-group nav__icon"></i>
                            Portfolio              
                        </a>
                    </li>

                    {/* statistics */}
                    <li className="nav__item">
                        <a 
                        href="#statistics" 
                        onClick={() => setActiveNav("#statistics")}
                        className={activeNav === "#statistics" 
                        ? "nav__link active-link" 
                        : "nav__link"}>
                        <i class="fa-solid fa-arrow-trend-up nav__icon"></i>
                            Statistics           
                        </a>
                    </li>

                    {/* contact */}
                    <li className="nav__item">
                        <a 
                        href="#contact" 
                        onClick={() => setActiveNav("#contact")}
                        className={activeNav === "#contact" 
                        ? "nav__link active-link" 
                        : "nav__link"}>
                        <i class="fa-solid fa-phone nav__icon"></i>
                            Contact        
                        </a>
                    </li>
                
                </ul>         

                {/* nav-close */}
                <i class="fa-regular fa-circle-xmark nav__close"
                onClick={() => showMenu(!Toggle)}></i>

            </div>

            {/* nav-toggle */}
            <div className="nav__toggle" 
            onClick={() => showMenu(!Toggle)}>
                <i class="fa-solid fa-bars-progress"></i>
            </div>

        </nav>     

    </header>
  )
}

export default Header;
