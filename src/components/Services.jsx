import React from 'react';
import '../css/services.css';
import shipImg from '../assets/image2.jpg'; // Placeholder, replace with your image
import planeImg from '../assets/image3.jpg'; // Placeholder, replace with your image

const Services = () => {
  return (
    <section className="services-section">
      <div className="services-header">
        <span className="services-subtitle">Real Solution ,Real Fast !</span>
        <h2 className="services-title">Best Global Logistics Solutions.</h2>
      </div>
      <div className="services-cards">
        <div className="service-card">
          <div className="service-image-wrap">
            <img src={shipImg} alt="Air Freight Services" className="service-image" />
            <div className="service-icon-bg">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="18" cy="18" r="18" fill="#7ac142" />
                <g>
                  <rect x="10" y="22" width="16" height="2" rx="1" fill="#fff" />
                  <rect x="14" y="12" width="8" height="8" rx="2" fill="#fff" />
                </g>
              </svg>
            </div>
          </div>
          <div className="service-content">
            <h3 className="service-name">Air Freight Services</h3>
            <p className="service-desc">At our Auto Service garage, we are fully appreciate how difficult occur it is for people to find.</p>
            <a href="#" className="service-link"><span className="service-link-arrow">&#8594;</span> <b>Read More</b></a>
          </div>
        </div>
        <div className="service-card">
          <div className="service-image-wrap">
            <img src={planeImg} alt="Drone Services" className="service-image" />
            <div className="service-icon-bg">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="18" cy="18" r="18" fill="#7ac142" />
                <g>
                  <rect x="10" y="22" width="16" height="2" rx="1" fill="#fff" />
                  <rect x="14" y="12" width="8" height="8" rx="2" fill="#fff" />
                </g>
              </svg>
            </div>
          </div>
          <div className="service-content">
            <h3 className="service-name">Drone Services</h3>
            <p className="service-desc">These are unique and often they differ from one industry to the other. Our logistics expertise.</p>
            <a href="#" className="service-link"><span className="service-link-arrow">&#8594;</span> <b>Read More</b></a>
          </div>
        </div>
      </div>
      <div className="services-bottom-bar">
        Logistic &amp; Transport Solutions Saves Your Time. <b>Finds Your Solutions</b>
        <span className="service-bottom-arrow">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="9" stroke="#222" strokeWidth="2" fill="none" />
            <path d="M7 10h6m0 0l-2-2m2 2l-2 2" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </div>
    </section>
  );
};

export default Services; 