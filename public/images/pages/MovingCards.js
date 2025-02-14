import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./MovingCards.css"; // Import styles

const cards = [
  { id: 1, image: "/images/mould1.jpg", title: "High Precision Moulds" },
  { id: 2, image: "/images/mould2.jpg", title: "Automotive Parts Moulding" },
  { id: 3, image: "/images/mould3.jpg", title: "Custom Mould Solutions" },
];

const categories = [
  { id: 1, image: "/images/products.png", title: "Products", link: "/products" },
  { id: 2, image: "/images/clients.png", title: "Clients", link: "/clients" },
  { id: 3, image: "/images/awards.png", title: "Awards", link: "/awards" },
];

function MovingCards() {
  return (
    <fieldset className="products-fieldset">
      <legend>Products</legend>
      <div className="cards-container">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            className="card"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src={card.image} alt={card.title} />
            <h3>{card.title}</h3>
          </motion.div>
        ))}
      </div>

      {/* Circular Clickable Section */}
      <div className="categories-container">
        <h2>Explore More</h2>
        <div className="categories-grid">
          {categories.map((category) => (
            <Link key={category.id} to={category.link} className="category-item">
              <img src={category.image} alt={category.title} />
              <p>{category.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </fieldset>
  );
}

export default MovingCards;
