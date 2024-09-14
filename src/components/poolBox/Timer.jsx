import { Fragment, useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setEditLocked } from "../../store/editLockedSlice";


const Timer = ({ seconds }) => {
    // store參數
    const {editLocked} = useSelector(state => state.editLocked)
    // store事件
    const dispatch = useDispatch()

    const timerId = useRef();
    const [timerSec, setTimerSec] = useState(seconds)

    // 計時開始
    useEffect(() => {
        timerId.current = setInterval(() => {
            setTimerSec(prev => prev - 1)
        }, 1000)
        return () => clearInterval(timerId.current)
    }, [])

    // 計時停止並locked
    useEffect(() => {
        if (timerSec <= 0) {
            clearInterval(timerId.current)
            // Locked
            dispatch(setEditLocked(!editLocked))
        }
    }, [timerSec])

    return (
        <Fragment>
            <svg width="17" height="20" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 13L13.7125 9.2875M7.75 1.75H12.25M18.25 13C18.25 17.5563 14.5563 21.25 10 21.25C5.44365 21.25 1.75 17.5563 1.75 13C1.75 8.44365 5.44365 4.75 10 4.75C14.5563 4.75 18.25 8.44365 18.25 13Z" stroke="#FF6E6E" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <p className='text-[#FF6E6E] ml-1 mr-auto'>{formatTime(timerSec)}</p>
        </Fragment>
    )

}

// 轉換時間
const formatTime = (time) => {
    let minutes = Math.floor(time / 60)
    let seconds = Math.floor(time - minutes * 60)

    if (minutes < 10) minutes = "0" + minutes
    if (seconds < 10) seconds = "0" + seconds

    return `${minutes} : ${seconds}`
}


export default Timer