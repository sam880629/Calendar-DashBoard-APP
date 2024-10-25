import NextButton from "./btn/NextButton";
import PreviousButton from "./btn/PreviousButton";
import DayPickButton from "./btn/DayPickButton";
import ToggleSwitch from "./btn/ToggleSwitch";
import { useSelector } from 'react-redux';
import { setEditLocked } from "../store/editLockedSlice";
import { useDispatch } from "react-redux";

const Control = () => {
  // store參數
  const { editLocked } = useSelector(state => state.editLocked);

   // store函式
   const dispatch = useDispatch();
   
   const handleLocked = () => {
     dispatch(setEditLocked(!editLocked))
   };

  return (
    <div className="bg-[#F4F4F4] flex gap-1 pr-4 pl-4 md:pr-8 md:pl-6 pb-6 pt-4 min-h-[80px] relative">
      {/* <DatePicKButton year="2024" month="Apr" /> */}
      <PreviousButton />
      <DayPickButton day="Today" />
      <NextButton />
      <div className="ml-auto xl:flex items-center hidden">
        <p className='mr-2'>unlock</p>
        <ToggleSwitch  onClick={handleLocked}/>
      </div>
    </div>
  );
}

export default Control;
