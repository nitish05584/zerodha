import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Menu = () => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const location = useLocation();

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menus = [
    { name: "Dashboard", path: "/", index: 0 },
    { name: "Orders", path: "/orders", index: 1 },
    { name: "Holdings", path: "/holdings", index: 2 },
    { name: "Positions", path: "/positions", index: 3 },
    { name: "Funds", path: "/funds", index: 4 },
    { name: "Apps", path: "/app", index: 5 },
  ];

  const selectedMenu = menus.findIndex((menu) =>
    menu.path === "/" ? location.pathname === "/" : location.pathname.startsWith(menu.path)
  );

  return (
    <div className="flex items-center gap-6">

   
      <Link to="/">
        <img
          src="https://github.com/apna-college/zerodha-clone/blob/main/dashboard/public/logo.png?raw=true"
          alt="Logo"
          className="w-[50px] h-auto object-contain"
        />
      </Link>

      {/* Menu */}
      <div className="flex items-center gap-6">

        <ul className="flex items-center gap-6 m-0 p-0 list-none">
          {menus.map((menu) => (
            <li key={menu.index}>
              <Link
                to={menu.path}
                className="no-underline"
              >
                <p
                  className={`m-0 text-sm cursor-pointer transition-colors duration-200 ${
                    selectedMenu === menu.index
                      ? "text-orange-500 font-medium"
                      : "text-gray-500 hover:text-orange-500"
                  }`}
                >
                  {menu.name}
                </p>
              </Link>
            </li>
          ))}
        </ul>

       
        <div className="h-6 w-px bg-gray-200" />

      
        <div
          className="relative flex items-center gap-2 cursor-pointer"
          onClick={handleProfileClick}
        >
         
          <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
            <span className="text-xs font-medium text-gray-600">
              ZU
            </span>
          </div>

          
          <p className="m-0 text-sm text-gray-600">
            USERID
          </p>

      
          {isProfileDropdownOpen && (
            <div className="absolute right-0 top-12 w-40 bg-white border border-gray-200 rounded-md shadow-lg py-2 z-50">
              <Link
                to="/"
                className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 no-underline"
              >
                Profile
              </Link>

              <Link
                to="/"
                className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 no-underline"
              >
                Settings
              </Link>

              <button
                className="w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-50"
              >
                Logout
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Menu;