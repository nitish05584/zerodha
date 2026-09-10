import React from "react";
import { Link } from "react-router-dom";

const Orders = ({ data, loading }) => {
  const orders = data && data.orders ? data.orders : [];

  return (
    <div className="flex min-h-[70vh] w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center text-center">
        <p className="mb-5 text-sm text-gray-500 sm:text-base">
          {loading ? "Loading orders..." : data?.message || "You haven't placed any orders today"}
        </p>

        {orders.length === 0 && (
          <Link
            to="/"
            className="rounded-md bg-orange-500 px-6 py-2.5 text-sm font-medium text-white no-underline transition duration-200 hover:bg-orange-600"
          >
            Get started
          </Link>
        )}
      </div>
    </div>
  );
};

export default Orders;