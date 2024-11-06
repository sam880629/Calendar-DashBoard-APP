
import { useDispatch, useSelector } from 'react-redux';
import { setToday } from '../../store/calendarSlice';
// 日期按鈕
const DatePickButton = ({day})=> {
// store
  const dispatch = useDispatch();
  const handleLastMonthEvent = ()=>{
    dispatch(setToday())
}
    return(
        <div onClick={handleLastMonthEvent} className="flex  dark:bg-gray-700 dark:text-white justify-center items-center gap-2 cursor-pointer bg-white w-full md:w-[90px] h-12 border border-[#E9E9E9] rounded dark:border-gray-500">
            <p className=' font-bold'>{day}</p>
        </div>
    )
}

export default DatePickButton