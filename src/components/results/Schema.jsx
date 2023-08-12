import React from "react";

const Schema = ({ tableData }) => {
  if (!tableData) {
    return null;
  }

  const columnNames = Object.keys(tableData[0]);

  return (
    <div className="text-center bg-[#282a36] h-[39vh] w-1/6 border border-[#44475a] rounded">
      <h1 className="bg-[#44475a] p-2 border-b-2 border-[#ffb86c] text-[#ffb86c]">
        Table Name
      </h1>
      <div className="flex flex-col mt-1">
        {columnNames.map((columnName, index) => (
          <div key={index} className=" ] px-4 py-2 flex-grow text-[#ffb86c]">
            {columnName}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schema;
