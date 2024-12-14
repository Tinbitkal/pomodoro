import React, { useState } from "react";
import Header from "./components/Header";
import TabButton from "./components/TabButton";
import TimeCircle from "./components/TimeCircle";
import ControlButtons from "./components/ControlButtons";

const tabsData = [
  { label: "Pomodoro", value: "pomodoro", duration: "25:00" },
  { label: "Short Break", value: "short-break", duration: "5:00" },
  { label: "Long Break", value: "long-break", duration: "15:00" },
];

export default function App() {
  const [activeTab, setActiveTab] = useState(tabsData[0]?.value);
  const [isRunning, setIsRunning] = useState(false);
  const [resetSignal, setResetSignal] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  const currentTab = tabsData.find((tab) => tab.value === activeTab);

  const handleStartPause = () => setIsRunning((prev) => !prev);

  const handleRestart = () => {
    setIsRunning(false);
    setResetSignal((prev) => !prev);
  };

  return (
    <>
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      
      <div className="relative p-4 max-w-4xl mx-auto mt-8 rounded-lg shadow-lg bg-white dark:bg-gray-900">
        <div className="flex space-x-4 border-b border-gray-200 pb-2 mt-4">
          {tabsData.map((tab) => (
            <TabButton
              key={tab.value}
              tab={tab}
              activeTab={activeTab}
              setActiveTab={(value) => {
                setActiveTab(value);
                setResetSignal((prev) => !prev);
                setIsRunning(false);
              }}
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
    </>
  );
}
