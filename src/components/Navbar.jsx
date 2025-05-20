import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-orange-900 text-white fixed w-full top-0 left-0 z-50">
      <div>
        <a href="/" className="text-2xl font-bold text-white">John Doe</a>
      </div>
      {/* Hamburger Menu Icon for medium and small screens */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>
      {/* Navigation Links for large screens */}
      <ul className="hidden md:flex space-x-6">
        <li><a href="#hero" className="text-base text-white hover:text-orange-300 transition-colors duration-300 ease-in-out">Home</a></li>
        <li><a href="#about" className="text-base text-white hover:text-orange-300 transition-colors duration-300 ease-in-out">About</a></li>
        <li><a href="#portfolio" className="text-base text-white hover:text-orange-300 transition-colors duration-300 ease-in-out">Portfolio</a></li>
        <li><a href="#testimonials" className="text-base text-white hover:text-orange-300 transition-colors duration-300 ease-in-out">Testimonials</a></li>
        <li><a href="#contact" className="text-base text-white hover:text-orange-300 transition-colors duration-300 ease-in-out">Contact</a></li>
      </ul>
      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <ul className="md:hidden absolute top-16 left-0 w-full bg-orange-900 flex flex-col items-center space-y-4 py-4">
          <li><a href="#hero" onClick={toggleMenu} className="text-base text-white hover:text-orange-300 transition-colors duration-300 ease-in-out">Home</a></li>
          <li><a href="#about" onClick={toggleMenu} className="text-base text-white hover:text-orange-300 transition-colors duration-300 ease-in-out">About</a></li>
          <li><a href="#portfolio" onClick={toggleMenu} className="text-base text-white hover:text-orange-300 transition-colors duration-300 ease-in-out">Portfolio</a></li>
          <li><a href="#testimonials" onClick={toggleMenu} className="text-base text-white hover:text-orange-300 transition-colors duration-300 ease-in-out">Testimonials</a></li>
          <li><a href="#contact" onClick={toggleMenu} className="text-base text-white hover:text-orange-300 transition-colors duration-300 ease-in-out">Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
