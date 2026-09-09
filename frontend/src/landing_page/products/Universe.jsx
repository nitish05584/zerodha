import React from "react";

const Universe = () => {
  return (
    <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16 py-12">

     
      <div className="text-center py-10">
        <h1 className="text-lg md:text-xl text-gray-600 leading-8">
          Want to know more about our technology stack?
          <br className="md:hidden" />
          Check out the
          <a
            href="#"
            className="text-blue-500 hover:underline pl-1"
          >
            Zerodha.tech blog
          </a>
          .
        </h1>
      </div>


      <div className="text-center py-10">
        <h1 className="text-2xl md:text-3xl text-gray-700 pb-5">
          The Zerodha Universe
        </h1>

        <p className="text-gray-500 md:text-lg leading-7 max-w-2xl mx-auto">
          Extend your trading and investment experience even further
          with our partner platforms.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-16 mt-8">

        
        <div className="flex flex-col items-center text-center">
          <img
            src="https://zerodha.com/static/images/partners/zerodhafundhouse.png"
            alt="Zerodha Fund House"
            className="w-44 h-16 object-contain mb-6"
          />

          <p className="text-gray-500 leading-7 max-w-sm">
            Our asset management venture that is creating simple and
            transparent index funds to help you save for your goals.
          </p>
        </div>

        
        <div className="flex flex-col items-center text-center">
          <img
            src="https://zerodha.com/static/images/products/sensibull-logo.svg"
            alt="Sensibull"
            className="w-44 h-16 object-contain mb-6"
          />

          <p className="text-gray-500 leading-7 max-w-sm">
            Options trading platform that lets you create strategies,
            analyze positions, and examine data points like open
            interest, FII/DII, and more.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <img
            src="https://zerodha.com/static/images/products/streak-logo.png"
            alt="Streak"
            className="w-44 h-16 object-contain mb-6"
          />

          <p className="text-gray-500 leading-7 max-w-sm">
            Systematic trading platform that allows you to create
            and backtest strategies without coding.
          </p>
        </div>

       
        <div className="flex flex-col items-center text-center">
          <img
            src="https://zerodha.com/static/images/products/smallcase-logo.png"
            alt="Smallcase"
            className="w-44 h-16 object-contain mb-6"
          />

          <p className="text-gray-500 leading-7 max-w-sm">
            Thematic investing platform that helps you invest in
            diversified baskets of stocks or ETFs.
          </p>
        </div>

       
        <div className="flex flex-col items-center text-center">
          <img
            src="https://zerodha.com/static/images/partners/tijori.svg"
            alt="Tijori"
            className="w-44 h-16 object-contain mb-6"
          />

          <p className="text-gray-500 leading-7 max-w-sm">
            Investment research platform that helps you discover
            and analyze companies, sectors, and market trends.
          </p>
        </div>

        
        <div className="flex flex-col items-center text-center">
          <img
            src="https://zerodha.com/static/images/products/ditto-logo.png"
            alt="Ditto"
            className="w-44 h-16 object-contain mb-6"
          />

          <p className="text-gray-500 leading-7 max-w-sm">
            Personalized advice on life and health insurance.
            No spam and no mis-selling.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Universe;