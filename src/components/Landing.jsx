import React from 'react';
import { useNavigate } from 'react-router-dom';
import landing from '../assets/landing.avif'; // Ensure the path is correct

const Landing = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/signup-login');
  };

  return (
    <div className="relative h-screen flex bg-amber-100 items-center justify-center">
      {/* Background Image */}
      

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0  bg-opacity-50"></div>

      {/* Text Content */}
      <div className="relative z-10 text-center bg-black  bg-clip-text text-transparent text-4xl font-bold p-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Welcome to EliteCrew</h1>
        <p className="text-xl md:text-2xl mb-8">Your one-stop solution for all your needs.</p>
        <button
          onClick={handleGetStarted}
          className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-500 transition-all duration-300"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Landing;