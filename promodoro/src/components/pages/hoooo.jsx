const Home = ({ isDarkMode, handleSessionComplete }) => {
  const [tabsData, setTabsData] = useState([
    { label: "Pomodoro", value: "pomodoro", duration: "25:00" },
    { label: "Short Break", value: "short-break", duration: "5:00" },
    { label: "Long Break", value: "long-break", duration: "15:00" },
  ]);

  const [activeTab, setActiveTab] = useState(tabsData[0]?.value);
  const [isRunning, setIsRunning] = useState(false);
  const [resetSignal, setResetSignal] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const handleStartPause = () => setIsRunning((prev) => !prev);

  const handleRestart = () => {
    setIsRunning(false);
    setResetSignal((prev) => !prev);
  };

  const completeSession = () => {
    console.log("Session completed");
    setIsRunning(false); // Stop the timer
    handleSessionComplete(); // Trigger session complete action
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
        {/* Settings Icon */}
        <div className="flex justify-end">
          <button
            onClick={() => setIsSettingsOpen(true)}
            className="text-2xl p-2"
          >
            <FaCog />
          </button>
        </div>

        {/* Render Tab Buttons */}
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

        {/* Render Timer */}
        {currentTab && (
          <TimeCircle
            duration={currentTab.duration}
            isRunning={isRunning}
            resetSignal={resetSignal}
          />
        )}

        {/* Control Buttons */}
        <div className="mt-8">
          <ControlButtons
            isRunning={isRunning}
            handleStartPause={handleStartPause}
            handleRestart={handleRestart}
            isDarkMode={isDarkMode}
          />
          <button
            onClick={completeSession}
            className="mt-4 p-2 bg-green-500 text-white rounded"
          >
            Complete Session
          </button>
        </div>
      </div>

      {/* Settings Modal */}
      {isSettingsOpen && (
        <SettingsModal
          tabsData={tabsData}
          onSave={(newDurations) =>
            setTabsData((prev) =>
              prev.map((tab) => ({
                ...tab,
                duration: newDurations[tab.value] || tab.duration,
              }))
            )
          }
          onClose={() => setIsSettingsOpen(false)}
          isDarkMode={isDarkMode}
        />
      )}
    </div>
  );
};
