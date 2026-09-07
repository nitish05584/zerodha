import React from "react";

const Pricing = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Left */}
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl pt-8">
            Unbeatable pricing
          </h1>

          <p className="pt-2 text-gray-600 ">
            We pioneered the concept of discount broking and<br/> price
            transparency in India. Flat fees and no hidden charges.
          </p>

          <p className="pt-4 text-blue-500 hover:text-black cursor-pointer">
            See pricing →
          </p>
        </div>

        {/* Right */}
        <div className="flex justify-center">
          <div className="flex items-center ">

            <div className="w-50 h-25 border border-gray-500 flex flex-col items-center justify-center">
              <span className="text-2xl">₹0</span>
              <span className=" text-gray-500 text-sm ">
             Free equity delivery <br/>and direct mutual funds
              </span>
            </div>

            <div className="w-50 h-25 border flex flex-col items-center justify-center border-gray-500">
              <span className="text-2xl">₹20</span>
              <span className="text-gray-500 text-sm">
                Intraday
              </span>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Pricing