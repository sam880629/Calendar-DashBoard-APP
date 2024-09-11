import DatePicKButton from "./btn/DatePickButton";
import NextButton from "./btn/NextButton";
import PreviousButton from "./btn/PreviousButton";
import DayPickButton from "./btn/DayPickButton";
import ToggleSwitch from "./btn/ToggleSwitch";

function Control() {
    
  return (
    <div className="bg-[#F4F4F4] flex gap-2 pr-8 pl-6 mb-6">
      <DatePicKButton year="2024" month="Apr" />
      <PreviousButton />
      <DayPickButton day="Today" />
      <NextButton />
      <div className="ml-auto flex items-center">
        <p className='mr-2'>unlock</p>
        <ToggleSwitch />
      </div>
    </div>
  );
}

export default Control;
