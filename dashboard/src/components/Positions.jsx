import React from "react";

const defaultPositions = [
  { symbol: "NIFTY 50", qty: 1, side: "Buy", ltp: 24580, pnl: 220 },
  { symbol: "BANKNIFTY", qty: 2, side: "Sell", ltp: 52840, pnl: -380 },
  { symbol: "TCS", qty: 5, side: "Buy", ltp: 3615, pnl: 520 },
];

const Positions = ({ data, loading }) => {
  const positions = data && data.length ? data : defaultPositions;

  return (
    <div className="w-full">
      <div className="mb-8">
        <h2 className="text-2xl font-medium text-gray-700">{loading ? "Loading..." : "Positions"}</h2>
        <p className="mt-2 text-sm text-gray-500">Open futures and options positions</p>
      </div>

      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
        <div className="grid grid-cols-[1.4fr_0.8fr_1fr_1fr_1fr] gap-4 border-b border-gray-200 bg-gray-50 px-5 py-3 text-xs font-medium uppercase tracking-wide text-gray-500">
          <span>Symbol</span>
          <span>Qty</span>
          <span>Side</span>
          <span>LTP</span>
          <span>P&amp;L</span>
        </div>

        {positions.map((item) => (
          <div
            key={item.symbol}
            className="grid grid-cols-[1.4fr_0.8fr_1fr_1fr_1fr] gap-4 border-b border-gray-200 px-5 py-4 text-sm last:border-b-0"
          >
            <span className="font-medium text-gray-700">{item.symbol}</span>
            <span className="text-gray-600">{item.qty}</span>
            <span className={item.side === "Buy" ? "text-green-600" : "text-red-500"}>{item.side}</span>
            <span className="text-gray-600">₹{item.ltp}</span>
            <span className={item.pnl >= 0 ? "text-green-600" : "text-red-500"}>₹{item.pnl}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Positions;
