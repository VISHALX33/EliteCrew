import React from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/signup-login');
  };

  return (
    <div className="relative h-screen flex items-center justify-center bg-gradient-to-br from-amber-100 via-amber-50 to-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-amber-400 rounded-full filter blur-3xl opacity-20 animate-float1"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-500 rounded-full filter blur-3xl opacity-20 animate-float2"></div>
      
      {/* Text Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="text-6xl md:text-8xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800 animate-fadeIn">
          Welcome to <span className="text-black">EliteCrew</span>
        </h1>
        <p className="text-2xl md:text-3xl mb-12 text-gray-700 font-medium animate-fadeIn delay-100">
          Your premium solution for all service needs
        </p>
        {/* <button
          onClick={handleGetStarted}
          className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-10 py-4 rounded-xl font-bold text-xl hover:from-amber-600 hover:to-amber-700 transition-all duration-500 transform hover:scale-105 shadow-xl hover:shadow-2xl shadow-amber-500/30 animate-fadeIn delay-200"
        >
          Get Started
          <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 opacity-0 hover:opacity-100 transition-opacity duration-500"></span>
        </button> */}
      </div>

      {/* Add these animations to your global CSS */}
      <style jsx global>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-20px, -20px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20px, 20px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float1 { animation: float1 8s ease-in-out infinite; }
        .animate-float2 { animation: float2 10s ease-in-out infinite; }
        .animate-fadeIn { animation: fadeIn 1s ease-out forwards; }
        .animate-fadeIn.delay-100 { animation-delay: 100ms; }
        .animate-fadeIn.delay-200 { animation-delay: 200ms; }
      `}</style>
    </div>
  );
};

export default Landing;