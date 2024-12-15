// App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./components/pages/Home";
import Profile from "./components/pages/Profile";
import Plan from "./components/pages/Plan";
import Settings from "./components/pages/Settings";
import States from "./components/pages/States";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <Router>
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      
      <div className="flex">
        {/* Pass `isDarkMode` to Sidebar */}
        <Sidebar isDarkMode={isDarkMode} />

        {/* Main content */}
        <div className="p-4 flex-1 bg-white dark:bg-gray-900 transition-colors duration-300">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/plan" element={<Plan />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/states" element={<States />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
