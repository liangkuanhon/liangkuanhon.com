import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './pages/Contact';
// import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Home from './pages/Home';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/portfolio" element={<Portfolio />} /> */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
