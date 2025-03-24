import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-amber-400 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <p className='text-6xl'>EliteCrew</p>
            <br />
            <br />
            <p className="text-sm">
              Your one-stop solution for all your needs. We provide top-notch services to make your life easier.
            </p>
          </div>

          {/* Quick Links - Updated with Link components */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-gray-200">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gray-200">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gray-200">Services</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-200">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="tel:+1234567890" className="hover:text-gray-200">+1 (234) 567-890</a>
              </li>
              <li>
                <a href="mailto:info@myapp.com" className="hover:text-gray-200">info@myapp.com</a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-200"
              >
                <FaGithub className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-200"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-200"
              >
                <FaFacebook className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-200"
              >
                <FaInstagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 border-t border-gray-700 pt-8">
          <p>&copy; 2023 MyApp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;