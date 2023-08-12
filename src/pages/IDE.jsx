import React from "react";
import SqlCompiler from "../components/SQLCompiler";
import Explore from "../components/Explorer";
import ExecutedQueries from "../components/ExecutedQueries";

const IDE = () => {
  return (
    <div className="grid grid-cols-4">
      <div className="grid grid-rows-2 h-screen gap-2">
        <Explore />
        <ExecutedQueries />
      </div>
      <SqlCompiler />
    </div>
  );
};

export default IDE;
