import React from 'react';
import '../pages/Services.css';

const Services = () => {
  const services = [
    {
      title: "Custom Machinery Design",
      description: "We design and manufacture custom machinery tailored to your business needs.",
      image: "/images/custommachine.jpg"
    },
    {
      title: "Automation & Robotics",
      description: "Integrating AI-driven automation to enhance efficiency and reduce manual work.",
      image: "/images/automation.jpg"
    },
    {
      title: "Machine Maintenance",
      description: "Comprehensive maintenance services to keep your machines running smoothly.",
      image: "/images/maintenance.jpg"
    },
    {
      title: "Consulting & Training",
      description: "We provide expert consulting and hands-on training for industrial solutions.",
      image: "/images/training.jpg"
    }
  ];

  return (
    <div className="services">
        <div className="title">
        <h1>Our Services</h1>
        <p>We offer a range of high-quality services designed to meet the needs of modern industries.</p>
        </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.image} alt={service.title} className="service-image"/>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
