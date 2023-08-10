import React, { useState } from "react";

const Navbar = ({ onImportClick, onRunClick }) => {
  return (
    <div className=" pt-px">
      <div className="flex justify-end m-2">
        <button
          className="bg-[#ffb86c] text-[#282a36] px-6 py-3 rounded mr-4"
          onClick={onImportClick}
        >
          Import
        </button>
        <button
          className="bg-[#50fa7b] text-[#282a36] px-6 py-3 rounded"
          onClick={onRunClick}
        >
          Run
        </button>
      </div>
    </div>
  );
};

export default Navbar;
