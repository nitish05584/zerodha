import React from "react";

const defaultHoldings = [
  { symbol: "TCS", qty: 20, avg: 3450, ltp: 3615, pnl: 3300 },
  { symbol: "INFY", qty: 35, avg: 1425, ltp: 1490, pnl: 2275 },
  { symbol: "RELIANCE", qty: 10, avg: 2820, ltp: 2910, pnl: 900 },
  { symbol: "HDFCBANK", qty: 15, avg: 1680, ltp: 1715, pnl: 525 },
];

const Holding = ({ data, loading }) => {
  const holdings = data && data.length ? data : defaultHoldings;

  return (
    <div className="w-full">
      <div className="mb-8">
        <h2 className="text-2xl font-medium text-gray-700">{loading ? "Loading..." : "Holdings"}</h2>
        <p className="mt-2 text-sm text-gray-500">Your current portfolio positions</p>
      </div>

      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
        <div className="grid grid-cols-[1.4fr_0.8fr_0.9fr_0.9fr_0.9fr] gap-4 border-b border-gray-200 bg-gray-50 px-5 py-3 text-xs font-medium uppercase tracking-wide text-gray-500">
          <span>Stock</span>
          <span>Qty</span>
          <span>Avg</span>
          <span>LTP</span>
          <span>P&amp;L</span>
        </div>

        {holdings.map((item) => (
          <div
            key={item.symbol}
            className="grid grid-cols-[1.4fr_0.8fr_0.9fr_0.9fr_0.9fr] gap-4 border-b border-gray-200 px-5 py-4 text-sm last:border-b-0"
          >
            <span className="font-medium text-gray-700">{item.symbol}</span>
            <span className="text-gray-600">{item.qty}</span>
            <span className="text-gray-600">₹{item.avg}</span>
            <span className="text-gray-600">₹{item.ltp}</span>
            <span className="text-green-600">₹{item.pnl}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Holding;
