import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-orange-900 text-gray-300 pt-8 px-4 pb-4 sm:px-6 md:pt-12 md:px-8 md:pb-6 text-center"> {/* Responsive padding */}
      <div className="max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto mb-8 flex flex-col md:flex-row justify-around items-center md:items-start gap-6 sm:gap-8"> {/* Responsive max-width & gap */}
        <div className="flex-1 min-w-[200px] sm:min-w-[250px] text-center md:text-left mb-6 sm:mb-8 md:mb-0"> {/* Responsive min-width & margin */}
          <h3 className="text-lg sm:text-xl md:text-2xl text-white font-bold mb-3 sm:mb-4">Get in Touch</h3> {/* Responsive text size & margin */}
          {/* replace href links with your contact details */}
          <p className="mb-1 sm:mb-2 text-sm sm:text-base text-white">Email: <a href="mailto:john.doe@example.com" className="text-white hover:text-orange-300 transition-colors duration-300 ease-in-out">john.doe@example.com</a></p> {/* Responsive text size & margin */}
          <p className="mb-1 sm:mb-2 text-sm sm:text-base text-white">Phone: <a href="tel:+1234567890" className="text-white hover:text-orange-300 transition-colors duration-300 ease-in-out">+1 (234) 567-890</a></p> {/* Responsive text size & margin */}
          <p className="text-sm sm:text-base text-white">Based in: City, Country</p> {/* Responsive text size */}
        </div>
        <div className="flex-1 min-w-[200px] sm:min-w-[250px] text-center md:text-left"> {/* Responsive min-width */}
          <h3 className="text-lg sm:text-xl md:text-2xl text-white font-bold mb-3 sm:mb-4">Follow Me</h3> {/* Responsive text size & margin */}
          {/* replace href links with your social media profiles */}
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="block text-sm sm:text-base text-white hover:text-orange-300 mb-1 sm:mb-2 transition-colors duration-300 ease-in-out">Instagram</a> {/* Responsive text size & margin */}
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="block text-sm sm:text-base text-white hover:text-orange-300 mb-1 sm:mb-2 transition-colors duration-300 ease-in-out">Facebook</a> {/* Responsive text size & margin */}
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="block text-sm sm:text-base text-white hover:text-orange-300 transition-colors duration-300 ease-in-out">Twitter</a> {/* Responsive text size */}
        </div>
      </div>
      <div className="border-t border-white pt-3 sm:pt-4"> {/* Responsive padding */}
        {/* replace with your copyright information */}
        <p className="text-xs sm:text-sm text-white">&copy; {new Date().getFullYear()} John Doe Photography. All Rights Reserved.</p> {/* Responsive text size */}
      </div>
    </footer>
  );
};

export default Footer;
