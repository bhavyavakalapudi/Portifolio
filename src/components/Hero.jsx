import React from 'react';

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="flex justify-center items-center h-screen bg-cover bg-center text-white text-center px-4"
      style={{ backgroundImage: "url('/bgImage.jpg')" }} //add your background image
    >
      <div className="max-w-3xl">
        {/* // add your title and description */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">Capturing Moments, Creating Memories</h1>
        <p className="text-base md:text-xl mb-8 text-black">Professional photography services for every occasion.</p> 
        <a 
          href="#portfolio" 
          className="bg-[#f0ad4e] hover:bg-[#ec971f] text-black py-2 px-5 md:py-3 md:px-6 rounded-md text-sm md:text-base transition-colors duration-300 ease-in-out"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
