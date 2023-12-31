import React, { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/mode-sql";
import "ace-builds/src-noconflict/ext-language_tools";

const SQLEditor = ({ value, onChange }) => {
  return (
    <div className=" border-b-2 border-[#44475a] mt-0">
      <AceEditor
        mode="sql"
        theme="dracula"
        fontSize={14}
        width="100%"
        height="312px"
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
