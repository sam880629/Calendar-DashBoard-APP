import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { useDispatch, useSelector } from "react-redux";
import { setDaysToShow, setCalendarDate } from "../../../store/calendarSlice";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Input from "@mui/material/Input";
import { useState } from "react";
const BasicTooltip = () => {
  return (
    <Tooltip title="Delete">
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  );
};

// 下拉選單組件
export default function SettingBox({ booking, keyId, today }) {
  const { title } = booking;
  // store
  const dispatch = useDispatch();
  // 月曆store
  const { showData, currentMonth } = useSelector((state) => state.Calendar);
  const [inputValue, setInputValue] = useState(title);

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
    dispatch(setDaysToShow({ daysToShow: 7, init: true })); //其餘裝置7筆
  };

  //更新handler
  const updateHandler = () => {
    
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
    dispatch(setDaysToShow({ daysToShow: 7, init: true })); //其餘裝置7筆
    
  };

  return (
    <div className="z-10 min-w-40 flex flex-col border rounded bg-slate-400 p-2 shadow-lg absolute top-full -right-1/2">
      <Input
        defaultValue={title}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div className=" ml-auto p-1 rounded cursor-pointer flex">
        {/* 更新 */}
        <div onClick={updateHandler}>
          <Tooltip title="Checked">
            <IconButton>
              <CheckCircleIcon />
            </IconButton>
          </Tooltip>
        </div>
        {/* 移除 */}
        <div onClick={deleteHandler}>
          <BasicTooltip />
        </div>
      </div>
    </div>
  );
}
