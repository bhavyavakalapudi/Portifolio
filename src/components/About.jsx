import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-gray-50 text-center py-12 px-4 md:py-16 md:px-8 pt-16 md:pt-20"> {/* Added top padding for navbar */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">About Me</h2>
        <img 
          src="/john.jpg" // replace with your profile picture
          alt="John Doe"  // replace with your name
          className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover border-[5px] border-gray-300 mb-6 mx-auto" 
        />
        {/* replace with your description and experience */}
        <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-4 text-left">
          Hello! I'm John Doe, a passionate photographer with a keen eye for detail and a love for storytelling.
          My journey into photography began over a decade ago, and since then, I've had the privilege of
          capturing countless beautiful moments, from intimate portraits to grand landscapes.
        </p>
        {/* replace with your description and experience */}
        <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-4 text-left">
          My approach is to blend creativity with technical skill, ensuring that each photograph not only looks
          stunning but also evokes emotion and tells a unique story. I believe that the best photos are those
          that are authentic and reflect the true essence of the subject.
        </p>
        {/* replace with your description and experience */}
        <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-4 text-left">
          Whether it's a wedding, a family portrait, a corporate event, or a personal project, I am dedicated
          to providing a personalized and enjoyable experience, resulting in images that you will cherish for a lifetime.
        </p>
      </div>
    </section>
  );
};

export default About;
