import React, { useState } from "react";

const SearchQuery = ({ pastQueries }) => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchPerformed, setSearchPerformed] = useState(false); // Track if search was performed

  const handleSearch = () => {
    const filteredQueries = pastQueries.filter((query) =>
      query.includes(searchKeyword)
    );
    setSearchResults(filteredQueries);
    setSearchPerformed(true); // Mark that a search was performed
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="mt-4 px-2">
      <div className="flex">
        <input
          type="text"
          className="bg-[#44475a] text-white px-3 py-2 rounded flex-1 mr-2"
          placeholder="Search by keyword"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button
          className="bg-[#ffb86c] text-black px-4 py-2 rounded"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      {searchPerformed && searchResults.length === 0 ? ( // Check if a search was performed and no results
        <p className="text-[#ff5555] mt-2">No matching queries found.</p>
      ) : (
        <ul className="mt-2">
          {searchResults.map((query, index) => (
            <li key={index} className="mb-1 text-[#50fa7b] px-2">
              {query}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchQuery;
