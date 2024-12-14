import React, { useState } from "react";
import Header from "./components/Header";
import TabButton from "./components/TabButton";
import TimeCircle from "./components/TimeCircle";
import ControlButtons from "./components/ControlButtons";

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
        {currentTab && <TimeCircle duration={currentTab.duration} />}

        {/* Control Buttons */}
        <ControlButtons
          isRunning={isRunning}
          handleStartPause={handleStartPause}
          handleRestart={handleRestart}
        />
      </div>
    </>
  );
}
