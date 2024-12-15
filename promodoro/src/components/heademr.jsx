import React, { useState, useEffect } from "react";

const Header = ({ isDarkMode, toggleTheme }) => {
  // State to control sidebar visibility
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <>
      {/* Header */}
      <header className="bg-slate-200 dark:bg-gray-800 text-black dark:text-white py-4 px-4 flex justify-between items-center">
        {/* Sidebar Toggle Button */}
        <button onClick={toggleSidebar} className="text-black dark:text-white text-3xl">
          ☰
        </button>

        {/* App Title */}
        <h1 className="font-bold text-3xl">Pomodoro Timer</h1>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="rounded-full bg-gray-200 dark:bg-gray-700 p-2"
        >
          {isDarkMode ? "🌙" : "☀️"}
        </button>
      </header>

      {/* Sidebar */}
      {showSidebar && (
        <div
          className={`fixed top-0 left-0 h-full w-64 shadow-lg z-50
          ${isDarkMode ? "bg-gray-800 text-white" : "bg-slate-200 text-black"}
          transition-all duration-300`}
        >
          <button
            onClick={toggleSidebar}
            className="absolute top-4 right-4 text-3xl"
          >
            ✖
          </button>

          <nav className="mt-8">
            {["Home", "Profile", "Settings", "Logout", "States", "Plan"].map(
              (item) => (
                <div
                  key={item}
                  onClick={() => console.log(`${item} clicked`)}
                  className="px-6 py-4 hover:bg-gray-300 dark:hover:bg-gray-900 cursor-pointer"
                >
                  {item}
                </div>
              )
            )}
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
