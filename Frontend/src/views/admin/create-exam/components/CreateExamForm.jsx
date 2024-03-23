import React, { useState } from "react";
import InputField from "../../../../components/fields/InputField";
import SelectField from "../../../../components/fields/SelectField";
import TextField from "../../../../components/fields/TextField";
import Switch from "../../../../components/switch";
import Upload from "./Upload";
import DateTimePickerComponent from "../../../../components/calendar/DateTimePicker";
import MiniCalendar from "../../../../components/calendar/MiniCalendar";

const CreateExamForm = () => {
  const [problemsCount, setProblemsCount] = useState(0);
  const [problemStatements, setProblemStatements] = useState([]);
  const [examCode, setExamCode] = useState();

  const generateExamCode = () => {
    const code = Math.floor(100000 + Math.random() * 900000); // Generates a random 6-digit code
    setExamCode(code); // Convert to string and update state
  };

  const handleProblemsCountChange = (e) => {
    const count = parseInt(e.target.value);
    setProblemsCount(count);
    // Generate initial array of empty strings for problem statements
    const initialStatements = Array.from({ length: count }, () => "");
    setProblemStatements(initialStatements);
  };

  const handleProblemStatementChange = (index, value) => {
    const updatedStatements = [...problemStatements];
    updatedStatements[index] = value;
    setProblemStatements(updatedStatements);
  };

  const renderInputFields = () => {
    return (
      <>
        <label
          for="problemStatements"
          class="mb-2 ml-1.5 block text-sm font-medium text-gray-900 dark:text-gray-400"
        ></label>

        {problemStatements.map((statement, index) => {
          return (
            <TextField
              rows="3"
              key={index}
              extra="mb-3"
              label={`Problem Statement ${index + 1}*`}
              placeholder={`Problem Statement ${index + 1}`}
              id={`problemStatement${index}`}
            />
          );
        })}
      </>
    );
  };

  const options = [
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" },
    { value: "3", label: "Option 3" },
    { value: "4", label: "Option 4" },
  ];

  return (
    <div className="flex w-full flex-col  rounded-[20px] bg-white bg-cover px-[30px] py-[30px] dark:bg-navy-800 md:px-[64px] md:py-[56px] ">
      <div className="w-full space-y-5">
        <h4 className="text-black mb-[14px] max-w-full text-xl font-bold dark:text-white md:w-[64%] md:text-3xl md:leading-[42px] lg:w-[46%] xl:w-[85%] 2xl:w-[75%] 3xl:w-[52%]">
          Create Exam
        </h4>

        <SelectField label="Select course*" variant="auth" options={options} />

        <div className="grid grid-cols-2 gap-10 relative">
          <div className="flex w-full justify-start items-start relative">
            <button
              onClick={generateExamCode}
              className="absolute top-10 p-2 bg-blueSecondary text-white rounded-md text-sm right-5 hover:bg-indigo-500"
            >
              Generate
            </button>
            <InputField
              variant="auth"
              extra="mb-3 w-full"
              label="Exam Secret Code*"
              placeholder="6 Digit Exam Secret Code"
              id="examCode"
              name="examCode"
              type="text"
              value={examCode}
              onChange={(e) => setExamCode(e.target.value)}
            />
          </div>

          <DateTimePickerComponent
            label="Select Date and Time*"
            id="dateTime"
            variant="auth"
            extra="mt-3 shadow-lg dark:text-white"
            format="dd-MM-yyyy hh:mm a"
          />
        </div>

        <div className="mt-4 grid grid-cols-3 gap-10">
          <SelectField label="Select Year*" variant="auth" options={options} />

          <SelectField
            label="Select Division*"
            variant="auth"
            options={options}
          />

          <SelectField label="Select Batch*" variant="auth" options={options} />
        </div>

        <div className="flex w-full items-center justify-center gap-4">
          <div className="w-full">
            <label
              htmlFor="problemsCount"
              className={`mt-5 ml-1.5 text-sm font-medium text-navy-700 dark:text-white`}
            >
              Total Problem Statements*
            </label>

            <input
              type="number"
              id="problemsCount"
              name="problemsCount"
              min={0}
              placeholder="Total Problem Statements"
              className={`mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none dark:text-white`}
              value={problemsCount}
              onChange={handleProblemsCountChange}
            />

            {/* Render InputFields based on problemsCount */}
            {renderInputFields()}
          </div>

          <div className="rounded-full bg-gray-400 p-3 font-bold">
            <p>OR</p>
          </div>

          <div>
            <label
              for="statementFile"
              class="mb-2 ml-1.5 block pt-5 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Upload File*
            </label>

            <Upload />
          </div>
        </div>

        <div className="mt-4 flex items-center gap-5">
          <div className="flex justify-center items-center space-x-2">
            <Switch id="switch8" />
            <label
              for="checkbox8"
              className="text-base font-medium text-navy-700 dark:text-white"
            >
              Enable Video Proctoring
            </label>
          </div>

          <div className="flex justify-center items-center space-x-2">
            <Switch id="switch8" />
            <label
              for="checkbox8"
              className="text-base font-medium text-navy-700 dark:text-white"
            >
              Enable Audio Proctoring
            </label>
          </div>
        </div>

        <div className="mt-[36px] flex items-center justify-between gap-4 sm:justify-start 2xl:gap-10">
          <button className="linear rounded-xl bg-brand-500 px-4 py-2 text-center text-base font-medium text-white transition duration-200 hover:!bg-brand-500/80 active:!bg-brand-500/70 dark:bg-brand-400">
            Create Exam
          </button>
          <button
            href=" "
            className="text-black rounded-xl px-4 py-2 text-base font-medium hover:ring dark:text-white 2xl:ml-2"
          >
            Save Draft
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateExamForm;
