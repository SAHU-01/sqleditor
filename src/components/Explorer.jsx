import React, { useState, useEffect } from "react";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
} from "../utils/storageMockApi";
import { BsFiletypeSql, BsTrash } from "react-icons/bs";

const Explorer = () => {
  const [tabs, setTabs] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const fetchTabs = () => {
    const tabsFromLocalStorage = Object.keys(localStorage)
      .filter((key) => key.startsWith("tab_"))
      .map((key) => ({
        name: getFromLocalStorage(key).name,
        content: getFromLocalStorage(key).content,
      }));

    const nonEmptyTabs = tabsFromLocalStorage.filter(
      (tab) => tab.content.trim() !== ""
    );

    const sortedTabs = nonEmptyTabs.sort((a, b) => {
      const tabNumberA = parseInt(a.name.replace("Tab ", ""));
      const tabNumberB = parseInt(b.name.replace("Tab ", ""));
      return tabNumberA - tabNumberB;
    });

    setTabs(sortedTabs);
  };

  const handleDeleteTab = (index) => {
    const tabToDelete = tabs[index];
    const tabNumber = parseInt(tabToDelete.name.match(/\d+/)) - 1; // Extract the number from the tab name
    const tabKey = `tab_${tabNumber}`;

    try {
      removeFromLocalStorage(tabKey);
      console.log(`Tab removed from local storage: ${tabKey}`);
    } catch (error) {
      console.error(`Error removing tab from local storage: ${tabKey}`, error);
    }

    setTabs((prevTabs) => prevTabs.filter((_, i) => i !== index));
  };

  useEffect(() => {
    fetchTabs();

    const intervalId = setInterval(() => {
      fetchTabs();
    }, 1000); // Poll every 1 second

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="bg-[#282a36] border-r-2 border-b-2 border-[#44475a]">
      <h2 className="bg-[#44475a] text-white font-semibold p-2 text-sm">
        FILE EXPLORER
      </h2>
      <ul className="p-3">
        {tabs.map((tab, index) => (
          <li
            key={index}
            className="flex items-center text-white py-2 hover:bg-[#44475a] px-2 rounded relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <span className="mr-3 text-[#ffb86c]">
              <BsFiletypeSql />
            </span>
            <h2 className="text-sm">{tab.name}</h2>
            {hoveredIndex === index && (
              <span className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <BsTrash onClick={() => handleDeleteTab(index)} />
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Explorer;
