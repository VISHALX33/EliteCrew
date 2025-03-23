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
  ];

  const toggleAnswer = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div id="faq" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 relative inline-block ">Frequently Asked Questions</h2>
        
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
                  <span className="text-amber-400">
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
              src= {FAQ1} // Replace with your image URL
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