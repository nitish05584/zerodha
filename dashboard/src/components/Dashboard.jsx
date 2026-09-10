import React, { useEffect, useState } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Summary from "./Summary";
import Orders from "./Orders";
import Holding from "./Holding";
import Positions from "./Positions";
import Funds from "./Funds";
import App from "./App";
import WatchList from "./WatchList";

const api = axios.create({
  baseURL: "https://zerodha-2-o0cu.onrender.com/api/dashboard",
});

const defaultSummary = {
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

const defaultOrders = {
  message: "You haven't placed any orders today",
  orders: [],
};

const Dashboard = () => {
  const [summary, setSummary] = useState(defaultSummary);
  const [orders, setOrders] = useState(defaultOrders);
  const [holdings, setHoldings] = useState([]);
  const [positions, setPositions] = useState([]);
  const [funds, setFunds] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [summaryRes, ordersRes, holdingsRes, positionsRes, fundsRes] = await Promise.all([
          api.get("/summary"),
          api.get("/orders"),
          api.get("/holdings"),
          api.get("/positions"),
          api.get("/funds"),
        ]);

        setSummary(summaryRes.data || defaultSummary);
        setOrders(ordersRes.data || defaultOrders);
        setHoldings(holdingsRes.data || []);
        setPositions(positionsRes.data || []);
        setFunds(fundsRes.data || null);
      } catch (error) {
        console.error("Dashboard fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div className="flex min-h-screen w-full bg-white">
      <div className="w-full border-r border-gray-200 md:w-[35%] lg:w-[30%]">
        <WatchList />
      </div>

      <div className="w-full px-5 py-6 sm:px-8 md:w-[65%] md:px-10 lg:w-[70%]">
        <Routes>
          <Route path="/" element={<Summary data={summary} loading={loading} />} />
          <Route path="/orders" element={<Orders data={orders} loading={loading} />} />
          <Route path="/holdings" element={<Holding data={holdings} loading={loading} />} />
          <Route path="/positions" element={<Positions data={positions} loading={loading} />} />
          <Route path="/funds" element={<Funds data={funds} loading={loading} />} />
          <Route path="/app" element={<App />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;