import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="w-full fixed px-[10vmin] top-0 left-0 bg-black p-4 flex justify-between items-center">
      {/* Logo or Title */}
      <div className="text-white text-2xl font-bold">
        My Website
      </div>

      {/* Navigation Links */}
      <nav>
        <ul className="flex space-x-8 text-white font-medium">
          <Link to='/home' className="hover:text-gray-200 cursor-pointer transition duration-200" >Home</Link>
          <Link to='/about' className="hover:text-gray-200 cursor-pointer transition duration-200" >About</Link>
          <Link to='/Services' className="hover:text-gray-200 cursor-pointer transition duration-200" >Services</Link>
          <Link to='/contact' className="hover:text-gray-200 cursor-pointer transition duration-200" >Contact</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
