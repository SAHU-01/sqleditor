// import React, { useState } from "react";
// import SqlEditor from "./sqlditor/SqlEditor";
// import OutputSection from "./sqlditor/OutputSection";
// import axios from "axios";

// const SqlCompiler = () => {
//   const [tableData, setTableData] = useState(null);

//   const handleRunQuery = async (query) => {
//     try {
//       const response = await axios.post("/run-query", { query });
//       setTableData(response.data);
//     } catch (error) {
//       console.log("compiler");
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <SqlEditor onRun={handleRunQuery} />
//       <OutputSection tableData={tableData} />
//     </div>
//   );
// };

// export default SqlCompiler;

import React, { useState } from "react";
import SqlEditor from "./sqlditor/SqlEditor";
import OutputSection from "./sqlditor/OutputSection";
import axios from "axios";

const SqlCompiler = () => {
  const [tableData, setTableData] = useState(null);

  const handleRunClick = async () => {
    try {
      const response = await axios.get(
        `https://apigenerator.dronahq.com/api/3AL3EswV/data`
      );
      setTableData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log("compiler");
      console.error(error);
    }
  };

  return (
    <div>
      <SqlEditor />
      <button onClick={handleRunClick}>Run</button> {/* Add the Run button */}
      <OutputSection tableData={tableData} />
    </div>
  );
};

export default SqlCompiler;
