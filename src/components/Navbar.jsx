import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-orange-900 text-white fixed w-full top-0 left-0 z-50">
      <div> {/* Changed from navbar-logo to a simple div, class applied to <a> */}
        <a href="/" className="text-2xl font-bold text-white">John Doe</a>
      </div>
      <ul className="flex space-x-6"> {/* Added space-x-6 for li spacing */}
        <li><a href="#hero" className="text-base text-white hover:text-orange-300 transition-colors duration-300 ease-in-out">Home</a></li>
        <li><a href="#about" className="text-base text-white hover:text-orange-300 transition-colors duration-300 ease-in-out">About</a></li>
        <li><a href="#portfolio" className="text-base text-white hover:text-orange-300 transition-colors duration-300 ease-in-out">Portfolio</a></li>
        <li><a href="#testimonials" className="text-base text-white hover:text-orange-300 transition-colors duration-300 ease-in-out">Testimonials</a></li>
        <li><a href="#contact" className="text-base text-white hover:text-orange-300 transition-colors duration-300 ease-in-out">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
