import React from "react";

const Hero = () => {
  return (
    <div className="w-full px-6 sm:px-8 md:px-10 lg:px-14 py-10">
      
      <div className="text-center pb-30">
        <h1 className="text-2xl md:text-3xl text-gray-700 pt-10">
          Zerodha Products
        </h1>

        <p className="pt-4 text-gray-500 text-lg md:text-xl">
          Sleek, modern, and intuitive trading platforms
        </p>

        <p className="pt-2 text-gray-600">
          Check out our:{" "}
          <a
            href="#"
            className="text-blue-500 hover:text-blue-600 hover:underline"
          >
            investment offerings →
          </a>
        </p>
      </div>

      <hr className=" border-gray-200" />
      
    </div>
  );
};

export default Hero;