import React, { useState } from 'react';
import FAQ1 from '../assets/FAQ.webp';

const FAQ = () => {
  const [activeId, setActiveId] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'How do I make a booking?',
      answer: 'You can make a booking by selecting your desired service, choosing a date and time, and completing the payment process.',
    },
    {
      id: 2,
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and other popular payment methods.',
    },
    {
      id: 3,
      question: 'Can I cancel my booking?',
      answer: 'Yes, you can cancel your booking up to 24 hours before the scheduled time.',
    },
    {
      id: 4,
      question: 'Is there a cancellation fee?',
      answer: 'No, there is no cancellation fee if you cancel within the allowed time frame (24 hours before the scheduled time).',
    },
    {
      id: 5,
      question: 'Can I reschedule my booking?',
      answer: 'Yes, you can reschedule your booking up to 12 hours before the scheduled time. Please contact us for assistance.',
    },
    {
      id: 6,
      question: 'What happens if I miss my booking?',
      answer: 'If you miss your booking without prior cancellation, the full amount may be charged. Please contact us for further assistance.',
    },
    {
      id: 7,
      question: 'Do you offer refunds?',
      answer: 'Refunds are provided only if the service is canceled by us or if there is a technical issue on our end. Please refer to our refund policy for more details.',
    },
    {
      id: 8,
      question: 'How do I contact customer support?',
      answer: 'You can contact our customer support team via email at support@example.com or call us at +123-456-7890.',
    },
    {
      id: 9,
      question: 'Are there any discounts available?',
      answer: 'Yes, we offer discounts for first-time users and seasonal promotions. Check our website or subscribe to our newsletter for updates.',
    },
    {
      id: 10,
      question: 'Can I book for multiple people?',
      answer: 'Yes, you can book for multiple people. Simply select the number of participants during the booking process.',
    },
    // ... rest of your FAQ items
  ];

  const toggleAnswer = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div id="faq" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-5xl font-bold text-center mb-16 text-gray-800 relative">
          Frequently Asked <span className="text-amber-500">Questions</span>
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1.5 bg-amber-400 rounded-full"></span>
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* FAQ List */}
          <div className="w-full lg:w-1/2 space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className={`bg-white p-8 rounded-xl shadow-lg cursor-pointer transition-all duration-500 overflow-hidden ${
                  activeId === faq.id 
                    ? 'ring-2 ring-amber-400 shadow-xl' 
                    : 'hover:shadow-xl hover:-translate-y-1'
                }`}
                onClick={() => toggleAnswer(faq.id)}
              >
                <h3 className="text-xl font-bold text-gray-800 flex justify-between items-center">
                  <span className="mr-4">{faq.question}</span>
                  <span className={`text-amber-500 transition-transform duration-300 ${
                    activeId === faq.id ? 'rotate-180' : ''
                  }`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </h3>
                <div className={`transition-all duration-500 ease-in-out ${
                  activeId === faq.id 
                    ? 'mt-6 opacity-100 max-h-96' 
                    : 'opacity-0 max-h-0 overflow-hidden'
                }`}>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex items-center justify-center relative">
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-amber-400 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-purple-400 rounded-full opacity-20 blur-xl"></div>
            <img
              src={FAQ1}
              alt="FAQ Illustration"
              className="rounded-2xl shadow-2xl h-auto w-full max-w-lg transform hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;