import React from 'react';
import vishal from '../assets/vishal.jpg'

const Team = () => {
  const teamMembers = [
    { id: 1, name: 'Vishal Prajapati', role: 'Full Stack ', image: vishal },
    { id: 1, name: 'Vishal Prajapati', role: 'Full Stack ', image: vishal },
    { id: 1, name: 'Vishal Prajapati', role: 'Full Stack ', image: vishal },
    
    // { id: 2, name: 'Jane Smith', role: 'CTO', image: 'https://via.placeholder.com/150' },
    // { id: 3, name: 'Mike Johnson', role: 'Lead Developer', image: 'https://via.placeholder.com/150' },
  ];

  return (
    <div id="team" className="py-16 px-6 ">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 ">Our Team</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8  ">
          {teamMembers.map(member => (
            <div key={member.id} className="bg-white p-6 rounded-lg shadow-lg text-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
              <img src={member.image} alt={member.name} className="w-32 h-32 mx-auto rounded-full mb-4" />
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-gray-100">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;