import React from 'react';
import './HeroSection.css'; // Add CSS for styling

const HeroSection = () => (
  <section className="hero">
    <img src="/assets/cover.jpg" alt="Cover" className="cover-image" />
    <div className="hero-content">
      <h1>Hi, I'm Kiran</h1>
      <p>Welcome to my portfolio. I'm a software engineer with a passion for coding and design.</p>
    </div>
  </section>
);

export default HeroSection;
