import React, { useState } from "react";
import { watchlist } from "../data/data";

const WatchList = () => {
  const [query, setQuery] = useState("");

  const filteredWatchlist = watchlist.filter((stock) =>
    stock.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="h-full w-full bg-white">
      <div className="relative flex items-center border-b border-gray-200 px-4 py-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search eg: infy, bse, nifty fut weekly, gold mcx"
          className="h-9 w-full rounded border border-gray-200 px-3 pr-16 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-blue-400"
        />
        <span className="absolute right-7 text-xs text-gray-400">
          {filteredWatchlist.length} / {watchlist.length}
        </span>
      </div>

      <ul className="m-0 list-none p-0">
        {filteredWatchlist.map((stock, index) => (
          <WatchListItem key={`${stock.name}-${index}`} stock={stock} />
        ))}
      </ul>

    
    </div>
  );
};

const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  return (
    <li
      className="relative border-b border-gray-100"
      onMouseEnter={() => setShowWatchlistActions(true)}
      onMouseLeave={() => setShowWatchlistActions(false)}
    >
      <div className="flex items-center justify-between px-4 py-3 transition hover:bg-gray-50">
        <p className={`m-0 text-sm font-medium ${stock.isDown ? "text-red-500" : "text-green-500"}`}>
          {stock.name}
        </p>

        <div className="flex items-center gap-1">
          <span className="text-xs text-gray-500">{stock.percent}</span>
          <span className={stock.isDown ? "text-base text-red-500" : "text-base text-green-500"}>
            {stock.isDown ? "↓" : "↑"}
          </span>
          <span className="text-sm text-gray-700">{stock.price}</span>
        </div>
      </div>

      {showWatchlistActions && (
        <div className="absolute right-3 top-1/2 z-10 flex -translate-y-1/2 items-center gap-1 rounded-md border border-gray-200 bg-white p-1 shadow-md">
          <button type="button" className="rounded bg-green-500 px-3 py-1.5 text-xs font-medium text-white hover:bg-green-600">
            Buy
          </button>
          <button type="button" className="rounded bg-red-500 px-3 py-1.5 text-xs font-medium text-white hover:bg-red-600">
            Sell
          </button>
          <button type="button" className="flex h-8 w-8 items-center justify-center rounded text-lg text-gray-500 hover:bg-gray-100">
            ▥
          </button>
          <button type="button" className="flex h-8 w-8 items-center justify-center rounded text-xl leading-none text-gray-500 hover:bg-gray-100">
            ⋯
          </button>
        </div>
      )}
    </li>
  );
};

export default WatchList;
