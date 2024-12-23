import React, { useState } from "react";
import TabButton from "../TabButton";
import TimeCircle from "../TimeCircle";
import ControlButtons from "../ControlButtons";
import { FaCog } from "react-icons/fa";

const Home = ({ isDarkMode, handleSessionComplete }) => {
  const [tabsData, setTabsData] = useState([
    { label: "Pomodoro", value: "pomodoro", duration: "25:00" },
    { label: "Short Break", value: "short-break", duration: "5:00" },
    { label: "Long Break", value: "long-break", duration: "15:00" },
  ]);

  const [activeTab, setActiveTab] = useState(tabsData[0]?.value);
  const [isRunning, setIsRunning] = useState(false);
  const [resetSignal, setResetSignal] = useState(false);
  const [sessionProgress, setSessionProgress] = useState({
    pomodoro: 0,
    shortBreak: 0,
    longBreak: 0,
  });

  const handleStartPause = () => setIsRunning((prev) => !prev);

  const handleRestart = () => {
    setIsRunning(false);
    setResetSignal((prev) => !prev);
  };

  const handleComplete = () => {
    const completionTime = new Date().toLocaleString();
    let isSuccess = false;

    setSessionProgress((prev) => {
      const updatedProgress = { ...prev };

      if (activeTab === "pomodoro") updatedProgress.pomodoro += 1;
      if (activeTab === "short-break") updatedProgress.shortBreak += 1;
      if (activeTab === "long-break") updatedProgress.longBreak += 1;

      if (
        updatedProgress.pomodoro >= 1 &&
        updatedProgress.shortBreak >= 1 &&
        updatedProgress.longBreak >= 4
      ) {
        isSuccess = true;
      }

      return updatedProgress;
    });

    handleSessionComplete({
      tab: activeTab,
      completionTime,
      status: isSuccess ? "Done Successfully" : "Fail Successfully",
    });

    if (isSuccess) {
      setSessionProgress({ pomodoro: 0, shortBreak: 0, longBreak: 0 });
    }

    setIsRunning(false);
    setResetSignal((prev) => !prev);
  };

  const currentTab = tabsData.find((tab) => tab.value === activeTab);

  return (
    <div
      className={`flex flex-col justify-center items-center min-h-screen ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <div
        className={`w-4/5 max-w-3xl p-8 rounded-lg shadow-lg ${
          isDarkMode ? "bg-gray-900" : "bg-white"
        }`}
      >
        <div className="flex justify-end">
          <button className="text-2xl p-2">
            <FaCog />
          </button>
        </div>
        <div className="flex space-x-6 mb-8 justify-center">
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
          handleComplete={handleComplete}
          isDarkMode={isDarkMode}
        />
      </div>
    </div>
  );
};

export default Home;
