import { useDispatch, useSelector } from 'react-redux';
import { nextDays } from '../../store/calendarSlice';

// 下一個按鈕
const NextButton =()=> {
    // store
    const dispatch = useDispatch();
    const { monthName, CalendarDate } = useSelector((state) => state.Calendar);

    const handleNextMonthEvent = ()=>{
       dispatch(nextDays());
    }

    return(
    <div className="flex justify-center items-center cursor-pointer bg-white min-w-12 h-12 border border-[#E9E9E9] rounded " onClick={handleNextMonthEvent}>
        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.5 11L6.5 6L1.5 1" stroke="#1854FC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    </div>
    )
}

export default NextButton