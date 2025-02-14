import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom'; // Import useNavigate
import './MenuBar.css';

const MenuBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };



  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">MINERVA</a>
      </div>
      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/services">Services</Link>
        <Link to="/products" style={{ cursor: "pointer" }}>Infrastructure</Link> {/* Redirects to new page */}
        <Link to="/client">Client</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default MenuBar;