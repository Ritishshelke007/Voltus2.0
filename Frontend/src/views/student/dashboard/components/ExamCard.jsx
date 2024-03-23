import React from "react";
import Card from "../../../../components/card";
import { useNavigate } from "react-router-dom";

const ExamCard = ({
  courseName,
  courseCode,
  examDateTime,
  year,
  division,
  status,
  extra,
}) => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate("/student/dashboard/exam-instructions");
  };

  return (
    <Card
      extra={`flex flex-col w-full h-full !p-4 3xl:p-![18px] bg-white ${extra}`}
    >
      <div className="h-full w-full">
        <div className="relative w-full space-y-3">
          <p className="text-lg font-bold text-navy-700 dark:text-white">
            Course Name: {courseName}
          </p>
          <p className="text-md mt-1 font-medium text-gray-700 md:mt-2">
            <span className="text-navy-700 dark:text-navy-50">
              Course Code:
            </span>{" "}
            {courseCode}
          </p>

          <p className="text-md mt-1 font-medium text-gray-700 md:mt-2">
            <span className="text-navy-700 dark:text-navy-50">Exam Date:</span>{" "}
            {examDateTime}
          </p>
          <p className="text-md mt-1 font-medium text-gray-700 md:mt-2">
            <span className="text-navy-700 dark:text-navy-50">Year:</span>{" "}
            {year}
          </p>
          <div className="text-md mt-1 font-medium text-gray-700 md:mt-2 flex gap-5">
            <div className="text-navy-700 dark:text-navy-50">
              Division: <span className="text-gray-700">{division}</span>
            </div>

            <div className="text-navy-700 dark:text-navy-50">
              Batch: <span className="text-gray-700">{division}</span>
            </div>
          </div>

          <button
            onClick={handleOnClick}
            href=""
            className="linear rounded-[20px] bg-brand-900 px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:opacity-90"
          >
            {status}
          </button>
        </div>
      </div>
    </Card>
  );
};

export default ExamCard;
