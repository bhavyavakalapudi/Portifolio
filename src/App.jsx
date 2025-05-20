import React from 'react';
// import './App.css'; // Removed as styles are handled by Tailwind or in index.css
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer'; // Added a Footer component

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
