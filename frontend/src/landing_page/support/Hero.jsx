import React from "react";

const Hero = () => {
  return (
    <div className="w-full bg-blue-600 px-6 md:px-10 py-12">
      
      <div className="max-w-6xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          
          <div className="text-white text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-medium">
              Support Portal
            </h1>

            <p className="pt-4 text-sm md:text-base text-blue-100">
              Search for an answer or browse help topics to create a ticket
            </p>

            
            <div className="pt-6">
              <input
                type="text"
                placeholder="Search for a topic..."
                className="w-full md:w-[450px] px-4 py-3 rounded-md bg-white text-gray-700 placeholder-gray-400 border-none outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
          </div>

          
          <div className="hidden md:block">
          </div>

        </div>

      </div>
    </div>
  );
};

export default Hero;