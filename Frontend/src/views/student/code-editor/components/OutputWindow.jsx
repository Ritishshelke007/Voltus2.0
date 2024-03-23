import React, { useState, useContext } from "react";
import { executeCode } from "../../../../api";
import { toast } from "react-hot-toast";
import CodeEditorContext from "../../../../contexts/CodeEditorContext";

const OutputWindow = () => {
  const [output, setOutput] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const { editorRef, language } = useContext(CodeEditorContext);

  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) {
      return;
    }

    try {
      setLoading(true);
      const { run: result } = await executeCode(language, sourceCode);
      setOutput(result.output);
      result.stderr ? setIsError(true) : setIsError(false);
    } catch (error) {
      toast.error("An error occurred while running the code");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="relative flex flex-col justify-center items-center space-y-2">
        <button
          className={`absolute text-white top-0 text-slate-100 p-3 rounded-md hover:shadow-lg ${
            loading ? " disabled bg-gray-800" : " bg-gray-900"
          }`}
          onClick={runCode}
        >
          {loading ? "Processing..." : "Run Code"}
        </button>

        <div
          className={` overflow-auto h-auto w-full border-2 p-2 ${
            isError ? " border-red-500 " : " border-slate-900 "
          }`}
        >
          <p className="my-2 text-slate-400">Output</p>
          <pre>{output ? output : 'Click "Run Code" to see output here'}</pre>
        </div>
      </div>
    </>
  );
};

export default OutputWindow;
