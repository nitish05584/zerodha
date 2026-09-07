import React from "react";

const Hero = () => {
  return (
    <div className="w-full">
      <div className="px-4 sm:px-6 md:px-10 lg:px-16 py-8 sm:py-10 md:py-12 flex flex-col items-center">
        
        {/* Hero Image */}
        <img
          src="https://zerodha.com/static/images/landing.svg"
          alt="Hero Image"
          className="w-full max-w-4xl h-auto"
        />

        {/* Heading */}
        <h1 className="text-center pt-8 sm:pt-10 md:pt-14 text-2xl sm:text-3xl md:text-4xl font-medium text-gray-800">
          Invest in everything
        </h1>

        {/* Description */}
        <p className="text-center pt-3  sm:text-lg md:text-xl text-gray-600 max-w-3xl ">
          Online platform to invest in stocks, IPOs, derivatives, mutual
          funds, ETFs, bonds, and more.
        </p>

        {/* Button */}
        <div className="pt-8 sm:pt-10">
          <button
            className="
              px-8 sm:px-10
              py-2.5 sm:py-3
              bg-blue-500
              border border-gray-300
              rounded
              text-white
               sm:text-lg
              hover:bg-black
              cursor-pointer
              transition
              duration-300
            "
          >
            Sign up for free
          </button>
        </div>

      </div>
    </div>
  );
};

export default Hero;