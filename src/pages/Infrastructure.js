import React from "react";
import "./Infrastructure.css";

const productsData = [
  {
    category: "Vertical Machining Centers (VMC)",
    products: [
      {
        name: "Makino S56 (MP/VMC/001 & MP/VMC/005)",
        description:
          "High-precision vertical machining center with a 20,000 rpm spindle, ideal for mold manufacturing.",
        imgSrc: "images/Makino S56.png",
      },
      {
        name: "Makino F3 (MP/VMC/002)",
        description:
          "Outstanding accuracy and rigidity, featuring a 29.5 kW spindle motor for intricate milling operations.",
        imgSrc:"images/Makino F3.png", 
      },
      {
        name: "Haas VM2 (MP/VMC/003)",
        description:
          "Versatile VMC with an extended work area and high-speed spindle, ideal for precision milling.",
        imgSrc: "images/VMC Haas.png",
      },
      {
        name: "BFW BMV51 (MP/VMC/004)",
        description:
          "A robust machining solution with a 6,000 rpm spindle, perfect for medium-to-large component manufacturing.",
        imgSrc: "images/BFW BMV51.png",
      },
      {
        name: "Leadwell V40 (MP/VMC/006)",
        description:
          "High-performance machining center with an 8,000 rpm spindle, ideal for large workpieces.",
        imgSrc: "images/BFW BMV51.png",
      },
    ],
  },
  {
    category: "CNC Lathes",
    products: [
      {
        name: "Mazak Quick Turn Nexus 150-II (MP/CNC/001)",
        description:
          "High-speed, high-precision CNC lathe with an 8-inch chuck and 15 kW spindle motor.",
        imgSrc: "/images/MAZAK Quick Turn Nexus 150-II.png",
      },
      {
        name: "Mazak Quick Turn Nexus 100-II (MP/CNC/002) & Quick Turn Nexus 100 (MP/CNC/003)",
        description:
          "Compact yet powerful CNC turning centers with a 6-inch chuck and 6,000 rpm spindle speed.",
        imgSrc: "/images/MAZAK Quick Turn Nexus 100.png",
      },
    ],
  },
  {
    category: "Wire Cut Machines",
    products: [
      {
        name: "Charmilles Robofil 390 (MP/WC/001)",
        description:
          "High-precision wire EDM machine for intricate and complex cutting applications.",
        imgSrc: "/images/Wire Cut SODICK.png",
      },
      {
        name: "Sodick Wire Cut (MP/WC/002)",
        description:
          "Exceptional accuracy in fine and intricate profiles, providing superior surface quality.",
        imgSrc: "/images/Wire Cut SODICK.png",
      },
    ],
  },
  {
    category: "Electrical Discharge Machining (EDM)",
    products: [
      {
        name: "Creator CNC CR6C (MP/EDM/001) & Creator CNC 640 (MP/EDM/002)",
        description:
          "High-efficiency EDM machines designed for precision electrical discharge machining.",
        imgSrc: "/images/Wire Cut SODICK.png",
      },
    ],
  },
  {
    category: "Milling Machines",
    products: [
      {
        name: "Esteam-4KSR (MP/M/001) – DRO Milling",
        description:
          "Versatile manual milling machine with a Digital Readout (DRO) system for enhanced precision.",
        imgSrc: "/images/DRO DRILLING ESTEAM-4KSR.png",
      },
      {
        name: "WMW Hackers (MP/M/002)",
        description:
          "Reliable and high-speed milling machine, perfect for small-scale and large-scale milling.",
        imgSrc: "/images/MILLING WMW HACKERS.png",
      },
    ],
  },
  {
    category: "Surface Grinding",
    products: [
      {
        name: "Master Grinding (MP/SGM/001)",
        description:
          "Designed for precision surface finishing, ensuring superior flatness and accuracy.",
        imgSrc: "/images/Surface Grinding MASTER GRINDING.png",
      },
    ],
  },
];

const Products = () => {
  return (
    <div className="products-container">
      <h1>Infrastructure</h1>
      {productsData.map((category, index) => (
        <div key={index} className="category-section">
          <h2>{category.category}</h2>
          <div className="products-grid">
            {category.products.map((product, idx) => (
              <div key={idx} className="product-card">
                <img src={product.imgSrc} alt={product.name} className="product-image"/>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;