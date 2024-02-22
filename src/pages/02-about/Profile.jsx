import React from 'react';

const Profile = () => {
  return (
    /* about-profile */
    <div className="about__profile">

        {/* profile-img */}        
        <div className="profile__img"></div>       

        <div className="profile__info">

            {/* about-name */}
            <h1>Nelson A. Mateus</h1>
            {/* about-data */}
            <p>
            {/* meteorologist */}
            <i class="fa-solid fa-cloud-sun profile__info-icon"></i>
            Meteorologist   
            <br/>            
            {/* system-analyst */}
            <i class="fa-solid fa-chart-pie profile__info-icon"></i>
            System analyst
            <br/>
            {/* data-scientist */}
            <i class="fa-solid fa-database profile__info-icon"></i>
            Data Scientist
            <br/>
            {/* development */}
            <i class="fa-solid fa-laptop-code profile__info-icon"></i>
            Developer
            <br/>            

            </p>            

            {/* links */}
            <div className="about__links">         

                {/* curriculum-lattes */}
                <a 
                href="http://lattes.cnpq.br/3314750138625972" 
                className="about__link" 
                target="_blank"
                title="Curriculum Lattes">
                    Curriculum Lattes
                <i class="fa-solid fa-arrow-up-right-from-square about__link-icon"></i>
                </a>

            </div>           
            
        </div>

    </div>
  )
}

export default Profile;
