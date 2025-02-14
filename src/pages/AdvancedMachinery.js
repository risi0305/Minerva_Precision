import React from 'react';
import '../pages/Advanced.css';

const AdvancedMachinery = () => {
  const machines = [
    {
      id: 1,
      name: "CNC Milling Machine",
      image: "/images/Makino F3.png",
      description: "High-precision computer-controlled milling machine for complex designs.",
    },
    {
      id: 2,
      name: "Laser Cutting Machine",
      image: "/images/Makino.png",
      description: "Precision laser cutter for metals, plastics, and other materials.",
    },
    {
      id: 3,
      name: "3D Printing Machine",
      image: "/images/VMC Haas.png",
      description: "Advanced 3D printer for prototyping and custom parts manufacturing.",
    },
    {
      id: 4,
      name: "Hydraulic Press Machine",
      image: "/images/MILLING WMW HACKERS.png",
      description: "Industrial-grade hydraulic press for metal forming and stamping.",
    },
  ];

  return (
    <div className="advanced-machinery">

      <div className="heading">
      <h1>Our Advanced Machinery</h1>
      <p>Explore our cutting-edge machinery designed for high efficiency and precision.</p>
      </div>
      <div className="machinery-grid">
        {machines.map(machine => (
          <div key={machine.id} className="machinery-card">
            <img src={machine.image} alt={machine.name} className="machinery-image"/>
            <h2>{machine.name}</h2>
            <p>{machine.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvancedMachinery;
