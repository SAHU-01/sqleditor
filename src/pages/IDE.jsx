import React from "react";
import SqlCompiler from "../components/SQLCompiler";
import Explore from "../components/Explorer";
import ExecutedQueries from "../components/ExecutedQueries";

const IDE = () => {
  return (
    <div className="grid grid-cols-4 bg-black">
      <div className="grid grid-rows-2 h-screen ">
        <Explore />
        <ExecutedQueries />
      </div>
      <div className="col-span-3">
        <SqlCompiler />
      </div>
    </div>
  );
};

export default IDE;
