import React, { useState, useEffect } from "react";
const ControlButtons = ({ isRunning, handleStartPause, handleRestart }) => (
  <div className="flex space-x-4 mt-8">
    <button
      onClick={handleStartPause}
      className={`px-6 py-2 rounded-full font-bold ${
        isRunning ? "bg-yellow-300 text-white" : "bg-yellow-300 text-black"
      } transition-all duration-300 dark:bg-yellow-700 dark:text-white`}
    >
      {isRunning ? "Pause" : "Start"}
    </button>

    <button
      onClick={handleRestart}
      className={`px-6 py-2 rounded-full font-bold ${
        isRunning ? "bg-sky-800 text-white" : "bg-sky-300 text-black"
      } transition-all duration-300 dark:bg-sky-800 dark:text-white`}
    >
      Restart
    </button>
  </div>
);
export default ControlButtons;