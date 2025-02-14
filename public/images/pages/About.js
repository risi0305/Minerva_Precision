import React from "react";
import "./About.css"; // Import the stylesheet

function About() {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Us</h1>
        <p>Delivering Excellence in Precision Mould Manufacturing</p>
      </div>
      
      <div className="about-content">
        <section className="about-section">
          <h2>Who We Are</h2>
          <p>
            Mould Manufacturing Co. is a leader in the design and production of high-precision moulds. 
            With years of experience in the industry, we provide innovative and reliable solutions for 
            automotive, industrial, and consumer product applications.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to deliver top-tier moulding solutions with uncompromising quality, 
            using state-of-the-art technology and expertise to meet our clients' expectations.
          </p>
        </section>

        <section className="about-section">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>✔ High Precision & Quality Assurance</li>
            <li>✔ Advanced Manufacturing Technology</li>
            <li>✔ Experienced & Skilled Team</li>
            <li>✔ Custom Solutions for Various Industries</li>
            <li>✔ Customer Satisfaction as Our Top Priority</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default About;
