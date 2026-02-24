import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Works from './components/Works';
import CV from './components/CV';
import References from './components/References';
import SoloProject from './components/SoloProject';
import Footer from './components/Footer';
import './App.css';

const Home = () => {
  return (
    <div className="bg-[#0d0d0d] min-h-screen">
      {/* Global film grain overlay */}
      <div className="grain-overlay"></div>
      <Header />
      <Hero />
      <Works />
      <CV />
      <References />
      <SoloProject />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
