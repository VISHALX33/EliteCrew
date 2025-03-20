import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa'; // Import FontAwesome map icon

const ContactUs = () => {
  return (
    <div id="contact" className="py-16 bg-gradient-to-r from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Contact Us</h2>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Side: Map */}
          <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white rounded-lg shadow-lg">
            <div className="text-center">
              {/* <FaMapMarkerAlt className="text-6xl text-purple-600 mb-4" /> */}
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Our Location</h3>
              <p className="text-gray-600">123 Main Street, City, Country</p>
              <p className="text-gray-600">Zip Code: 12345</p>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="w-full lg:w-1/2 bg-white p-8 rounded-lg shadow-lg">
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  rows="4"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-amber-400 text-white px-4 py-2 rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;