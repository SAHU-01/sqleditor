import React, { useState, useEffect } from "react";
import SQLEditor from "./SqlEditor";
import {
  saveToLocalStorage,
  getFromLocalStorage,
} from "../../utils/storageMockApi";

const Tabs = () => {
  const [tabs, setTabs] = useState(
    getFromLocalStorage("tabs") || [{ name: "Tab 1", content: "" }]
  );
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    saveToLocalStorage("tabs", tabs);
  }, [tabs]);

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

    // Save the updated content to local storage
    saveToLocalStorage(`tab_${index}`, {
      name: updatedTabs[index].name,
      content: newContent,
    });
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

// import React, { useState, useEffect } from "react";
// import SQLEditor from "./SqlEditor";
// import { saveToLocalStorage } from "../../utils/storageMockApi";
// import { useDebounce } from "../../hooks/useDebounce";

// const Tabs = () => {
//   const [tabs, setTabs] = useState([{ name: "Tab 1", content: "" }]);
//   const [activeTab, setActiveTab] = useState(0);
//   // Create a debounced value for the tab content
//   const debouncedContent = useDebounce(tabs[activeTab]?.content, 1000);

//   const handleTabClick = (index) => {
//     setActiveTab(index);
//   };

//   const handleAddTab = () => {
//     const newTab = { name: `Tab ${tabs.length + 1}`, content: "" };
//     setTabs([...tabs, newTab]);
//     setActiveTab(tabs.length); // Activate the newly added tab
//   };

//   const handleRemoveTab = (index) => {
//     const newTabs = tabs.filter((_, i) => i !== index);
//     setTabs(newTabs);

//     if (index === tabs.length - 1) {
//       setActiveTab(index); // Set the previous tab as active if the last tab is deleted
//     } else {
//       setActiveTab(Math.min(index, newTabs.length - 1)); // Set the next tab as active
//     }

//     // Update tab names to reflect new positions
//     const updatedTabs = newTabs.map((tab, i) => ({
//       ...tab,
//       name: `Tab ${i + 1}`,
//     }));
//     setTabs(updatedTabs);
//   };

//   const handleEditorChange = (index, newContent) => {
//     const updatedTabs = [...tabs];
//     updatedTabs[index].content = newContent;
//     setTabs(updatedTabs);
//   };

//   //original
//   useEffect(() => {
//     if (debouncedContent !== undefined && debouncedContent.trim() !== "") {
//       const storageKey = `tabContent_${activeTab}`;
//       saveToLocalStorage(storageKey, debouncedContent);
//       console.log(`Stored to local storage (${storageKey}):`, debouncedContent);
//     }
//   }, [debouncedContent, activeTab]);

//   //works
//   // useEffect(() => {
//   //   tabs.forEach((tab, index) => {
//   //     const storageKey = `tabContent_${tab.name}`;
//   //     saveToLocalStorage(storageKey, tab.content);
//   //     console.log(`Stored to local storage (${storageKey}):`, debouncedContent);
//   //   });
//   // }, [tabs]);

//   return (
//     <div className="pt-px">
//       <div className="flex flex-row justify-between px-2 h-12">
//         <div className="flex justify-end items-center  overflow-x-auto">
//           {/* Use overflow-x-auto to enable horizontal scrolling */}
//           <div className="flex space-x-2 overflow-x-scroll">
//             {tabs.map((tab, index) => (
//               <div
//                 key={index}
//                 className={`${
//                   activeTab === index ? "bg-[#44475a]" : "bg-black"
//                 } text-white px-3 py-3 cursor-pointer whitespace-nowrap`}
//                 onClick={() => handleTabClick(index)}
//               >
//                 {tab.name}
//                 {tabs.length > 1 && (
//                   <span
//                     className="ml-6 px-2 text-xs cursor-pointer"
//                     onClick={() => handleRemoveTab(index)}
//                   >
//                     ✕
//                   </span>
//                 )}
//               </div>
//             ))}
//           </div>
//           <button
//             className="text-2xl text-white px-4 py-2 rounded"
//             onClick={handleAddTab}
//           >
//             +
//           </button>
//         </div>
//       </div>
//       <div>
//         {tabs.map((tab, index) => (
//           <div key={index} className={`${activeTab === index ? "" : "hidden"}`}>
//             <SQLEditor
//               value={tab.content}
//               onChange={(newContent) => handleEditorChange(index, newContent)}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Tabs;
