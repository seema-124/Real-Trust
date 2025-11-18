import React from "react";

const TopNav = () => {
  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50 py-2">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 flex justify-between items-center h-16">
        
        <div className="text-2xl font-bold text-blue-600 cursor-pointer">
          <img src="/logo.svg"
            alt="logo"
            className="h-80 w-40"/>
        </div>

        <ul className="hidden lg:flex space-x-16 text-gray-700 font-medium">
          <li className="hover:text-blue-600 cursor-pointer py-3">HOME</li>
          <li className="hover:text-blue-600 cursor-pointer py-3">SERVICES</li>
          <li className="hover:text-blue-600 cursor-pointer py-3">ABOUT PRODUCTS</li>
          <li className="hover:text-blue-600 cursor-pointer py-3">TESTIMONIALS</li>
          <button type="submit" className="rounded-lg bg-orange-500 text-white font-bold px-9 py-2">CONTACT</button>
        </ul>

        <div className="lg:hidden cursor-pointer text-gray-700">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
