import InputField from "../../../../components/fields/InputField";

const CourseBanner = () => {
  return (
    <div className="flex w-full flex-col rounded-[20px] bg-white bg-cover px-[30px] py-[30px] dark:bg-navy-800 md:px-[64px] md:py-[56px] ">
      <div className="w-full">
        <h4 className="text-black mb-[14px] max-w-full text-xl font-bold dark:text-white md:w-[64%] md:text-3xl md:leading-[42px] lg:w-[46%] xl:w-[85%] 2xl:w-[75%] 3xl:w-[52%]">
          Add Course
        </h4>
        {/* <p className="mb-[40px] max-w-full text-base font-medium text-[#E3DAFF] md:w-[64%] lg:w-[40%] xl:w-[72%] 2xl:w-[60%] 3xl:w-[45%]">
          Enter in this creative world. Discover now the latest NFTs or start
          creating your own!
        </p> */}

        <InputField
          variant="auth"
          extra="mb-3"
          label="Course Name*"
          placeholder="Course Name"
          id="courseName"
          name="courseName"
          type="text"
        />

        <InputField
          variant="auth"
          extra="mb-3"
          label="Course Code*"
          placeholder="Course Code"
          id="courseCode"
          name="courseCode"
          type="text"
        />

        <InputField
          variant="auth"
          extra="mb-3"
          label="Maximum Marks*"
          placeholder="Maximum Marks"
          id="courseMarks"
          name="courseMarks"
          type="number"
        />

        <div className="mt-[36px] flex items-center justify-between gap-4 sm:justify-start 2xl:gap-10">
          <button className="linear rounded-xl bg-brand-500 px-4 py-2 text-center text-base font-medium text-white transition duration-200 hover:!bg-brand-500/80 active:!bg-brand-500/70 dark:bg-brand-400">
            Add Course
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

export default CourseBanner;
