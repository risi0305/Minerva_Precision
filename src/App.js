import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import MenuBar from "./components/MenuBar";
import Footer from "./components/Footer";
import { Products,
  Home,
  Client,
  AdvancedMachinery,
  About,
  Services,
  Contact,


 } from "./pages";
import "./App.css";

function App() {
  // Function to open Products page in a new tab
 

  return (
    <Router>
      <div className="App">
        <MenuBar />

        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/advanced-machinery" element={<AdvancedMachinery />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/client" element={<Client/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/contact" element={<Contact/>}/>

        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
