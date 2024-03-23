import React from "react";
import OutputWindow from "./components/OutputWindow";
import EditorWindow from "./components/EditorWindow";
import SplitterLayout from "react-splitter-layout-react-v18";
import "react-splitter-layout-react-v18/lib/index.css";

const CodeEditor = () => {
  return (
    <SplitterLayout vertical>
      <EditorWindow />
      <OutputWindow />
    </SplitterLayout>
  );
};

export default CodeEditor;
