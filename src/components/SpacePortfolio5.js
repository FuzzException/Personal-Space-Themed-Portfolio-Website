import React from 'react';
import '../tailwind.config.js';

const SpacePortfolio5 = () => {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Starlight Background */}
      <div className="absolute inset-0 -z-10">
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full twinkle"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-black bg-opacity-50 backdrop-blur-md flex justify-between items-center p-4 z-20">
        <div className="text-2xl font-bold">Sarah's Space</div>
        <ul className="flex space-x-6 text-lg">
          {['Home', 'About', 'Skills', 'Education', 'Work', 'Experience', 'Certifications', 'Contact'].map((item, idx) => (
            <li key={idx} className="hover:text-indigo-400 cursor-pointer">{item}</li>
          ))}
        </ul>
      </nav>

      {/* Home Section */}
      <section className="flex items-center justify-center min-h-screen" id="home">
        <div className="text-center md:text-left md:w-1/2 px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 fade-in">Hi, my name is <span className="text-indigo-400">Sarah</span>.</h1>
          <p className="text-xl md:text-2xl mb-6 slide-in-left">I am a web developer.</p>
          <button className="px-6 py-3 bg-indigo-500 rounded-md hover:bg-indigo-600 float">
            Contact Me
          </button>
        </div>
        <div className="hidden md:block md:w-1/2">
          <img
            src="https://via.placeholder.com/300"
            alt="Sarah"
            className="rounded-full shadow-lg float"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="min-h-screen flex items-center justify-between px-6 md:px-20" id="about">
        <div className="md:w-1/2 slide-in-right">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg leading-relaxed">
            I am Sarah, a passionate web developer with a knack for creating interactive and visually appealing designs.
            With a strong background in both front-end and back-end technologies, I aim to build seamless and user-friendly experiences.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center fade-in">
          <img
            src="https://via.placeholder.com/250"
            alt="Sarah"
            className="rounded-full shadow-lg"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="absolute bottom-0 w-full bg-black bg-opacity-70 p-6 text-center">
        <p className="text-lg mb-4">Connect with me:</p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="hover:text-indigo-400">Email</a>
          <a href="#" className="hover:text-indigo-400">LinkedIn</a>
          <a href="#" className="hover:text-indigo-400">GitHub</a>
        </div>
        <p className="mt-4 text-sm">&copy; 2024 Sarah's Space Portfolio</p>
      </footer>
    </div>
  );
};

export default SpacePortfolio5;

// Tailwind Animations Configuration
const tailwindConfig = {
  theme: {
    extend: {
      animation: {
        twinkle: 'twinkle 3s infinite',
        fade: 'fade-in 1.5s ease-out',
        slide: 'slide-in-left 1s ease-out',
        float: 'float 2s ease-in-out infinite',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: 0.3 },
          '50%': { opacity: 1 },
        },
        'fade-in': {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        'slide-in-left': {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
};
