import React, { useState } from 'react';
import vishal from '../assets/vishal.jpg';

const Testimonials = () => {
  const testimonials = [
    { id: 1, name: 'Alice', comment: 'Great service!', image: vishal },
    { id: 2, name: 'Bob', comment: 'Very professional team.', image: vishal },
    { id: 3, name: 'Charlie', comment: 'Highly recommended!', image: vishal },
    { id: 4, name: 'Diana', comment: 'Amazing experience!', image: vishal },
    { id: 5, name: 'Eve', comment: 'Will definitely use again.', image: vishal },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div id="testimonials" className="py-16 px-6 bg-gray-50">
      <div className="container mx-auto relative">
        <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>

        {/* Testimonials Container */}
        <div className="overflow-hidden relative">
          <div
            className="flex transition-transform duration-300"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="min-w-full flex-shrink-0 p-4"
              >
                <div className="bg-amber-400 p-6 rounded-lg shadow-lg flex items-center space-x-8">
                  {/* Text Content (Left Side) */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{testimonial.name}</h3>
                    <p className="text-gray-100">{testimonial.comment}</p>
                  </div>

                  {/* Image (Right Side) */}
                  <div className="flex-shrink-0 ">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-56 h-56 rounded-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300"
        >
          &larr;
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300"
        >
          &rarr;
        </button>
      </div>
    </div>
  );
};

export default Testimonials;