// src/DishPageFull.js

import React from 'react';

const DishPageFull = () => {
  return (
    <div className="relative min-h-screen bg-gray-100 flex items-center justify-center">
      <img
        src="https://example.com/your-dish-background.jpg" // Replace with your background image URL
        alt="Dish Background"
        className="absolute inset-0 object-cover w-full h-full z-[-1]"
      />
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto text-center z-10">
        <img
          src="https://example.com/your-dish-image.jpg" // Replace with your dish image URL
          alt="Dish"
          className="w-64 h-64 object-cover mx-auto mb-4"
        />
        <h1 className="text-4xl font-bold mb-4">Delicious Dish Name</h1>
        <p className="text-gray-700 mb-6">
          A brief description of the dish, highlighting its ingredients and taste.
        </p>
        <p className="text-2xl font-semibold mb-6">$19.99</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert('Order placed!');
          }}
          className="space-y-4"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border border-gray-300 rounded"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border border-gray-300 rounded"
            required
          />
          <textarea
            placeholder="Special Instructions"
            className="w-full px-4 py-2 border border-gray-300 rounded"
            rows="4"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition"
          >
            Order Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default DishPageFull;
