import React, { useState } from "react";
import SqlCompiler from "../components/SQLCompiler";
import Explore from "../components/Explorer";
import ExecutedQueries from "../components/ExecutedQueries";
import { FaBars, FaTimes } from "react-icons/fa";

const IDE = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="grid sm:grid-cols-8  md:grid-cols-4 bg-black">
      {/* Sidebar */}
      <div
        className={`md:hidden  ${
          isSidebarOpen ? "block" : "hidden"
        } fixed inset-0 h-full bg-black z-50 w-full p-1 transition-transform transform ease-in-out`}
      >
        {/* Close icon */}
        <div className="flex justify-end p-2">
          <FaTimes
            className="text-white text-lg cursor-pointer"
            onClick={toggleSidebar}
          />
        </div>
        {/* Sidebar content */}
        <div className="grid grid-rows-2 h-screen">
          <Explore />
          <ExecutedQueries />
        </div>
      </div>

      {/* Hamburger icon */}
      <div className="md:hidden flex justify-center bg-[#ffb86c]">
        {isSidebarOpen ? (
          <FaTimes
            className="text-white text-lg mt-5 cursor-pointer"
            onClick={toggleSidebar}
          />
        ) : (
          <FaBars
            className="text-[#282a36] text-lg mt-5 cursor-pointer"
            onClick={toggleSidebar}
          />
        )}
      </div>

      <div className="h-screen flex-col hidden md:flex">
        {/* This content is now shown within the sidebar */}
        <Explore className="" />
        <ExecutedQueries className="" />
      </div>
      <div className="sm:col-span-7 md:col-span-3">
        <SqlCompiler />
      </div>
    </div>
  );
};

export default IDE;
