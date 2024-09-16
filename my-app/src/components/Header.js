import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  // Subscribing to the stoore using the selector ... 

  const cartItems = useSelector((store) => store.cart.items)
  console.log(cartItems)
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
          <button className="relative flex items-center justify-center p-2 b rounded-lg  focus:outline-none">
            Cart
            <span className='absolute -top-2 -right-2 h-[2.6vmin] w-[2.6vmin] flex items-center justify-center rounded-full bg-red-600 text-white text-[2vmin] font-bold shadow-lg '>
              {cartItems.length===0?0:cartItems.length}
            </span>
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
