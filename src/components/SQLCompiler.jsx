import React, { useState, useEffect } from "react";
import ResultComponent from "./ExecutedResult";
import Navbar from "./Navbar";
import axios from "axios";
import Tabs from "./sqlditor/Tabs";
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from "../utils/storageMockApi";

const SqlCompiler = () => {
  const [tableData, setTableData] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Add a loading state
  const [activeTabIndex, setActiveTabIndex] = useState(
    parseInt(getFromLocalStorage("activeTab")) || 0
  ); // Get active tab index from local storage

  // Assuming you have a mapping of queries to API URLs
  const queryToApiMapping = {
    "select * from users": "https://apigenerator.dronahq.com/api/85g-RmAl/user",
    "select * from products":
      "https://apigenerator.dronahq.com/api/LVX2C9m_/products",
    // Add more query to API mappings as needed
  };

  const defaultApiURL = "https://apigenerator.dronahq.com/api/85g-RmAl/user";

  // Function to match a query with an API URL
  const matchQueryWithAPI = (query) => {
    const matchedApiURL = queryToApiMapping[query];
    if (matchedApiURL) {
      return matchedApiURL;
    } else {
      return defaultApiURL; // Use the default API when no match is found
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const activeTabFromLocalStorage =
        parseInt(getFromLocalStorage("activeTab")) || 0;
      setActiveTabIndex(activeTabFromLocalStorage);
    }, 1000); // Poll every 1 second

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handleRunQuery = async () => {
    const tabs = getFromLocalStorage("tabs") || [];
    const activeTabContent = tabs[activeTabIndex].content.trim().toLowerCase();

    if (activeTabContent !== "") {
      const query = activeTabContent;

      // Check if the query has already been executed
      const pastQueries = getFromLocalStorage("pastQueries") || [];
      const queryIndex = pastQueries.findIndex((q) => q === query);

      if (queryIndex !== -1) {
        // If query has been executed before, move it to the top of the list
        pastQueries.splice(queryIndex, 1);
      }

      setIsLoading(true);
      try {
        const apiURL = matchQueryWithAPI(query);
        const response = await axios.get(apiURL);
        setTableData(response.data);

        // Add the executed query at the top of the list
        pastQueries.unshift(query);
        saveToLocalStorage("pastQueries", pastQueries);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    } else {
      console.log("Query is empty");
    }
  };

  const handleImportClick = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".csv"; // Set accepted file types to CSV
    input.onchange = async (event) => {
      const selectedFile = event.target.files[0];
      if (selectedFile) {
        try {
          // Process the selected file
          const fileData = await readFileData(selectedFile);
          console.log(fileData);
        } catch (error) {
          console.error("Error reading file:", error);
        }
      }
    };
    input.click(); // Trigger the file input dialog
  };

  return (
    <div className="h-screen flex flex-col">
      <Navbar onImportClick={handleImportClick} onRunClick={handleRunQuery} />
      <Tabs />
      <ResultComponent tableData={tableData} isLoading={isLoading} />
    </div>
  );
};

export default SqlCompiler;
