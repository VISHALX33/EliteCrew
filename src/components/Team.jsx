import React from 'react';
import vishal from '../assets/vishal.jpg';
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Team = () => {
  const teamMembers = [
    { id: 1, name: 'Vishal Prajapati', role: 'Full Stack Developer', image: vishal },
    { id: 2, name: 'Vishal Prajapati', role: 'Full Stack Developer', image: vishal },
    { id: 3, name: 'Vishal Prajapati', role: 'Full Stack Developer', image: vishal },
  ];

  return (
    <div id="team" className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl font-bold text-center mb-16 text-gray-800 relative">
          Our <span className="text-amber-500">Team</span>
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-amber-400 rounded-full"></span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white text-lg font-medium">{member.role}</p>
                  </div>
                </div>
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                  {member.name}
                </h3>
                <div className="flex justify-center space-x-5">
                  <a
                    href="#"
                    className="text-gray-500 hover:text-blue-400 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <FaTwitter className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-pink-600 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <FaInstagram className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-blue-700 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <FaLinkedin className="w-6 h-6" />
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