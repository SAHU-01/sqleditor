import React from "react";
import SqlCompiler from "../components/SQLCompiler";
//import Explore from "../components/Explorer";

const IDE = () => {
  return (
    <div className="grid grid-cols-2">
      {/* <Explore />  */}
      <SqlCompiler />
    </div>
  );
};

export default IDE;
