import React, { useState, useEffect } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Sync with document class
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleMenu = () => setShowMenu((prev) => !prev);
  const toggleSidebar = () => setShowSidebar((prev) => !prev);
  const toggleTheme = () => setIsDarkMode((prev) => !prev);

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

        <h1 className="font-bold text-3xl">Pomodoro Timer</h1>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-800 shadow-md dark:bg-gray-700 dark:text-yellow-400 transition-colors duration-300"
          aria-label="Toggle theme"
        >
          {isDarkMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M21.752 15.002A9.001 9.001 0 0112.999 3a9.001 9.001 0 008.752 12.002zm-1.843 1.482A7.002 7.002 0 019.516 2.259a7.003 7.003 0 1110.393 14.225z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M12 2a1 1 0 011 1v2a1 1 0 01-2 0V3a1 1 0 011-1zm5.657 2.343a1 1 0 011.414 1.414l-1.415 1.415a1 1 0 11-1.414-1.415l1.415-1.414zM21 11a1 1 0 01-1-1h-2a1 1 0 010-2h2a1 1 0 011 1v2zm-3.535 7.778a1 1 0 010 1.414l-1.415 1.415a1 1 0 01-1.414-1.414l1.415-1.415a1 1 0 011.414 0zm-5.657 2.343a1 1 0 011-1v-2a1 1 0 01-2 0v2a1 1 0 011 1zm-7.778-3.535a1 1 0 01-1.414 0L2.343 17.05a1 1 0 011.414-1.414l1.415 1.415a1 1 0 010 1.414zm0-10.607a1 1 0 00-1.414-1.415L2.343 7.05a1 1 0 101.414 1.414l1.415-1.415zm2.343 12.95a9 9 0 100-18 9 9 0 000 18zm0-2a7 7 0 110-14 7 7 0 010 14z"
                clipRule="evenodd"
              />
            </svg>
          )}
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
            <div
              className={`absolute right-0 mt-2 bg-white text-black dark:bg-gray-800 dark:text-white rounded-lg shadow-lg py-2 w-48`}
            >
              {["Profile", "Account", "Dashboard", "Logout"].map((item) => (
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
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white dark:bg-gray-200 dark:text-black shadow-lg z-50`}
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
                  className="px-6 py-4 hover:bg-gray-700 dark:hover:bg-gray-300 cursor-pointer"
                >
                  {item}
                </div>
              )
            )}
          </nav>
        </div>
      )}
    </div>
  );
};

export default Header;
