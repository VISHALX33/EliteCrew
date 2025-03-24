import React from 'react';
import Caretaker from '../assets/Caretaker.jpg'; // Import the local image
import babySitter from '../assets/babySitter.jpg'
import DogWalker from '../assets/DogWalker.avif'
import plantSitter from '../assets/plantSitter.jpg'
import Tutor from '../assets/Tutor.jpeg'
import ContentWriter from '../assets/ContentWriter.jpg'
import PersonalChef from '../assets/PersonalChef.png'
import DataEntry from '../assets/DataEntry.jpg'

const Services = () => {
  const services = [
    {
      id: 1,
      name: 'Babysitter',
      description: 'Professional babysitting services to take care of your children with love and care.',
      link: 'https://elitecustomer.netlify.app/',
      image: babySitter, // Use the imported image here
      icon: '👶',
    },
    {
      id: 2,
      name: 'Dog Walker',
      description: 'Reliable dog walking services to keep your furry friends happy and healthy.',
      link: 'https://elitecustomer.netlify.app/',
      image: DogWalker, // Use the imported image here
      icon: '🐕',
    },
    {
      id: 3,
      name: 'Plant Sitter',
      description: 'Expert plant care services to keep your plants thriving while you’re away.',
      link: 'https://elitecustomer.netlify.app/',
      image: plantSitter, // Use the imported image here
      icon: '🌿',
    },
    {
      id: 4,
      name: 'Tutor',
      description: 'Qualified tutors for personalized learning in various subjects and skills.',
      link: 'https://elitecustomer.netlify.app/',
      image: Tutor, // Use the imported image here
      icon: '📚',
    },
    {
      id: 5,
      name: 'Content Writer',
      description: 'Professional content writing services for blogs, websites, and marketing materials.',
      link: 'https://elitecustomer.netlify.app/',
      image: ContentWriter, // Use the imported image here
      icon: '✍️',
    },
    {
      id: 6,
      name: 'Personal Chef',
      description: 'Experienced personal chefs to prepare delicious meals tailored to your preferences.',
      link: 'https://elitecustomer.netlify.app/',
      image: PersonalChef, // Use the imported image here
      icon: '👨‍🍳',
    },
    {
      id: 7,
      name: 'Data Entry',
      description: 'Accurate and efficient data entry services for your business needs.',
      link: 'https://elitecustomer.netlify.app/',
      image: DataEntry, // Use the imported image here
      icon: '💻',
    },
    {
      id: 8,
      name: 'Caretaker',
      description: 'Compassionate caretaking services for the elderly or those in need of assistance.',
      link: 'https://elitecustomer.netlify.app/',
      image: Caretaker, // Use the imported image here
      icon: '👵',
    },
  ];

  return (
    <div id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 relative inline-block">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative">
                <img
                  src={service.image} // Use the imported image here
                  alt={service.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute  bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
              </div>
              <div className="p-6 text-center">
                <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.name}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <a
                  href={service.link}
                  className="inline-block bg-amber-400 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:via-pink-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;