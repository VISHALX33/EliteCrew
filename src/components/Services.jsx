import React from 'react';

const Services = () => {
  const services = [
    {
      id: 1,
      name: 'Babysitter',
      description: 'Professional babysitting services to take care of your children with love and care.',
      link: 'https://your-booking-site.com/babysitter',
      image: 'https://via.placeholder.com/400x250', // Replace with actual image URL
      icon: '👶', // Add an icon for each service
    },
    {
      id: 2,
      name: 'Dog Walker',
      description: 'Reliable dog walking services to keep your furry friends happy and healthy.',
      link: 'https://your-booking-site.com/dog-walker',
      image: 'https://via.placeholder.com/400x250', // Replace with actual image URL
      icon: '🐕', // Add an icon for each service
    },
    {
      id: 3,
      name: 'Plant Sitter',
      description: 'Expert plant care services to keep your plants thriving while you’re away.',
      link: 'https://your-booking-site.com/plant-sitter',
      image: 'https://via.placeholder.com/400x250', // Replace with actual image URL
      icon: '🌿', // Add an icon for each service
    },
    {
      id: 4,
      name: 'Tutor',
      description: 'Qualified tutors for personalized learning in various subjects and skills.',
      link: 'https://your-booking-site.com/tutor',
      image: 'https://via.placeholder.com/400x250', // Replace with actual image URL
      icon: '📚', // Add an icon for each service
    },
    {
      id: 5,
      name: 'Content Writer',
      description: 'Professional content writing services for blogs, websites, and marketing materials.',
      link: 'https://your-booking-site.com/content-writer',
      image: 'https://via.placeholder.com/400x250', // Replace with actual image URL
      icon: '✍️', // Add an icon for each service
    },
    {
      id: 6,
      name: 'Personal Chef',
      description: 'Experienced personal chefs to prepare delicious meals tailored to your preferences.',
      link: 'https://your-booking-site.com/personal-chef',
      image: 'https://via.placeholder.com/400x250', // Replace with actual image URL
      icon: '👨‍🍳', // Add an icon for each service
    },
    {
      id: 7,
      name: 'Data Entry',
      description: 'Accurate and efficient data entry services for your business needs.',
      link: 'https://your-booking-site.com/data-entry',
      image: 'https://via.placeholder.com/400x250', // Replace with actual image URL
      icon: '💻', // Add an icon for each service
    },
    {
      id: 8,
      name: 'Caretaker',
      description: 'Compassionate caretaking services for the elderly or those in need of assistance.',
      link: 'https://your-booking-site.com/caretaker',
      image: 'https://via.placeholder.com/400x250', // Replace with actual image URL
      icon: '👵', // Add an icon for each service
    },
  ];

  return (
    <div id="services" className="py-16 bg-gray-50">
      <div className=" container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2  lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2"
            >
              <div className="p-6 text-center">
                <div className="text-6xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.name}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <a
                  href={service.link}
                  className="inline-block bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:via-pink-600 hover:to-red-600 transition-all duration-300"
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