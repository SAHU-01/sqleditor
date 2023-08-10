import React, { useState } from "react";
import SQLEditor from "./sqlditor/SqlEditor";
import OutputSection from "./sqlditor/OutputSection";
import Navbar from "./Navbar";
import axios from "axios";

const SqlCompiler = () => {
  const [tableData, setTableData] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Add a loading state

  const handleRunQuery = async () => {
    setIsLoading(true); // Set loading to true before making the request
    try {
      const response = await axios.get(
        `https://apigenerator.dronahq.com/api/3AL3EswV/data`
      );
      setTableData(response.data);
    } catch (error) {
      console.log("compiler");
      console.error(error);
    } finally {
      setIsLoading(false); // Set loading back to false after request completion
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
    <div className="">
      <Navbar onImportClick={handleImportClick} onRunClick={handleRunQuery} />
      {isLoading ? (
        <div className="font-bold text-2xl text-[#ff5555] h-[45vh] flex items-center justify-center">
          Loading...
        </div> // Display loader while loading
      ) : (
        <OutputSection tableData={tableData} />
      )}
    </div>
  );
};

export default SqlCompiler;
