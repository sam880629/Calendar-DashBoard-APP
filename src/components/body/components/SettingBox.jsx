import * as React from 'react';
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { useDispatch, useSelector } from "react-redux";
import { setDaysToShow, setCalendarDate } from "../../../store/calendarSlice";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import TextField from '@mui/material/TextField';
import { useState } from "react";
import AlertDialog from './AlertDialog';



// 設定選單
export default function SettingBox({ booking, keyId, today,closeCard  }) {
  const { title } = booking;
  const [inputError, setInputError] = useState(false); 
  // store
  const dispatch = useDispatch();
  // 月曆store
  const { showData, currentMonth } = useSelector((state) => state.Calendar);
  const [inputValue, setInputValue] = useState(title);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  //刪除handler
  const deleteHandler = () => {
    const targetArray = showData[keyId].todoList;
    const newBookingData = targetArray.filter((todo) => todo.id !== booking.id);

    dispatch(
      setCalendarDate({
        newBookingData,
        currentMonth: currentMonth,
        target_date: `${today}`,
      })
    );
    dispatch(setDaysToShow({ daysToShow: 7, init: true })); 
};

  //更新handler
  const updateHandler = () => {
    if(inputValue==''){
        setInputError(true)
        return;
    }
    const targetArray = showData[keyId].todoList;
    const newBookingData = [
        ...targetArray.filter((todo) => todo.id !== booking.id), 
        { ...booking, title: inputValue }
    ];

    dispatch(
        setCalendarDate({
          newBookingData,
          currentMonth: currentMonth,
          target_date: `${today}`,
        })
      );
    dispatch(setDaysToShow({ daysToShow: 7, init: true }));
    closeCard();
  };

  return (
    <div className="z-10 min-w-40 flex flex-col border rounded bg-slate-400 p-2 shadow-lg absolute top-full -right-1/2">
      <TextField
        error={inputError} 
        value={inputValue} 
        onChange={handleInputChange} 
        helperText={inputError? 'cannot be blank':''}
        variant="standard"
      /> 
      <div className=" ml-auto p-1 rounded cursor-pointer flex">
        {/* 更新 */}
        <div onClick={updateHandler}>
          <Tooltip title="update"  disabled={inputError || !inputValue}>
            <IconButton>
              <CheckCircleIcon />
            </IconButton>
          </Tooltip>
        </div>
        <AlertDialog  handler={deleteHandler}/>
      </div>
    </div>
  );
}
