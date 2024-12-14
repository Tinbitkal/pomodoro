
import React from "react";

const Home = () => {
  return (
    <div
      id="home"
      className="w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.pexels.com/photos/832828/pexels-photo-832828.jpeg?auto=compress&cs=tinysrgb&w=600')" }}
    >
      <div className="w-full h-full flex items-center justify-center bg-black bg-opacity-50 text-white">
        <h1 className="text-4xl md:text-6xl font-bold">Welcome to My Website</h1>
      </div>
    </div>
  );
};

