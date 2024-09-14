import React from 'react';

const Card = () => {
  return (
    <div className='h-[30vmin] w-[30vmin] bg-gray-300 rounded-lg m-8 relative overflow-hidden'>
      {/* Shimmer effect */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200 to-transparent"
        style={{
          animation: 'shimmer 1.5s infinite  linear',
          transform: 'translateX(-100%)'
        }}
      ></div>
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
};

export default Card;
