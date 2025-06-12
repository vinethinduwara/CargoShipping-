import React from 'react';
import '../css/stats.css';

const stats = [
  { value: '890', label1: 'Delivered', label2: 'packages' },
  { value: '137', label1: 'Countries', label2: 'covered' },
  { value: '740', label1: 'Tons of', label2: 'Goods' },
  { value: '600', label1: 'Satisfied', label2: 'Clients' },
];

const Stats = () => (
  <section className="stats-section">
    <div className="stats-container">
      {stats.map((stat, idx) => (
        <div className="stat-item" key={idx}>
          <span className="stat-bg">{stat.value}</span>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
            <span className="stat-value">{stat.value}</span>
            <span className="stat-label" style={{ display: 'flex', flexDirection: 'column', marginLeft: 8 }}>
              <span>{stat.label1}</span>
              <span>{stat.label2}</span>
            </span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Stats; 