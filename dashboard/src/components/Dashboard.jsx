import React from "react";
import { Route, Routes } from "react-router-dom";
import Summary from "./Summary";
import Orders from "./Orders";
import Holding from "./Holding";
import Positions from "./Positions";
import Funds from "./Funds";
import App from "./App";
import WatchList from "./WatchList";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen w-full bg-white">
      <div className="w-full border-r border-gray-200 md:w-[35%] lg:w-[30%]">
        <WatchList />
      </div>

      <div className="w-full px-5 py-6 sm:px-8 md:w-[65%] md:px-10 lg:w-[70%]">
        <Routes>
          <Route path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holding />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/app" element={<App />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;