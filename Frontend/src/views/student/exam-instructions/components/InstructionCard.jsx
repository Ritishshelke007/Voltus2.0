import Card from "../../../../components/card";
import React from "react";
import InputField from "../../../../components/fields/InputField";
import { useNavigate } from "react-router-dom";

const InstructionsCard = () => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate("/exam/code-editor");
  };
  return (
    <Card extra={"w-full h-full p-3"}>
      {/* Header */}
      <div className="mt-2 mb-8 w-full  px-5">
        <h4 className=" text-xl font-bold text-navy-700 dark:text-white">
          Exam Instructions
        </h4>
        <div className="mt-2  text-gray-900 font-medium dark:text-white/60">
          <ul className="list-decimal space-y-4">
            <li>
              Candidates shall be allowed to enter the laboratory 10 minutes
              before the actual schedule.
            </li>
            <li>
              Experiments shall be allotted to the students by lot. If the
              allotted experiment had not been performed by the candidate
              (Evidenced by journal), such a candidate, on his/her demand will
              have an option to pick a lot for alternative experiment. Under
              such cases, 10 marks be deducted out of the marks obtained in the
              paper. No further chance to change the allotted experiment shall
              be given and the candidate shall perform the experiment without
              further option.
            </li>
            <li>
              The examiner shall give all the necessary instructions to the
              candidates prior to the schedule of particular paper.
            </li>
          </ul>
        </div>
      </div>
      {/* Cards */}
      <div className="px-2 w-fit">
        <InputField
          label="Enter Exam Code*"
          id="examCode"
          name="examCode"
          placeholder="Enter Exam Code"
          extra="w-60"
        />
      </div>

      <div className="px-2">
        <button
          onClick={handleOnClick}
          className="p-3 rounded-md bg-blueSecondary text-white mt-5 hover:bg-blueSecondary/90"
        >
          Start Exam
        </button>
      </div>
    </Card>
  );
};

export default InstructionsCard;
