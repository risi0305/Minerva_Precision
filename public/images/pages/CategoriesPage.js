import React from "react";
import { Link } from "react-router-dom";
import "./CategoriesPage.css"; // Ensure this file exists for styling

const categories = [
  { id: 1, image: "/images/products.png", title: "Products", link: "/products" },
  { id: 2, image: "/images/clients.png", title: "Clients", link: "/clients" },
  { id: 3, image: "/images/awards.png", title: "Awards", link: "/awards" },
];

function CategoriesPage() {
  return (
    <fieldset className="categories-fieldset">
      <legend>Explore More</legend>
      <div className="categories-container">
        {categories.map((category) => (
          <Link key={category.id} to={category.link} className="category-item">
            <img src={category.image} alt={category.title} />
            <p>{category.title}</p>
          </Link>
        ))}
      </div>
    </fieldset>
  );
}

export default CategoriesPage;
