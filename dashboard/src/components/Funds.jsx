import React from "react";
import { Link } from "react-router-dom";

const Funds = () => {
  return (
    <div className="w-full">

      
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
        <p className="text-gray-600 text-sm sm:text-base">
          Instant, zero-cost fund transfers with UPI
        </p>

        <div className="flex gap-3">
          <Link
            to="#"
            className="px-5 py-2.5 bg-green-500 text-white rounded-md text-sm font-medium hover:bg-green-600 transition"
          >
            Add funds
          </Link>

          <Link
            to="#"
            className="px-5 py-2.5 bg-blue-500 text-white rounded-md text-sm font-medium hover:bg-blue-600 transition"
          >
            Withdraw
          </Link>
        </div>
      </div>

      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

       
        <div>
          <h2 className="text-xl font-medium text-gray-700 mb-5">
            Equity
          </h2>

          <div className="border border-gray-200 rounded-md overflow-hidden">

            <div className="flex justify-between items-center px-5 py-4">
              <p className="text-gray-600">Available margin</p>
              <p className="text-green-500 font-medium">4,043.10</p>
            </div>

            
            <div className="flex justify-between items-center px-5 py-4">
              <p className="text-gray-600">Used margin</p>
              <p className="font-medium text-gray-700">3,757.30</p>
            </div>

            
            <div className="flex justify-between items-center px-5 py-4">
              <p className="text-gray-600">Available cash</p>
              <p className="font-medium text-gray-700">4,043.10</p>
            </div>

            <hr className="border-gray-200" />

           
            <div className="flex justify-between px-5 py-3">
              <p className="text-gray-600">Opening Balance</p>
              <p className="text-gray-700">4,043.10</p>
            </div>

            <div className="flex justify-between px-5 py-3">
              <p className="text-gray-600">Opening Balance</p>
              <p className="text-gray-700">3736.40</p>
            </div>

            <div className="flex justify-between px-5 py-3">
              <p className="text-gray-600">Payin</p>
              <p className="text-gray-700">4064.00</p>
            </div>

            <div className="flex justify-between px-5 py-3">
              <p className="text-gray-600">SPAN</p>
              <p className="text-gray-700">0.00</p>
            </div>

            <div className="flex justify-between px-5 py-3">
              <p className="text-gray-600">Delivery margin</p>
              <p className="text-gray-700">0.00</p>
            </div>

            <div className="flex justify-between px-5 py-3">
              <p className="text-gray-600">Exposure</p>
              <p className="text-gray-700">0.00</p>
            </div>

            <div className="flex justify-between px-5 py-3">
              <p className="text-gray-600">Options premium</p>
              <p className="text-gray-700">0.00</p>
            </div>

            <hr className="border-gray-200" />

            
            <div className="flex justify-between px-5 py-3">
              <p className="text-gray-600">Collateral (Liquid funds)</p>
              <p className="text-gray-700">0.00</p>
            </div>

            <div className="flex justify-between px-5 py-3">
              <p className="text-gray-600">Collateral (Equity)</p>
              <p className="text-gray-700">0.00</p>
            </div>

            <div className="flex justify-between px-5 py-4 bg-gray-50">
              <p className="font-medium text-gray-700">Total Collateral</p>
              <p className="font-medium text-gray-700">0.00</p>
            </div>

          </div>
        </div>

      
        <div>
          <div className="border border-gray-200 rounded-md p-8 flex flex-col items-center justify-center min-h-[180px] text-center">
            <p className="text-gray-600 mb-5">
              You don't have a commodity account
            </p>

            <Link
              to="#"
              className="px-5 py-2.5 bg-blue-500 text-white rounded-md text-sm font-medium hover:bg-blue-600 transition"
            >
              Open Account
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Funds;