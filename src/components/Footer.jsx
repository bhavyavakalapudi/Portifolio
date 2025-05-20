import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-orange-900 text-gray-300 pt-8 px-4 pb-4 md:pt-12 md:px-8 md:pb-4 text-center">
      <div className="max-w-5xl mx-auto mb-8 flex flex-col md:flex-row justify-around items-center md:items-start gap-8">
        <div className="flex-1 min-w-[250px] text-center md:text-left mb-8 md:mb-0">
          <h3 className="text-xl md:text-2xl text-white font-bold mb-4">Get in Touch</h3>
          {/* replace href links with your contact details */}
          <p className="mb-2 text-white">Email: <a href="mailto:john.doe@example.com" className="text-white hover:text-orange-300 transition-colors duration-300 ease-in-out">john.doe@example.com</a></p>
          <p className="mb-2 text-white">Phone: <a href="tel:+1234567890" className="text-white hover:text-orange-300 transition-colors duration-300 ease-in-out">+1 (234) 567-890</a></p>
          <p className="text-white">Based in: City, Country</p>
        </div>
        <div className="flex-1 min-w-[250px] text-center md:text-left">
          <h3 className="text-xl md:text-2xl text-white font-bold mb-4">Follow Me</h3>
          {/* replace href links with your social media profiles */}
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="block text-white hover:text-orange-300 mb-2 transition-colors duration-300 ease-in-out">Instagram</a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="block text-white hover:text-orange-300 mb-2 transition-colors duration-300 ease-in-out">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="block text-white hover:text-orange-300 transition-colors duration-300 ease-in-out">Twitter</a>
        </div>
      </div>
      <div className="border-t border-white pt-4">
        {/* replace with your copyright information */}
        <p className="text-sm text-white">&copy; {new Date().getFullYear()} John Doe Photography. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
