import React from "react";

const Summary = () => {
  return (
    <div className="w-full">

      
      <div className="mb-8">
        <h6 className="text-xl sm:text-2xl font-medium text-gray-700">
          Hi, User!
        </h6>

        <hr className="mt-5 border-gray-200" />
      </div>

      <div className="mb-8">

        <p className="text-base text-gray-600 mb-5">
          Equity
        </p>

        <div className="flex flex-col md:flex-row md:items-center gap-6">

      
          <div className="md:w-1/2">
            <h3 className="text-2xl sm:text-3xl font-medium text-gray-700">
              3.74k
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Margin available
            </p>
          </div>

          <hr className="md:hidden border-gray-200" />

          
          <div className="md:w-1/2 space-y-3">

            <p className="flex justify-between text-sm text-gray-500">
              <span>Margins used</span>
              <span className="text-gray-700">0</span>
            </p>

            <p className="flex justify-between text-sm text-gray-500">
              <span>Opening balance</span>
              <span className="text-gray-700">3.74k</span>
            </p>

          </div>

        </div>

        <hr className="mt-7 border-gray-200" />
      </div>

      
      <div className="mb-8">

        <p className="text-base text-gray-600 mb-5">
          Holdings (13)
        </p>

        <div className="flex flex-col md:flex-row md:items-center gap-6">

       
          <div className="md:w-1/2">

            <h3 className="text-2xl sm:text-3xl font-medium text-green-500">
              1.55k

              <small className="ml-2 text-sm font-medium">
                +5.20%
              </small>
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              P&amp;L
            </p>

          </div>

          <hr className="md:hidden border-gray-200" />

        
          <div className="md:w-1/2 space-y-3">

            <p className="flex justify-between text-sm text-gray-500">
              <span>Current Value</span>
              <span className="text-gray-700">31.43k</span>
            </p>

            <p className="flex justify-between text-sm text-gray-500">
              <span>Investment</span>
              <span className="text-gray-700">29.88k</span>
            </p>

          </div>

        </div>

        <hr className="mt-7 border-gray-200" />
      </div>

    </div>
  );
};

export default Summary;