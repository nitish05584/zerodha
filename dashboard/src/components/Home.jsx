import React from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-white">
     
      <TopBar />

      <main className="w-full">
        <Dashboard />
      </main>
    </div>
  );
};

export default Home;
