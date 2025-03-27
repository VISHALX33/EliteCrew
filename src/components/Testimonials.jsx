
import React from 'react';
import { FaStar } from 'react-icons/fa';
import vishal from '../assets/vishal.jpg';


const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Alice',
      comment: 'Great service!',
      image: vishal,
      role: 'CEO, Company A',
    },
    {
      id: 2,
      name: 'Bob',
      comment: 'Very professional team.',
      image: vishal,
      role: 'CTO, Company B',
    },
    {
      id: 3,
      name: 'Charlie',
      comment: 'Highly recommended!',
      image: vishal,
      role: 'Marketing Head, Company C',
    },
    {
      id: 4,
      name: 'Diana',
      comment: 'Amazing experience!',
      image: vishal,
      role: 'Designer, Company D',
    },
    {
      id: 5,
      name: 'Eve',
      comment: 'Will definitely use again.',
      image: vishal,
      role: 'Developer, Company E',
    },
  ];

  return (
    <div id="testimonials" className="py-16 px-6 bg-gray-50 dark:bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-start gap-4 lg:px-20 px-6">
          <h1 className="text-red-500 dark:text-black">OUR CLIENTS</h1>
          <h1 className="text-black text-[40px] font-semibold leading-10 dark:text-black">
            What our clients <br /> saying about us
          </h1>
        </div>

        {/* Testimonials Grid Container */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-20 lg:px-20 px-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white dark:bg-gray-900 hover:bg-amber-400 cursor-pointer p-8 flex flex-col justify-center items-center gap-6 rounded-xl w-full transition-all duration-300 hover:shadow-lg"
            >
              {/* Client Image and Name */}
              <div className="flex justify-start items-center w-full gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-[70px] h-[70px] transform hover:scale-110 transition-transform duration-300 rounded-full object-cover"
                />
                <div className="flex flex-col justify-center items-start gap-1">
                  <h1 className="text-xl text-black font-semibold dark:text-white">
                    {testimonial.name}
                  </h1>
                  <h1 className="text-slate-600 dark:text-white">
                    {testimonial.role}
                  </h1>
                </div>
              </div>

              {/* Client Comment */}
              <p className="text-md text-justify text-slate-600 items-start gap-2 w-full">
                {testimonial.comment}
              </p>

              {/* Star Rating */}
              <div className="flex justify-start items-start gap-2 w-full">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="size-4 text-yellow-400" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;