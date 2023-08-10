// import React, { useState } from "react";
// import AceEditor from "react-ace";
// import "ace-builds/src-noconflict/theme-dracula";
// import "ace-builds/src-noconflict/mode-sql";
// import "ace-builds/src-noconflict/ext-language_tools";

// function SQLEditor() {
//   const [sqlCode, setSqlCode] = useState("");

//   const handleCodeChange = (newCode) => {
//     setSqlCode(newCode);
//   };

//   return (
//     <div className="my-2">
//       <AceEditor
//         mode="sql"
//         theme="dracula"
//         fontSize={14}
//         width="100%"
//         height="400px"
//         showPrintMargin={false}
//         value={sqlCode}
//         enableBasicAutocompletion={true}
//         enableLiveAutocompletion={true}
//         onChange={handleCodeChange}
//       />
//     </div>
//   );
// }

// export default SQLEditor;

import React, { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/mode-sql";
import "ace-builds/src-noconflict/ext-language_tools";

const SQLEditor = ({ value, onChange }) => {
  return (
    <div className="my-2">
      <AceEditor
        mode="sql"
        theme="dracula"
        fontSize={14}
        width="100%"
        height="400px"
        showPrintMargin={false}
        value={value}
        enableBasicAutocompletion={true}
        enableLiveAutocompletion={true}
        onChange={onChange}
      />
    </div>
  );
};

export default SQLEditor;
