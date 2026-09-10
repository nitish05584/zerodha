import React from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  return (
    <div className="w-full min-h-[70vh] flex items-center justify-center">
      <div className="flex flex-col items-center justify-center text-center">

        <p className="text-gray-500 text-sm sm:text-base mb-5">
          You haven't placed any orders today
        </p>

        <Link
          to="/"
          className="px-6 py-2.5 bg-orange-500 text-white rounded-md text-sm font-medium hover:bg-orange-600 transition duration-200 no-underline"
        >
          Get started
        </Link>

      </div>
    </div>
  );
};

export default Orders;