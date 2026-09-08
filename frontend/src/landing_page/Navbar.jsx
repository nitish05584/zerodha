import React from "react";
import { TfiMenu } from "react-icons/tfi";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="py-5 px-4 sm:px-6 md:px-8 shadow sticky top-0 bg-white z-50">
      
      <div className="max-w-6xl mx-auto flex items-center justify-between">

       <Link to={"/"}> <img
          src="https://raw.githubusercontent.com/SKSingh0703/Zerodha-Clone/049b30a87bcd54ce95a887afcd0d4672c30f3c47/frontend/public/media/images/logo.svg"
          alt="Logo"
          className="w-32 sm:w-36 md:w-40"
        /></Link>

        
        <form className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8 text-gray-600">

            <Link to={"signup"} className="cursor-pointer hover:text-blue-500">
              Signup
            </Link>

            <Link to={"about"} className="cursor-pointer hover:text-blue-500">
              About
            </Link>

            <Link to={"product"} className="cursor-pointer hover:text-blue-500">
              Products
            </Link>

            <Link to={"pricing"} className="cursor-pointer hover:text-blue-500">
              Pricing
            </Link>

            <Link to={"support"} className="cursor-pointer hover:text-blue-500">
              Support
            </Link>
          </ul>

          <TfiMenu className="text-xl cursor-pointer" />
        </form>

      
        <button className="md:hidden text-2xl cursor-pointer">
          <TfiMenu />
        </button>

      </div>
    </nav>
  );
};

export default Navbar;