import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

export default function ImageSlider({item}) {
    const homepageIndex = parseInt(item.homepageindex, 10);
  const [current, setCurrent] = useState(homepageIndex);
  const length = item.src.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(item.src) || item.src.length <= 0) {
    return null;
  }

  return (
    <section>
      <FaArrowAltCircleLeft className='arrow left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='arrow right-arrow' onClick={nextSlide} />
      {item.src.map((item, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={item} alt='travel image' className='portfolio--section--mobile--image' />
            )}
          </div>
        );
      })}
    </section>
  );
};

