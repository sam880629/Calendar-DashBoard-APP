import DatePicKButton from "./btn/DatePickButton";
import NextButton from "./btn/NextButton";
import PreviousButton from "./btn/PreviousButton";
import DayPickButton from "./btn/DayPickButton";
import ToggleSwitch from "./btn/ToggleSwitch";
import ResetButton from "./btn/ResetButton";
import SaveButton from "./btn/SaveButton";
import PoolBox from "./PoolBox";
import { useSelector } from 'react-redux';


const Control = () => {
  // store參數
  const { editLocked } = useSelector(state => state.editLocked);


  return (
    <div className="bg-[#F4F4F4] flex gap-1 pr-4 pl-4 md:pr-8 md:pl-6 pb-6 pt-4 min-h-[80px] relative">
      <DatePicKButton year="2024" month="Apr" />
      <PreviousButton />
      <DayPickButton day="Today" />
      <NextButton />
      <div className="ml-auto xl:flex items-center hidden">
        <p className='mr-2'>unlock</p>
        <ToggleSwitch />
      </div>
      {/* 可編輯狀態 */}
      {editLocked &&
        <>
          <ResetButton />
          <SaveButton />
        </>
      }
      {editLocked && <PoolBox />}
    </div>
  );
}

export default Control;
