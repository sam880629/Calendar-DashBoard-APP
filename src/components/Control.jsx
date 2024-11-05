import NextButton from "./btn/NextButton";
import PreviousButton from "./btn/PreviousButton";
import DayPickButton from "./btn/DayPickButton";
import ToggleSwitch from "./btn/ToggleSwitch";


const Control = () => {

  return (
    <div className="bg-[#F4F4F4] flex gap-1 pr-4 pl-4 md:pr-8 md:pl-6 pb-6 pt-4 min-h-[80px] relative dark:bg-gray-600">
      {/* <DatePicKButton year="2024" month="Apr" /> */}
      <PreviousButton />
      <DayPickButton day="Today" />
      <NextButton />

      <div className="ml-auto xl:flex items-center hidden">
        {/* <p className="mr-2">模式</p> */}
        <ToggleSwitch  />
      </div>
    </div>
  );
};

export default Control;
