import React from 'react';
import './testimonials.css';
import { Data } from './Data';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

const Testimonials = () => {
  return (
    /* testimonials-section */
    <section className="testimonials section" id="testimonials">

        {/* title-testimonials */}
        <h1 className="section__title">My clients say</h1>
        {/* subtitle-testimonials */}
        <span className="section__subtitle">Testimonials</span>

        {/* content */}
        <Swiper className="testimonials__container container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,            
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },          
        }}
        modules={[Pagination]}
        >

            {Data.map(({id, image, name, description}) => {
                return (

                    /* testimonials-card */
                    <SwiperSlide className="testimonials__card" key={id}>

                        {/* testimonials-img */}
                        <img src={image} alt="" className="testimonials__img" />

                        {/* testimonials-name */}
                        <h3 className="testimonials__name">{name}</h3>

                        {/* testimonials-description */}
                        <p className="testimonials__description">{description}</p>

                    </SwiperSlide>
                )
            })}

        </Swiper>

    </section>
  )
}

export default Testimonials;
