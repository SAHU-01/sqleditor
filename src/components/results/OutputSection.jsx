import React from "react";

const OutputSection = ({ tableData }) => {
  if (!tableData) {
    return null;
  }

  return (
    <div className="text-left bg-[#282a36] h-[40vh] overflow-auto border border-[#44475a]">
      <table className="w-full  border border-[#44475a] border-collapse">
        <thead className="text-[#ffb86c] mb-5 bg-[#44475a]">
          <tr>
            {Object.keys(tableData[0]).map((columnName, index) => (
              <th key={index} className="border-b-2 border-[#44475a] px-4 py-2">
                {columnName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-[#838697]">
          {tableData.map((row, rowIndex) => (
            <tr key={rowIndex} className="border border-[#44475a]">
              {Object.values(row).map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="border-b-2 border-[#44475a] px-4 py-2"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OutputSection;
