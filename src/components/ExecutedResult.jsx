import React, { useState } from "react";
import OutputSection from "./results/OutputSection";
import Schema from "./results/Schema";

const ResultComponent = ({ tableData, isLoading }) => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className=" bg-[#282a36] rounded p-4 shadow-md h-[50vh]">
      <div className="border-b mb-4 border-[#6272a4]">
        <TabButton
          tabName="tab1"
          activeTab={activeTab}
          onClick={handleTabChange}
        >
          OUTPUT
        </TabButton>
        <TabButton
          tabName="tab2"
          activeTab={activeTab}
          onClick={handleTabChange}
        >
          SCHEMA
        </TabButton>
      </div>
      <div className="">
        {isLoading ? (
          <div className="font-bold text-2xl text-[#ffb86c] h-[45vh] flex items-center justify-center">
            Loading...
          </div>
        ) : activeTab === "tab1" && tableData ? (
          <OutputSection tableData={tableData} />
        ) : (
          <Schema tableData={tableData} />
        )}
      </div>
    </div>
  );
};

const TabButton = ({ tabName, activeTab, onClick, children }) => {
  return (
    <button
      className={`${
        activeTab === tabName
          ? "bg-[#44475a] border-b-4 border-[#ffb86c] text-[#ffb86c]"
          : "text-white"
      } py-2 px-4 focus:outline-none`}
      onClick={() => onClick(tabName)}
    >
      {children}
    </button>
  );
};

const Tab2Content = () => {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold">Tab 2 Content</h2>
      <p>This is the content of Tab 2.</p>
    </div>
  );
};

export default ResultComponent;
