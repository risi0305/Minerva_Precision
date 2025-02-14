import React from "react";
import "./Footer.css"; // Import styles

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>We specialize in precision mould manufacturing, delivering high-quality solutions for various industries.</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/products">Products</a></li>
            <li><a href="/Client">Clients</a></li>
            <li><a href="/awards">Awards</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>Email: <a href="mailto:minerva@gmail.com">minerva@gmail.com</a></p>
          <p>Phone: <a href="tel:+123 456 7890">+123 456 7890</a></p>
          <p>Address: 123 Industrial Zone, City, Country</p>
        </div>

        {/* Google Map Section */}
        <div className="footer-section map">
          <h3>Our Location</h3>
          <iframe 
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093646!2d144.9559283153528!3d-37.81720974202125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df0b0b0b1%3A0x5a5b5c9e7a7b7b7b!2sIndustrial+Zone!5e0!3m2!1sen!2s!4v1619822296244!5m2!1sen!2s" 
            width="100%" 
            height="200" 
            style={{ border: "0", borderRadius: "10px" }} 
            allowFullScreen="" 
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Mould Manufacturing Co. | All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
