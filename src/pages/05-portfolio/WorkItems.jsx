import React from 'react';

const WorkItems = ({item}) => {
  return (
    /* card */
    <div className="work__card" key={item.id}>

        {/* img-card */}
        <img src={item.image} alt="projects" className="work__img" />

        {/* title-card */}
        <h3 className="work__title">{item.title}</h3>   

        {/* subtitle-card */}
        <p className="work__subtitle">{item.subtitle}</p>    

        {/* buttons-card */}
        {/* links */}
        <div className="work__links">

            {/* details-project */}
            <a 
            href="#" 
            className="work__button" 
            target="_blank"
            title="View Project">                
            <i class="uil uil-plus-circle work__button-icon"></i>
            </a>                 

            {/* more-details */}
            <a 
            href="#" 
            className="work__button" 
            target="_blank"
            title="More details">                            
            <i class="uil uil-link work__button-icon"></i>
            </a>

        </div>       

    </div>
  )
}

export default WorkItems;
