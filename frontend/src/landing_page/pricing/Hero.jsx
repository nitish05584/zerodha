import React from "react";

const Hero = () => {
  return (
    <div className="w-full px-6 md:px-8 lg:px-16 py-10">

      <div className="text-center pt-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-gray-700 tracking-wide">
          Charges
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl text-gray-500 pt-2">
          List of all charges and taxes
        </p>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-16">

        
        <div className="flex flex-col items-center text-center">
          <img
            src="https://zerodha.com/static/images/pricing-eq.svg"
            alt="Equity Delivery"
            className="w-56 md:w-64 lg:w-72"
          />

          <h2 className="text-xl text-gray-700 pt-6 font-bold">
            Free equity delivery
          </h2>

          <p className="text-gray-500 leading-7 pt-3 max-w-sm">
            All equity delivery investments (NSE, BSE), are absolutely
            free — ₹0 brokerage.
          </p>
        </div>

        {/* Intraday */}
        <div className="flex flex-col items-center text-center">
          <img
            src="https://zerodha.com/static/images/other-trades.svg"
            alt="Intraday Trading"
            className="w-56 md:w-64 lg:w-72"
          />

          <h2 className="text-xl text-gray-700 pt-6 font-bold">
            Intraday and F&O
          </h2>

          <p className="text-gray-500 leading-7 mt-3 max-w-sm">
            Flat ₹20 or 0.03% per executed order, whichever is lower,
            for intraday and F&O trades.
          </p>
        </div>

        {/* Mutual Funds */}
        <div className="flex flex-col items-center text-center">
          <img
            src="https://zerodha.com/static/images/pricing-eq.svg"
            alt="Mutual Funds"
            className="w-56 md:w-64 lg:w-72"
          />

          <h2 className="text-xl text-gray-700 pt-6 font-bold">
            Free direct mutual funds
          </h2>

          <p className="text-gray-500 leading-7 mt-3 max-w-sm">
            Invest in direct mutual funds with zero commission and
            zero brokerage.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Hero;