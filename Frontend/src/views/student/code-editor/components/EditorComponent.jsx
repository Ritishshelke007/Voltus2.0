import React, { useState, useRef } from "react";
import { Editor } from "@monaco-editor/react";
import { CODE_SNIPPETS } from "../constants/codeSnippets";
import LanguageSelector from "./LanguageSelector";
import OutputWindow from "./OutputWindow";

const EditorComponent = () => {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("java");

  const onSelectChange = (sl) => {
    console.log(sl.value);
    setLanguage(sl.value);
    setValue(CODE_SNIPPETS[sl.value]);
  };

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  return (
    <div className="flex justify-center items-center w-full gap-5">
      <div className="relative">
        <LanguageSelector
          defLanguage={language}
          onSelectChange={onSelectChange}
        />

        <div className="overlay ml-3 my-3 rounded-md overflow-hidden w-full h-full shadow-4xl">
          <Editor
            height="85vh"
            width="70vw"
            theme="vs-dark"
            language={language}
            defaultValue={CODE_SNIPPETS[language]}
            onMount={onMount}
            value={value}
            onChange={(value) => setValue(value)}
          />
        </div>
      </div>

      <div>
        <OutputWindow editorRef={editorRef} language={language} />
      </div>
    </div>
  );
};

export default EditorComponent;
