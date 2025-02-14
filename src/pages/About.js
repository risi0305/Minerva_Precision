import React from 'react';
import '../pages/About.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <h1>About Our Company</h1>
      <p>We are a leading industrial manufacturing company specializing in high-precision machinery and automation.</p>
      
      <div className="about-section">
        <img src="/images/building.jpg" alt="Company Building" className="about-image"/>
        <div className="about-text">
          <h2>Our Mission</h2>
          <p>
            Our mission is to revolutionize industrial manufacturing by providing cutting-edge machinery 
            that enhances efficiency, precision, and sustainability.
          </p>
        </div>
      </div>

      <div className="about-section reverse">
        <div className="about-text">
          <h2>Our Vision</h2>
          <p>
            We envision a future where technology-driven solutions empower businesses to maximize 
            productivity while minimizing environmental impact.
          </p>
        </div>
        <img src="/images/innovation.jpg" alt="Innovation" className="about-image"/>
      </div>

      <div className="about-section">
        <img src="/images/teamwork.jpg" alt="Teamwork" className="about-image"/>
        <div className="about-text">
          <h2>Our Team</h2>
          <p>
            Our team consists of experienced engineers, designers, and professionals who are dedicated 
            to delivering the highest quality products and services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
