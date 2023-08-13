import React, { useState, useEffect } from "react";
import { getFromLocalStorage } from "../utils/storageMockApi";
import SearchQuery from "./Search";

const ExecutedQueries = () => {
  const [pastQueries, setPastQueries] = useState([]);

  const fetchPastQueries = () => {
    const queries = getFromLocalStorage("pastQueries") || [];
    setPastQueries(queries);
  };

  useEffect(() => {
    fetchPastQueries(); // Fetch initially

    const intervalId = setInterval(() => {
      fetchPastQueries(); // Fetch and update past queries
    }, 1000); // Poll every 1 second

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="bg-[#282a36] border-r-2 border-[#44475a] flex-1">
      <h2 className="bg-[#44475a] text-white font-semibold p-2 text-sm">
        PAST EXECUTED QUERIES
      </h2>
      <SearchQuery pastQueries={pastQueries} />
      {pastQueries.length > 0 ? (
        <ul className="p-3">
          {pastQueries.map((query, index) => (
            <li
              key={index}
              className="flex items-center text-white py-2 hover:bg-[#44475a] px-2 rounded"
            >
              {query}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-[#44475a] p-2">No past executed queries yet.</p>
      )}
    </div>
  );
};

export default ExecutedQueries;
