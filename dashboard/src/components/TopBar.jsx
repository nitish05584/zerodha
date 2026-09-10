import React from "react";
import Menu from "./Menu";

const TopBar = () => {
  return (
    <div className="w-full h-16 border-b border-gray-200 flex items-center justify-between px-4 sm:px-6 md:px-8 bg-white">

     
      <div className="flex items-center gap-6 sm:gap-10">

       
        <div className="flex items-center gap-2">
          <p className="text-sm font-medium text-gray-600">
            NIFTY 50
          </p>

          <p className="text-sm text-gray-500">
            100.2
          </p>

          <p className="text-sm text-gray-400">
            0.00%
          </p>
        </div>

      
        <div className="flex items-center gap-2">
          <p className="text-sm font-medium text-gray-600">
            SENSEX
          </p>

          <p className="text-sm text-gray-500">
            100.2
          </p>

          <p className="text-sm text-gray-400">
            0.00%
          </p>
        </div>

      </div>

      {/* Menu */}
      <Menu />

    </div>
  );
};

export default TopBar;