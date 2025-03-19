import React from 'react';
import vishal from '../assets/vishal.jpg'; // Import the local image
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import Font Awesome Icons

const Team = () => {
  const teamMembers = [
    { id: 1, name: 'Vishal Prajapati', role: 'Full Stack Developer', image: vishal },
    { id: 2, name: 'Vishal Prajapati', role: 'Full Stack Developer', image: vishal },
    { id: 3, name: 'Vishal Prajapati', role: 'Full Stack Developer', image: vishal },
  ];

  return (
    <div id="team" className="py-16 px-6 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 relative inline-block">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute  bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-gray-600 mb-4">{member.role}</p>
                <div className="flex justify-center space-x-4">
                  <a
                    href="#"
                    className="text-gray-600 hover:text-purple-500 transition-colors duration-300"
                  >
                    <FaTwitter className="w-6 h-6" /> {/* Font Awesome Twitter Icon */}
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-purple-500 transition-colors duration-300"
                  >
                    <FaInstagram className="w-6 h-6" /> {/* Font Awesome Instagram Icon */}
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-purple-500 transition-colors duration-300"
                  >
                    <FaLinkedin className="w-6 h-6" /> {/* Font Awesome LinkedIn Icon */}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;