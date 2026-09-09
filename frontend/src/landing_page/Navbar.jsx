import React, { useState } from "react";
import { TfiMenu } from "react-icons/tfi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full sm:w-full max-w-full box-border py-4 px-4 sm:px-6 md:px-8 shadow sticky top-0 bg-white z-50 overflow-hidden">
      
      <div className="w-full max-w-6xl mx-auto flex items-center justify-between min-w-0">

       
        <Link to="/" className="shrink-0">
          <img
            src="https://raw.githubusercontent.com/SKSingh0703/Zerodha-Clone/049b30a87bcd54ce95a887afcd0d4672c30f3c47/frontend/public/media/images/logo.svg"
            alt="Logo"
            className="w-28 sm:w-32 md:w-36"
          />
        </Link>

      
        <div className="hidden md:flex items-center gap-6 lg:gap-8">

          <div className="flex items-center gap-6 lg:gap-8 text-gray-600">

            <Link to="/signup" className="whitespace-nowrap hover:text-blue-500">
              Signup
            </Link>

            <Link to="/about" className="whitespace-nowrap hover:text-blue-500">
              About
            </Link>

            <Link to="/product" className="whitespace-nowrap hover:text-blue-500">
              Products
            </Link>

            <Link to="/pricing" className="whitespace-nowrap hover:text-blue-500">
              Pricing
            </Link>

            <Link to="/support" className="whitespace-nowrap hover:text-blue-500">
              Support
            </Link>

          </div>

          <TfiMenu className="text-xl cursor-pointer shrink-0" />
        </div>

      
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl shrink-0"
        >
          {isOpen ? <IoClose /> : <TfiMenu />}
        </button>

      </div>

      {isOpen && (
        <div className="md:hidden mt-4 border-t pt-4 w-full">
          <div className="flex flex-col items-center gap-5 text-gray-600">

            <Link to="/signup" onClick={() => setIsOpen(false)}>
              Signup
            </Link>

            <Link to="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>

            <Link to="/product" onClick={() => setIsOpen(false)}>
              Products
            </Link>

            <Link to="/pricing" onClick={() => setIsOpen(false)}>
              Pricing
            </Link>

            <Link to="/support" onClick={() => setIsOpen(false)}>
              Support
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;