import { useDispatch } from 'react-redux';
import { prevDays } from '../../store/calendarSlice';

// 返回按鈕
const PreviousButton= () => {
    // store
    const dispatch = useDispatch();
    const handleLastMonthEvent = ()=>{
        dispatch(prevDays())
    }

    return (
        <div className="flex justify-center items-center cursor-pointer bg-white dark:bg-gray-700  min-w-12 h-12 border border-[#E9E9E9] rounded dark:border-gray-500" onClick={handleLastMonthEvent}>
            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.5 11L1.5 6L6.5 1" stroke="#1854FC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    )
}

export default PreviousButton