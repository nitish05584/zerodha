import React from "react";
import { Link } from "react-router-dom";

const defaultFunds = {
  availableMargin: "4,043.10",
  usedMargin: "3,757.30",
  availableCash: "4,043.10",
  openingBalance: "4,043.10",
  payin: "4064.00",
  span: "0.00",
  deliveryMargin: "0.00",
  exposure: "0.00",
  optionsPremium: "0.00",
  collateralLiquid: "0.00",
  collateralEquity: "0.00",
  totalCollateral: "0.00",
};

const Funds = ({ data, loading }) => {
  const funds = data || defaultFunds;

  return (
    <div className="w-full">
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-gray-600 sm:text-base">
          {loading ? "Loading funds..." : "Instant, zero-cost fund transfers with UPI"}
        </p>

        <div className="flex gap-3">
          <Link
            to="#"
            className="rounded-md bg-green-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-green-600"
          >
            Add funds
          </Link>

          <Link
            to="#"
            className="rounded-md bg-blue-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-600"
          >
            Withdraw
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div>
          <h2 className="mb-5 text-xl font-medium text-gray-700">Equity</h2>

          <div className="overflow-hidden rounded-md border border-gray-200">
            <div className="flex items-center justify-between px-5 py-4">
              <p className="text-gray-600">Available margin</p>
              <p className="font-medium text-green-500">{funds.availableMargin}</p>
            </div>

            <div className="flex items-center justify-between px-5 py-4">
              <p className="text-gray-600">Used margin</p>
              <p className="font-medium text-gray-700">{funds.usedMargin}</p>
            </div>

            <div className="flex items-center justify-between px-5 py-4">
              <p className="text-gray-600">Available cash</p>
              <p className="font-medium text-gray-700">{funds.availableCash}</p>
            </div>

            <hr className="border-gray-200" />

            <div className="flex justify-between px-5 py-3">
              <p className="text-gray-600">Opening Balance</p>
              <p className="text-gray-700">{funds.openingBalance}</p>
            </div>

            <div className="flex justify-between px-5 py-3">
              <p className="text-gray-600">Payin</p>
              <p className="text-gray-700">{funds.payin}</p>
            </div>

            <div className="flex justify-between px-5 py-3">
              <p className="text-gray-600">SPAN</p>
              <p className="text-gray-700">{funds.span}</p>
            </div>

            <div className="flex justify-between px-5 py-3">
              <p className="text-gray-600">Delivery margin</p>
              <p className="text-gray-700">{funds.deliveryMargin}</p>
            </div>

            <div className="flex justify-between px-5 py-3">
              <p className="text-gray-600">Exposure</p>
              <p className="text-gray-700">{funds.exposure}</p>
            </div>

            <div className="flex justify-between px-5 py-3">
              <p className="text-gray-600">Options premium</p>
              <p className="text-gray-700">{funds.optionsPremium}</p>
            </div>

            <hr className="border-gray-200" />

            <div className="flex justify-between px-5 py-3">
              <p className="text-gray-600">Collateral (Liquid funds)</p>
              <p className="text-gray-700">{funds.collateralLiquid}</p>
            </div>

            <div className="flex justify-between px-5 py-3">
              <p className="text-gray-600">Collateral (Equity)</p>
              <p className="text-gray-700">{funds.collateralEquity}</p>
            </div>

            <div className="flex justify-between bg-gray-50 px-5 py-4">
              <p className="font-medium text-gray-700">Total Collateral</p>
              <p className="font-medium text-gray-700">{funds.totalCollateral}</p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex min-h-[180px] flex-col items-center justify-center rounded-md border border-gray-200 p-8 text-center">
            <p className="mb-5 text-gray-600">You don't have a commodity account</p>

            <Link
              to="#"
              className="rounded-md bg-blue-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-600"
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