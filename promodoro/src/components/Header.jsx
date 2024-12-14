import React, { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleMenu = () => setShowMenu((prev) => !prev);
  const toggleSidebar = () => setShowSidebar((prev) => !prev);

  const handleMenuItemClick = (option) => {
    console.log(`${option} clicked`);
    setShowMenu(false);
  };

  return (
    <div>
      {/* Header */}
      <header className="bg-gray-900 text-white py-4 px-4 flex justify-between items-center relative">
        
        {/* Hamburger Icon */}
        <button onClick={toggleSidebar} className="text-white text-3xl">
          ☰
        </button>

        <h1 className="font-bold text-3xl">Pomodoro Timer</h1>

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
            <div className="absolute right-0 mt-2 bg-white text-black rounded-lg shadow-lg py-2 w-48">
              {["Profile", "Account", "Dashboard", "Logout"].map((item) => (
                <div
                  key={item}
                  onClick={() => handleMenuItemClick(item)}
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
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
        <div className="fixed top-0 left-0 h-full w-64 bg-gray-800 text-white shadow-lg z-50">
          <button
            onClick={toggleSidebar}
            className="absolute top-4 right-4 text-3xl"
          >
            ✖
          </button>
          <nav className="mt-8">
            {["Home", "Profile", "Settings", "Logout","states","plan"].map((item) => (
              <div
                key={item}
                onClick={() => console.log(`${item} clicked`)}
                className="px-6 py-4 hover:bg-gray-700 cursor-pointer"
              >
                {item}
              </div>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};
  
export default Header;
