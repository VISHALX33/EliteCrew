import React, { useState } from 'react';
import vishal from '../assets/vishal.jpg';


const FAQ = () => {
  const [activeId, setActiveId] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'How do I book a service?',
      answer: 'You can book a service by clicking the "Book Now" button on the service card.',
    },
    {
      id: 2,
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards and PayPal.',
    },
    {
      id: 3,
      question: 'Can I cancel my booking?',
      answer: 'Yes, you can cancel your booking up to 24 hours before the scheduled time.',
    },
  ];

  const toggleAnswer = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div id="faq" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Frequently Asked Questions</h2>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* FAQ List */}
          <div className="w-full lg:w-1/2 space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
                onClick={() => toggleAnswer(faq.id)}
              >
                <h3 className="text-xl font-bold text-gray-800 flex justify-between items-center">
                  {faq.question}
                  <span className="text-pink-500">
                    {activeId === faq.id ? '▲' : '▼'}
                  </span>
                </h3>
                {activeId === faq.id && (
                  <p className="mt-4 text-gray-600">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <img
              src= {vishal} // Replace with your image URL
              alt="FAQ Illustration"
              className="rounded-lg shadow-lg h-full w-full "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;