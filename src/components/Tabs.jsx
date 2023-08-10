import React, { useState } from "react";
import SQLEditor from "./sqlditor/SqlEditor";

const Tabs = ({ onImportClick, onRunClick }) => {
  const [tabs, setTabs] = useState([{ name: "Tab 1", content: "" }]);
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const handleAddTab = () => {
    const newTab = { name: `Tab ${tabs.length + 1}`, content: "" };
    setTabs([...tabs, newTab]);
    setActiveTab(tabs.length); // Activate the newly added tab
  };

  const handleRemoveTab = (index) => {
    const newTabs = tabs.filter((_, i) => i !== index);
    setTabs(newTabs);

    if (index === tabs.length - 1) {
      setActiveTab(index); // Set the previous tab as active if the last tab is deleted
    } else {
      setActiveTab(Math.min(index, newTabs.length - 1)); // Set the next tab as active
    }

    // Update tab names to reflect new positions
    const updatedTabs = newTabs.map((tab, i) => ({
      ...tab,
      name: `Tab ${i + 1}`,
    }));
    setTabs(updatedTabs);
  };

  const handleEditorChange = (index, newContent) => {
    const updatedTabs = [...tabs];
    updatedTabs[index].content = newContent;
    setTabs(updatedTabs);
  };

  return (
    <div className="pt-px">
      <div className="flex flex-row justify-between px-2 h-12">
        <div className="flex justify-end items-center  overflow-x-auto">
          {/* Use overflow-x-auto to enable horizontal scrolling */}
          <div className="flex space-x-2 overflow-x-scroll">
            {tabs.map((tab, index) => (
              <div
                key={index}
                className={`${
                  activeTab === index ? "bg-[#44475a]" : "bg-black"
                } text-white px-2 py-3 cursor-pointer whitespace-nowrap`}
                onClick={() => handleTabClick(index)}
              >
                {tab.name}
                {tabs.length > 1 && (
                  <span
                    className="ml-6 px-2 text-xs cursor-pointer"
                    onClick={() => handleRemoveTab(index)}
                  >
                    ✕
                  </span>
                )}
              </div>
            ))}
          </div>
          <button
            className="text-2xl text-white px-4 py-2 rounded"
            onClick={handleAddTab}
          >
            +
          </button>
        </div>
      </div>
      <div>
        {tabs.map((tab, index) => (
          <div key={index} className={`${activeTab === index ? "" : "hidden"}`}>
            <SQLEditor
              value={tab.content}
              onChange={(newContent) => handleEditorChange(index, newContent)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
