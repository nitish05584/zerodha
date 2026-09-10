import React from "react";

const Summary = ({ data, loading }) => {
  const summary = data || {
    user: "User",
    marginAvailable: "3.74k",
    marginsUsed: 0,
    openingBalance: "3.74k",
    holdings: {
      count: 13,
      currentValue: "31.43k",
      investment: "29.88k",
      pnl: "1.55k",
      pnlPercent: 5.2,
    },
  };

  return (
    <div className="w-full">
      <div className="mb-8">
        <h6 className="text-xl sm:text-2xl font-medium text-gray-700">
          {loading ? "Loading..." : `Hi, ${summary.user}!`}
        </h6>

        <hr className="mt-5 border-gray-200" />
      </div>

      <div className="mb-8">
        <p className="mb-5 text-base text-gray-600">Equity</p>

        <div className="flex flex-col gap-6 md:flex-row md:items-center">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-medium text-gray-700 sm:text-3xl">
              {summary.marginAvailable}
            </h3>

            <p className="mt-2 text-sm text-gray-500">Margin available</p>
          </div>

          <hr className="border-gray-200 md:hidden" />

          <div className="space-y-3 md:w-1/2">
            <p className="flex justify-between text-sm text-gray-500">
              <span>Margins used</span>
              <span className="text-gray-700">{summary.marginsUsed}</span>
            </p>

            <p className="flex justify-between text-sm text-gray-500">
              <span>Opening balance</span>
              <span className="text-gray-700">{summary.openingBalance}</span>
            </p>
          </div>
        </div>

        <hr className="mt-7 border-gray-200" />
      </div>

      <div className="mb-8">
        <p className="mb-5 text-base text-gray-600">Holdings ({summary.holdings?.count || 13})</p>

        <div className="flex flex-col gap-6 md:flex-row md:items-center">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-medium text-green-500 sm:text-3xl">
              {summary.holdings?.pnl || "1.55k"}
              <small className="ml-2 text-sm font-medium">+{summary.holdings?.pnlPercent || 5.2}%</small>
            </h3>

            <p className="mt-2 text-sm text-gray-500">P&amp;L</p>
          </div>

          <hr className="border-gray-200 md:hidden" />

          <div className="space-y-3 md:w-1/2">
            <p className="flex justify-between text-sm text-gray-500">
              <span>Current Value</span>
              <span className="text-gray-700">{summary.holdings?.currentValue || "31.43k"}</span>
            </p>

            <p className="flex justify-between text-sm text-gray-500">
              <span>Investment</span>
              <span className="text-gray-700">{summary.holdings?.investment || "29.88k"}</span>
            </p>
          </div>
        </div>

        <hr className="mt-7 border-gray-200" />
      </div>
    </div>
  );
};

export default Summary;