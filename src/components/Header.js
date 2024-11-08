// src/components/Header.js
import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (  
    <header className="bg-white shadow-md fixed w-full z-10">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">Portfolio</div>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          <li><a href="#home" className="hover:text-blue-600">Home</a></li>
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
          <li><a href="#qualification" className="hover:text-blue-600">Qualification</a></li>
          <li><a href="#specialization" className="hover:text-blue-600">Services</a></li>
          <li><a href="#portfolio" className="hover:text-blue-600">Portfolio</a></li>
          <li><a href="#blog" className="hover:text-blue-600">Blog</a></li>
          <li><a href="#testimonial" className="hover:text-blue-600">Testimonials</a></li>
          <li><a href="#mycontact" className="hover:text-blue-600">Contact</a></li>
        </ul>
        
        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            className="text-blue-600 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg fixed inset-x-0 top-14 z-10">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li><a href="#home" className="hover:text-blue-600">Home</a></li>
            <li><a href="#about" className="hover:text-blue-600">About</a></li>
            <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
            <li><a href="#qualification" className="hover:text-blue-600">Qualification</a></li>
            <li><a href="#specialization" className="hover:text-blue-600">Services</a></li>
            <li><a href="#portfolio" className="hover:text-blue-600">Portfolio</a></li>
            <li><a href="#blog" className="hover:text-blue-600">Blog</a></li>
            <li><a href="#testimonial" className="hover:text-blue-600">Testimonials</a></li>
            <li><a href="#mycontact" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
