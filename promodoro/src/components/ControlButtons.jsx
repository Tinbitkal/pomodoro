// components/ControlButtons.js
import React from "react";

const ControlButtons = ({ isRunning, handleStartPause, handleRestart }) => (
  <div className="flex space-x-4 mt-8">
    <button
      onClick={handleStartPause}
      className={`px-6 py-2 rounded-full font-bold ${
        isRunning ? "bg-red-500 text-white" : "bg-yellow-300 text-black"
      } transition-all duration-300`}
    >
      {isRunning ? "Pause" : "Start"}
    </button>

    <button
      onClick={handleRestart}
      className="px-6 py-2 rounded-full font-bold bg-green-500 text-white transition-all duration-300"
    >
      Restart
    </button>
  </div>
);

export default ControlButtons;
