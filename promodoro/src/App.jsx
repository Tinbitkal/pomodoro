import React, { useState } from "react";
import Header from "./components/Header";

const tabsData = [
  {
    label: "Pomodoro",
    value: "pomodoro",
    duration: "25:00",
  },
  {
    label: "Short Break",
    value: "short-break",
    duration: "5:00",
  },
  {
    label: "Long Break",
    value: "long-break",
    duration: "15:00",
  },
];

const TabButton = ({ tab, activeTab, setActiveTab }) => (
  <button
    onClick={() => setActiveTab(tab.value)}
    aria-selected={activeTab === tab.value}
    className={`px-4 py-2 font-semibold transition-all duration-300 ${
      activeTab === tab.value ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-500"
    }`}
  >
    {tab.label}
  </button>
);

const TimeCircle = ({ duration }) => (
  <div className="w-64 h-64 bg-blue-200 rounded-full flex justify-center items-center shadow-lg mx-auto mt-8">
    <span className="text-6xl font-bold text-gray-700">{duration}</span>
  </div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState(tabsData[0]?.value || "");
  const [isRunning, setIsRunning] = useState(false);

  const currentTab = tabsData.find((tab) => tab.value === activeTab);

  const handleStartPause = () => {
    setIsRunning(!isRunning);
  };

  const handleRestart = () => {
    console.log("Restarting the timer...");
    setIsRunning(false);
  };

  return (
    <>
      <Header />

      {/* Main Content Container */}
      <div className="relative p-4 max-w-4xl mx-auto mt-8 rounded-lg overflow-hidden shadow-lg flex flex-col items-center">
        {/* Tabs Navigation */}
        <div className="flex space-x-4 border-b border-gray-200 pb-2 mt-4">
          {tabsData.map((tab) => (
            <TabButton
              key={tab.value}
              tab={tab}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          ))}
        </div>

        {/* Time Circle */}
        {currentTab && (
          <div className="mt-8 flex justify-center items-center flex-grow">
            <TimeCircle duration={currentTab.duration} />
          </div>
        )}

        {/* Buttons below Time Circle */}
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
      </div>
    </>
  );
}
