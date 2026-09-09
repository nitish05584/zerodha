import React from "react";

function Team() {
  return (
    <div className="w-full px-6 sm:px-8 md:px-10 lg:px-14 py-10">


      <h1 className="text-2xl text-center text-gray-700 pb-10">
        People
      </h1>


      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">


        <div className="flex flex-col items-center justify-center">
          <img
            src="https://zerodha.com/static/images/nithin-kamath.jpg"
            alt="Nithin Kamath"
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-60 md:h-60 rounded-full object-cover"
          />

          <h2 className="text-xl pt-5 text-gray-700">
            Nithin Kamath
          </h2>

          <p className="text-gray-500 pt-2">
            Founder & CEO
          </p>
        </div>

        {/* Description */}
        <div className="text-gray-600 text-center md:text-left">
          <p className="leading-8">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p className="leading-8 pt-5">
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p className="leading-8 pt-5">
            Playing basketball is his zen.
          </p>

          <p className="pt-5">
            Connect on{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Homepage
            </a>{" "}
            /{" "}
            <a href="#" className="text-blue-600 hover:underline">
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Twitter
            </a>
          </p>
        </div>



      </div>
    </div>
  );
}

export default Team;