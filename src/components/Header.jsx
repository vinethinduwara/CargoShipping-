import React from 'react';
import '../css/Header.css';

const Header = () => {
  return (
    <header className="main-header absolute-header">
      <div className="header-container">
        <div className="logo-area">
          <svg className="logo-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="16" fill="#ffcc00" />
            <rect x="12" y="8" width="8" height="16" fill="#fff" />
          </svg>
          <div className="logo-text">Cargo<span className="logo-yellow">TON</span></div>
        </div>
        <nav className="nav-links">
          <a href="#" className="active">Home <span className="nav-arrow">▼</span></a>
          <a href="#">Pages <span className="nav-arrow">▼</span></a>
          <a href="#">Tracking</a>
          <a href="#">Services <span className="nav-arrow">▼</span></a>
          <a href="#">Blog <span className="nav-arrow">▼</span></a>
        </nav>
        <div className="header-buttons">
          <button className="quote-btn">GET A QUOTE</button>
          <button className="sign-btn">SIGN IN</button>
        </div>
        <div className="vertical-text">#CARGOTON LOGISTIC</div>
      </div>
    </header>
  );
};

export default Header;
