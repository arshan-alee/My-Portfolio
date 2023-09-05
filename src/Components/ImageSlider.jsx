import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

export default function ImageSlider({item}) {
    return(
    <div className="swiper--container">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {item.src.map((item, index) => (
        <SwiperSlide>
          <img src={item} alt="slide_image" className='portfolio--section--mobile--image' />
        </SwiperSlide>))}
        
      </Swiper>
    </div>
  );
};

