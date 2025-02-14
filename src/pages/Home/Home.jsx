import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <img src="/images/company-banner.jpg" alt="Company Banner" className="hero-image" />
      </section>

      {/* Clickable Image Grid Section */}
      <section className="image-grid">
        <Link to="/advanced-machinery" className="image-card">
          <img src="/images/machine.jpg" alt="Advanced Machinery" />
          <p>Advanced Machinery</p>
        </Link>
        <Link to="/about" className="image-card">
          <img src="/images/factory.jpg" alt="Our Factory" />
          <p>State-of-the-Art Facility</p>
        </Link>
        <Link to="/categories" className="image-card">
          <img src="/images/team.jpg" alt="Expert Team" />
          <p>Expert Engineering Team</p>
        </Link>
      </section>

      {/* Navigation Buttons */}
      <center>
        <nav className="main-buttons">
          <Link to="/about"><button>About Us</button></Link>
          <Link to="/products"><button>View Products</button></Link>
          <Link to="/categories"><button>Explore More</button></Link>
        </nav>
      </center>
    </div>
  );
};

export default Home;