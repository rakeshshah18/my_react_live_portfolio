import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: "Person name",
    review:
      "clients reviews are here.  lets here i am taking review of twenty words. client can say his/her openions on my project in review section. clients reviews are here.  lets here i am taking review of twenty words. client can say his/her openions on my project in review section",
  },
  {
    avatar: AVTR2,
    name: "Person name",
    review:
      "clients reviews are here.  lets here i am taking review of twenty words. client can say his/her openions on my project in review section. clients reviews are here.  lets here i am taking review of twenty words. client can say his/her openions on my project in review section",
  },
  {
    avatar: AVTR3,
    name: "Person name",
    review:
      "clients reviews are here.  lets here i am taking review of twenty words. client can say his/her openions on my project in review section. clients reviews are here.  lets here i am taking review of twenty words. client can say his/her openions on my project in review section",
  },
  {
    avatar: AVTR4,
    name: "Person name",
    review:
      "clients reviews are here.  lets here i am taking review of twenty words. client can say his/her openions on my project in review section. clients reviews are here.  lets here i am taking review of twenty words. client can say his/her openions on my project in review section",
  }
  
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonial__container"
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar one" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">
                {review}
              </small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
