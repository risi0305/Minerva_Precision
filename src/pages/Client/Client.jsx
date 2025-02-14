import React, { useState } from "react";
import './Client.css'; // Importing the CSS file

const App = () => {
  const [modalContent, setModalContent] = useState({ image: "", text: "" });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (imgSrc, text) => {
    setModalContent({ image: imgSrc, text: text });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h1 className="heading">Clients</h1>
      <div className="container">
        
        <div
          className="card"
          onClick={() =>
            openModal(
              '/images/TVS-LOGO.jpg', // Correct relative path
              `TVS Rubber is the flagship brand of Sundaram Industries Private Limited. 
              With over 50 years of experience, they manufacture high-quality automotive rubber parts. 
              They cater to both domestic and international markets, ensuring precision and durability in their products.`
            )
          }
        >
          <img src="/images/TVS-LOGO.jpg" alt="TVS Rubber" />
        </div>

        <div
          className="card"
          onClick={() =>
            openModal(
              '/images/TVS-sundaram.jpg', // Correct relative path
              `Sundaram Brake Linings (SBL) is a globally recognized manufacturer of friction materials. 
              Established decades ago, the company produces high-performance brake linings and pads used in commercial vehicles. 
              Their cutting-edge technology ensures safety and efficiency in braking systems.`
            )
          }
        >
          <img src="/images/TVS-sundaram.jpg" alt="Sundaram Brake Linings" />
        </div>

        <div
          className="card"
          onClick={() =>
            openModal(
              '/images/TVS-eurogrip.jpg', // Correct relative path
              `TVS Eurogrip is a leading global manufacturer of tires, offering a wide range of two-wheeler and three-wheeler tires. 
              With a strong focus on innovation and research, the company provides durable and high-performance tires for various road conditions.`
            )
          }
        >
          <img src="/images/TVS-eurogrip.jpg" alt="TVS Eurogrip" />
        </div>

        <div
          className="card"
          onClick={() =>
            openModal(
              '/images/pricol.png', // Correct relative path
              `With a vision to bring innovation in the manufacturing of automotive instruments, Pricol began its operations in 1975 at Coimbatore in South India.
              In the last four decades, Pricol has become a reputed global brand in the automotive instruments and products business. 
              Taking forward this legacy of long-standing customer trust, today, Pricol is pioneering excellence and innovation as an automotive technology company.`
            )
          }
        >
          <img src="/images/pricol.png" alt="Pricol Limited" />
        </div>
      </div>

      {isModalOpen && (
        <div className="modal">
          <span className="close-btn" onClick={closeModal}>
            ×
          </span>
          <img className="modal-img" src={modalContent.image} alt="Large View" />
          <p className="modal-text">{modalContent.text}</p>
        </div>
      )}
    </div>
  );
};

export default App;