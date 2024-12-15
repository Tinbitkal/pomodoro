import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = ({ isDarkMode, toggleTheme }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  // Sync with document class for dark mode
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleSidebar = () => setShowSidebar((prev) => !prev);
  const toggleThemeHandler = () => toggleTheme();
  const toggleMenu = () => setShowMenu((prev) => !prev);

  const handleMenuItemClick = (option) => {
    console.log(`${option} clicked`);
    setShowMenu(false);
  };

  return (
    <div className="min-h-screen transition-colors duration-300 bg-white text-black dark:bg-gray-900 dark:text-white">
      
      {/* Header */}
      <header className="bg-slate-400 text-white py-4 px-4 flex justify-between items-center relative dark:bg-gray-800">
        {/* Hamburger Icon */}
        <button onClick={toggleSidebar} className="text-white text-3xl">
          ☰
        </button>

        {/* App Title */}
        <h1 className="font-bold text-3xl">Pomodoro Timer</h1>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleThemeHandler}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-800 shadow-md dark:bg-gray-700 dark:text-yellow-400 transition-colors duration-300"
        >
          {isDarkMode ? "🌙" : "☀️"}
        </button>

        {/* Profile Icon */}
        <div className="relative">
          <button onClick={toggleMenu} className="rounded-full overflow-hidden w-10 h-10">
            <img
              src="https://i.pravatar.cc/300"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </button>

          {/* Dropdown Menu */}
          {showMenu && (
            <div className="absolute right-0 mt-2 bg-white text-black dark:bg-gray-800 dark:text-white rounded-lg shadow-lg py-2 w-48">
              {["Profile", "Plan", "States", "Logout"].map((item) => (
                <div
                  key={item}
                  onClick={() => handleMenuItemClick(item)}
                  className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Sidebar */}
      {showSidebar && (
        <div className={`fixed top-0 left-0 h-full w-64 shadow-lg z-50 ${isDarkMode ? "bg-gray-800 text-white" : "bg-slate-200 text-black"}`}>
          <button
            onClick={toggleSidebar}
            className="absolute top-4 right-4 text-3xl"
          >
            ✖
          </button>

          <nav className="mt-8">
            {["Home", "Profile", "Plan", "Settings", "States", "Logout"].map(
              (item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  onClick={toggleSidebar}  // Close sidebar on link click
                  className="block px-6 py-4 hover:bg-gray-400 dark:hover:bg-gray-900 cursor-pointer"
                >
                  {item}
                </Link>
              )
            )}
          </nav>
        </div>
      )}
    </div>
  );
};

export default Header;
