import React from "react";

const ScrollDownArrow = () => {
  return (
    <a
      href="#statistics" 
      className="flex flex-col items-center  w-max gap-2 text-gray-800 cursor-pointer hover:text-gray-600 mx-auto"
    >
      <span className="text-sm">Scroll Down</span>
      
      {/* Down arrow icon with bounce animation */}
      <svg
        className="h-8 w-8 animate-bounce"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </a>
  );
};

export default ScrollDownArrow;
