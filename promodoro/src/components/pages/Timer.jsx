import React, { useState, useEffect } from "react";
import Timer from "./components/Timer";

const App = () => {
  const [sessionCount, setSessionCount] = useState(0);

  // Load session count from localStorage on component mount
  useEffect(() => {
    const savedCount = JSON.parse(localStorage.getItem("sessionCount"));
    if (savedCount) setSessionCount(savedCount);
  }, []);

  // Update session count and persist it
  const handleSessionComplete = () => {
    setSessionCount((prevCount) => {
      const newCount = prevCount + 1;
      localStorage.setItem("sessionCount", JSON.stringify(newCount));
      return newCount;
    });
  };

  return (
    <div>
      <h1>Pomodoro Timer</h1>
      <p>Focused Sessions Completed: {sessionCount}</p>
      <Timer onSessionComplete={handleSessionComplete} />
    </div>
  );
};

export default Timer;
