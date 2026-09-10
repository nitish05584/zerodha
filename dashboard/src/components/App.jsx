import React from "react";

const appList = [
  { name: "Nudge", status: "Active" },
  { name: "Brokerage calculator", status: "Available" },
  { name: "Margin insights", status: "New" },
  { name: "Statements", status: "Download" },
];

const App = () => {
  return (
    <div className="w-full">
      <div className="pb-8">
        <h2 className="text-2xl font-medium text-gray-700">Apps</h2>
        <p className="mt-2 text-sm text-gray-500">Useful tools and account resources</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {appList.map((item) => (
          <div key={item.name} className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-lg font-medium text-gray-700">{item.name}</h3>
              <span className="rounded-full bg-amber-100 px-2.5 py-1 text-xs font-medium text-amber-700">
                {item.status}
              </span>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              This tool is ready for use and helps manage your trading workflow more efficiently.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
