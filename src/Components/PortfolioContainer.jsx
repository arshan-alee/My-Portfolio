import React from 'react'

export default function PortfolioContainer(props) {
  return (
    <div className="portfolio--section--container">
      {props.portfolioData?.map((item, index) => (
        <div key={index} className="portfolio--section--card">
          <div className="portfolio--section--img">
            <img src={item.src} alt="Placeholder" />
          </div>
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