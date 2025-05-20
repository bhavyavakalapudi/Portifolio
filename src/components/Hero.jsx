import React from 'react';

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row justify-center items-center h-screen bg-cover bg-center text-white text-center px-4 md:px-8"
      style={{ backgroundImage: "url('/bgImage.jpg')" }} //add your background image
    >
      <div className="max-w-md md:max-w-3xl md:mr-8"> {/* Adjusted max-width and added margin for larger screens */}
        {/* // add your title and description */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-black">Capturing Moments, Creating Memories</h1> {/* Responsive text sizes */}
        <p className="text-sm sm:text-base md:text-xl mb-8 text-black">Professional photography services for every occasion.</p> {/* Responsive text sizes */}
        <a
          href="#portfolio"
          className="bg-[#f0ad4e] hover:bg-[#ec971f] text-black py-2 px-4 sm:px-5 md:py-3 md:px-6 rounded-md text-xs sm:text-sm md:text-base transition-colors duration-300 ease-in-out" // Responsive padding and text size
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
