import React from 'react';
import Caretaker from '../assets/Caretaker.jpg';
import babySitter from '../assets/babySitter.jpg';
import DogWalker from '../assets/DogWalker.avif';
import plantSitter from '../assets/plantSitter.jpg';
import Tutor from '../assets/Tutor.jpeg';
import ContentWriter from '../assets/ContentWriter.jpg';
import PersonalChef from '../assets/PersonalChef.png';
import DataEntry from '../assets/DataEntry.jpg';

const Services = () => {
  const services = [
    {
      id: 1,
      name: 'Babysitter',
      description: 'Professional babysitting services to take care of your children with love and care.',
      image: babySitter,
    },
    {
      id: 2,
      name: 'Dog Walker',
      description: 'Reliable dog walking services to keep your furry friends happy and healthy.',
      image: DogWalker,
    },
    {
      id: 3,
      name: 'Plant Sitter',
      description: 'Expert plant care services to keep your plants thriving while youre away.',
      image: plantSitter,
    },
    {
      id: 4,
      name: 'Tutor',
      description: 'Qualified tutors for personalized learning in various subjects and skills.',
      image: Tutor,
    },
    {
      id: 5,
      name: 'Content Writer',
      description: 'Professional content writing services for blogs, websites, and marketing materials.',
      image: ContentWriter,
    },
    {
      id: 6,
      name: 'Personal Chef',
      description: 'Experienced personal chefs to prepare delicious meals tailored to your preferences.',
      image: PersonalChef,
    },
    {
      id: 7,
      name: 'Data Entry',
      description: 'Accurate and efficient data entry services for your business needs.',
      image: DataEntry,
    },
    {
      id: 8,
      name: 'Caretaker',
      description: 'Compassionate caretaking services for the elderly or those in need of assistance.',
      image: Caretaker,
    },
    // ... other services
  ];

  const bookNowLink = 'https://elitecustomer.netlify.app/';

  return (
    <div id="services" className="py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4 max-w-8xl max-h-6xl ">
        <h2 className="text-5xl font-bold text-center mb-16 text-gray-800 relative">
          Our <span className="text-amber-500">Services</span>
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1.5 bg-amber-400 rounded-full"></span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group"
            >
              <div className="relative overflow-hidden h-40">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-amber-600 transition-colors duration-300">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-6 min-h-[4.5rem]">
                  {service.description}
                </p>
                
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href={bookNowLink}
            className="inline-block bg-gradient-to-r from-amber-400 to-amber-500 text-white px-12 py-6 rounded-xl font-bold text-xl hover:bg-gradient-to-r hover:from-amber-500 hover:to-amber-600 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl shadow-amber-400/30 hover:shadow-amber-500/40 relative overflow-hidden group"
          >
            <span className="relative z-10">Book Your Service Now</span>
            <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></span>
            <span className="absolute top-0 left-0 w-full h-0.5 bg-white/30 group-hover:h-full group-hover:opacity-0 transition-all duration-700 ease-in-out"></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;