import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './pages/Contact';
// import Projects from './pages/Projects';
// import About from './pages/About';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>\
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} /> */}
          <Route path="/contact" element={<Contact />} />
          {/* Add more routes here */}
        </Routes>
      </main>
      <Footer />
    </>
  );
}
