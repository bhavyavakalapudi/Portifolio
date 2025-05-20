import React from 'react';

// Sample testimonial data replace with your own testimonials
const testimonials = [
  {
    id: 1,
    quote: "John's work is simply outstanding! He captured our wedding day perfectly. The photos are breathtaking and truly tell the story of our special day.",
    author: "Sarah & Tom L.",
    event: "Wedding Photography"
  },
  {
    id: 2,
    quote: "I needed professional headshots, and John delivered beyond my expectations. He made me feel comfortable and the results were fantastic.",
    author: "Michael B.",
    event: "Portrait Session"
  },
  {
    id: 3,
    quote: "The landscape shots John took for our project were stunning. His eye for composition and light is incredible. Highly recommend!",
    author: "Jane K., Art Director",
    event: "Commercial Project"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-gray-100 text-center py-12 px-4 sm:px-6 md:py-16 md:px-8 pt-16 md:pt-20"> {/* Navbar padding & responsive padding */}
      <div className="max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto"> {/* Responsive max-width */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-8 md:mb-10">What Clients Say</h2> {/* Responsive text size */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"> {/* Responsive gap */}
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="bg-white p-5 sm:p-6 md:p-8 rounded-lg shadow-lg flex flex-col justify-between text-left"> {/* Responsive padding */}
              <p className="text-sm sm:text-base md:text-lg italic text-gray-700 mb-4 leading-relaxed flex-grow">&ldquo;{testimonial.quote}&rdquo;</p> {/* Responsive text size */}
              <div>
                <p className="text-sm sm:text-base font-bold text-gray-800 mb-1 text-right">- {testimonial.author}</p> {/* Responsive text size */}
                <p className="text-xs sm:text-sm text-gray-600 text-right">({testimonial.event})</p> {/* Responsive text size */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
