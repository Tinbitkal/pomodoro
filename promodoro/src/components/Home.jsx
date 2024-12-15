import React, { useState } from "react";
import TabButton from "../TabButton";
import TimeCircle from "../TimeCircle";
import ControlButtons from "../ControlButtons";

const tabsData = [
  { label: "Pomodoro", value: "pomodoro", duration: "25:00" },
  { label: "Short Break", value: "short-break", duration: "5:00" },
  { label: "Long Break", value: "long-break", duration: "15:00" },
];

const Home = () => {
  const [activeTab, setActiveTab] = useState(tabsData[0]?.value);
  const [isRunning, setIsRunning] = useState(false);
  const [resetSignal, setResetSignal] = useState(false);

  const handleStartPause = () => setIsRunning((prev) => !prev);
  const handleRestart = () => {
    setIsRunning(false);
    setResetSignal((prev) => !prev);
  };

  const currentTab = tabsData.find((tab) => tab.value === activeTab);

  return (
    <div>
      <div className="flex space-x-4 mt-4">
        {tabsData.map((tab) => (
          <TabButton
            key={tab.value}
            tab={tab}
            activeTab={activeTab}
            setActiveTab={(value) => setActiveTab(value)}
          />
        ))}
      </div>

      {currentTab && (
        <TimeCircle
          duration={currentTab.duration}
          isRunning={isRunning}
          resetSignal={resetSignal}
        />
      )}
      <ControlButtons
        isRunning={isRunning}
        handleStartPause={handleStartPause}
        handleRestart={handleRestart}
      />
    </div>
  );
};

export default Home;
