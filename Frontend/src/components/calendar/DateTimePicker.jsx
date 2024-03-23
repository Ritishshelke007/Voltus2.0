import React from "react";
import { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";

const DateTimePickerComponent = ({ extra, label, id, variant, format }) => {
  const [value, onChange] = useState(new Date());

  return (
    <div className="flex flex-col w-fit justify-center items-start ">
      <label
        htmlFor={id}
        className={`text-sm text-navy-700 dark:text-white ${
          variant === "auth" ? "ml-1.5 font-medium" : "ml-3 font-bold"
        }`}
      >
        {label}
      </label>
      <DateTimePicker
        className={`${extra}`}
        onChange={onChange}
        value={value}
        format={format}
      />
      {console.log(value)}
    </div>
  );
};

export default DateTimePickerComponent;
