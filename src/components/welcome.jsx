import React from 'react';
import '../css/welcome.css';
import workerImage from '../assets/image2.jpg'; 
import forkliftImage from '../assets/image3.jpg'; 

const Welcome = () => {
  return (
    <section className="welcome" id="welcome">
      <div className="container">
        <div className="image-stack">
          <div className="image-stack-inner">
            {/* Geometric shapes between images */}
            <svg className="shape-parallelogram" width="70" height="180" viewBox="0 0 70 180" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polygon points="10,0 70,0 60,180 0,180" fill="#0B5C6B" />
            </svg>
            <svg className="shape-triangle" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polygon points="0,60 60,60 60,0" fill="#FF6A2B" />
            </svg>
            <img src={forkliftImage} alt="Forklift" className="image-front" />
            <img src={workerImage} alt="Worker" className="image-back" />
            <div className="stat-tag">
              <span className="stat-number">15,350 +</span>
              <span className="stat-text">Clients Worldwide</span>
            </div>
          </div>
        </div>
        <div className="welcome-text">
          <h2>
            TransMax Logistics <br />
            <span className="highlight">Around the World</span>
          </h2>
          <p className="welcome-desc">
            Transmax is the world's driving worldwide coordinations supplier — we uphold industry and exchange the worldwide trade of merchandise through land transport.
          </p>
          <p className="welcome-desc">
            Our worth added administrations guarantee the progression of products proceeds consistently and supply chains stay lean and streamlined for progress.
          </p>
          <a href="#about" className="more-btn">MORE ABOUT US</a>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
