import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function MobilePortfolio(props) {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="portfolio--section--container">
      {props.portfolioData?.map((item) => (
        <div key={item.id} className="portfolio--section--card">
          <Slider {...sliderSettings}>
            {item.src.map((imageSrc, index) => (
              <div key={index} className="portfolio--section--img">
                <img src={imageSrc} alt={`Image ${index}`} />
              </div>
            ))}
          </Slider>
          <div className="portfolio--section--card--content">
            <div>
              <h3 className="portfolio--section--title">{item.title}</h3>
              <p className="text-md">{item.description}</p>
            </div>
          </div>
          <div className='portfolio--section--link' >
            <a
              href={item.link}
              className="text-sm portfolio--link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View In GitHub
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}
