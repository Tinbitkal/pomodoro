import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ isDarkMode }) => {
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <>
      {showSidebar && (
        <div
          className={`fixed top-0 left-0 h-full w-60 shadow-lg z-30
          ${isDarkMode ? "bg-gray-800 text-white" : "bg-slate-200 text-black"}
          transition-all duration-300`}
        >
          {/* Close Button */}
          <button
            onClick={toggleSidebar}
            className="absolute top-4 right-4 text-3xl"
          >
            ✖
          </button>

          {/* Navigation Links */}
          <nav className="mt-8">
            {[
              { name: "Home", path: "/" },
              { name: "Profile", path: "/profile" },
              { name: "Plan", path: "/plan" },
              { name: "Settings", path: "/settings" },
              { name: "States", path: "/states" },
              { name: "Logout", path: "/logout" },
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={toggleSidebar}
                className={`block px-6 py-4 hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default Sidebar;
