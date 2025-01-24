import React from 'react';

const AnimatedDots = () => {
  return (
    <div className="relative w-full h-10 bg-gray-100 overflow-hidden flex justify-center items-center">
      {/* 5 Dots mit leicht unterschiedlicher Animations-Verzögerung */}
      <span
        className="absolute w-4 h-4 rounded-full bg-blue-500 animate-dotsMovement"
        style={{ animationDelay: '0s' }}
      />
      <span
        className="absolute w-4 h-4 rounded-full bg-blue-500 animate-dotsMovement"
        style={{ animationDelay: '0.2s' }}
      />
      <span
        className="absolute w-4 h-4 rounded-full bg-blue-500 animate-dotsMovement"
        style={{ animationDelay: '0.4s' }}
      />
      <span
        className="absolute w-4 h-4 rounded-full bg-blue-500 animate-dotsMovement"
        style={{ animationDelay: '0.6s' }}
      />
      <span
        className="absolute w-4 h-4 rounded-full bg-blue-500 animate-dotsMovement"
        style={{ animationDelay: '0.8s' }}
      />
    </div>
  );
};

export default AnimatedDots;
