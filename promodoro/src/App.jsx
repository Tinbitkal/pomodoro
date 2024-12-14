import React, { useState } from "react";
import Header from "./components/Header";

const tabsData = [
  {
    label: "HTML",
    value: "html",
    images: [
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80",
      "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2762&q=80",
      "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2832&q=80",
    ],
  },
  {
    label: "React",
    value: "react",
    images: [
      "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&q=80",
    ],
  },
  {
    label: "Vue",
    value: "vue",
    images: [
      "https://images.unsplash.com/photo-1506441141927-8d999b3b01e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80",
      "https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&auto=format&fit=crop&w=2842&q=80",
      "https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-4.0.3&auto=format&fit=crop&w=3000&q=80",
    ],
  },
];

export default function App() {
  const [activeTab, setActiveTab] = useState(tabsData[0]?.value || "");

  const currentTab = tabsData.find((tab) => tab.value === activeTab);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      {/* Header */}
      <Header />

      {/* Tabs Navigation */}
      <div className="flex space-x-4 border-b border-gray-200 pb-2">
        {tabsData.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            aria-selected={activeTab === tab.value}
            className={`px-4 py-2 font-semibold border-b-2 transition-all duration-300 ${
              activeTab === tab.value
                ? "border-blue-500 text-blue-500"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Gallery */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentTab?.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${currentTab.label} ${index + 1}`}
            className="w-full h-48 object-cover rounded-lg shadow-md"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
}
