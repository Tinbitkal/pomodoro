// components/TimeCircle.js
import React from "react";

const TimeCircle = ({ duration }) => (
  <div className="w-64 h-64 bg-blue-200 rounded-full flex justify-center items-center shadow-lg mx-auto mt-8">
    <span className="text-6xl font-bold text-gray-700">{duration}</span>
  </div>
);

export default TimeCircle;
