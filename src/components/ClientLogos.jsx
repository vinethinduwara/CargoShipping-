import React from 'react';
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';
import logo4 from '../assets/logo4.png';
import logo5 from '../assets/logo5.png';
import '../css/client-logos.css';

const ClientLogos = () => (
  <section className="client-logos-section">
    <div className="client-logos-container">
      <img src={logo1} alt="Client 1" className="client-logo" />
      <img src={logo2} alt="Client 2" className="client-logo" />
      <img src={logo3} alt="Client 3" className="client-logo" />
      <img src={logo4} alt="Client 4" className="client-logo" />
      <img src={logo5} alt="Client 5" className="client-logo" />
    </div>
  </section>
);

export default ClientLogos; 