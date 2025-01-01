import React, { Fragment, memo, useEffect, useState } from "react";
import MoonRow from "./MoonRow";
import TimeRow from "./TimeRow";
import { useDispatch, useSelector } from "react-redux";
import {
  setDaysToShow,
  setCalendarDate,
  addCalendarDate,
} from "../../store/calendarSlice";
import { DragDropContext } from "@hello-pangea/dnd";
import TemporaryRow from "./TemporaryRow";
import AddDialog from "../body/components/AddDialog";

// 各裝置寬度
const MAX_MOBILE_WIDTH = 768; //手機寬度

const getTime = () => {
  const now = new Date();
  const currentHour = now.getHours();

  const timeArray = [];

  for (let i = currentHour; i < 24; i++) {
    timeArray.push(i);
  }

  for (let i = 0; i < currentHour; i++) {
    timeArray.push(i);
  }

  return timeArray;
};

const MoonTable = () => {
  const [id, setId] = useState(21);
  // store
  const dispatch = useDispatch();
  const [temporary, setTemporary] = useState([]);
  // 月曆store
  const { showData, currentMonth } = useSelector((state) => state.Calendar);

  
  const displayDates = showData;

  
  const roomData = [
    {
      times: getTime(),
    },
  ];
 
  //移動的變更
  const updateCalendar = (newBookingData, currentMonth, targetDate) => {
    dispatch(
      setCalendarDate({
        newBookingData,
        currentMonth: currentMonth - 1,
        target_date: targetDate,
      })
    );
  };

  // 新增資料
  const addCalendar = (newBookingData, currentMonth, targetDate) => {
    dispatch(
      addCalendarDate({
        newBookingData,
        currentMonth: currentMonth,
        target_date: targetDate,
      })
    );
  };

  // 增加資料
  const AddCalendar = (inputValue, timeValue) => {
    //定義資料
    const { $y, $M, $D, $H, $m } = timeValue;
    const date = `${$y}-${$M + 1}-${$D}`;
    const data = [
      {
        id: id,
        time: `${$H}:${$m}`,
        title: `${inputValue}`,
      },
    ];
    // 寫入資料並更新
    setId((prevId) => prevId + 1);
    addCalendar(data, Number($M), date);
    handleWindowWidth(true);
  };

  // DnD移動事件
  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    // 移動到無效區域，直接返回
    if (!destination) return;

    // 提取初始資訊
    const sourceParts = source.droppableId.split("-");
    const sourceIndex = Number(draggableId.split("-")[2]);
    const sourceDate = sourceParts.slice(2, 5).join("-");
    const sourceColumnId = draggableId.split("-")[0];
    const sourceTime = sourceParts[5];
    const sourceBookingData = Array.from(displayDates[sourceColumnId].todoList);

    // 移動的目標
    let removed = sourceBookingData.find(
      (booking) => booking.id === sourceIndex
    );
    //移除後新的資料陣列
    const newBookingData = sourceBookingData.filter(
      (booking) => booking.id !== sourceIndex
    );

    // 判斷是否移動到暫存區
    if (destination.droppableId === "tp-drop-0000-00-00-25") {
      if (source.droppableId === "tp-drop-0000-00-00-25") return;
      setTemporary([...temporary, removed]);
      updateCalendar(newBookingData, sourceParts[3], sourceDate);
      handleWindowWidth(true);
      return;
    }

    // 目標資訊
    const destinationParts = destination.droppableId.split("-");
    const destinationDate = destinationParts.slice(2, 5).join("-");
    const destinationTime = destinationParts[5];
    const destinationIndex = destination.index;

    // 暫存區移動到行事曆
    if (source.droppableId === "tp-drop-0000-00-00-25") {
      removed = temporary.find((booking) => booking.id === sourceIndex);

      // 判斷是否需要更改時間
      if (sourceTime !== destinationTime) {
        removed = {
          ...removed,
          time: `${destinationTime}:00`,
        };
      }
      const updatedTemporary = temporary.filter(
        (booking) => booking.id !== sourceIndex
      );
      setTemporary(updatedTemporary);

      const targetBookingData = Array.from(
        displayDates[destinationParts[0]].todoList
      );
      targetBookingData.splice(destinationIndex, 0, removed);
      updateCalendar(targetBookingData, destinationParts[3], destinationDate);
      handleWindowWidth(true);
      return;
    }

    // 判斷是否需要更改時間
    if (sourceTime !== destinationTime) {
      removed = {
        ...removed,
        time: `${destinationTime}:00`,
      };
    }

    updateCalendar(newBookingData, sourceParts[3], sourceDate);

    // 不同日期之間移動
    if (sourceDate !== destinationDate) {
      const targetBookingData = Array.from(
        displayDates[destinationParts[0]].todoList
      );
      targetBookingData.splice(destinationIndex, 0, removed);
      updateCalendar(targetBookingData, destinationParts[3], destinationDate);
    } else {
      // 在同一日期內移動
      newBookingData.splice(destinationIndex, 0, removed);
      updateCalendar(newBookingData, sourceParts[3], sourceDate);
    }

    // 更新顯示天數
    handleWindowWidth(true);
  };

  // 根據寬度大小設定裝置
  const handleWindowWidth = (init = false) => {
    const windowWidth = window.innerWidth;
    if (windowWidth < MAX_MOBILE_WIDTH) {
      dispatch(setDaysToShow({ daysToShow: 3, init: init })); //手機顯示3筆
    } else if (windowWidth >= MAX_MOBILE_WIDTH) {
      dispatch(setDaysToShow({ daysToShow: 7, init: init })); //其餘裝置7筆
    }
  };

  useEffect(() => {
    handleWindowWidth();
    window.addEventListener("resize", handleWindowWidth);
    return () => {
      window.removeEventListener("resize", handleWindowWidth);
    };
  }, [dispatch]);

  return (
    <>
    
      {/* {按鈕/日期} */}
      <MoonRow dates={displayDates} />
      <DragDropContext onDragEnd={onDragEnd}>
        {/* ˊ暫存區 */}
        <TemporaryRow temporary={temporary} />
        {roomData.map((floors, index) => (
          <Fragment key={index}>
            <TimeRow
              times={floors.times}
              dates={displayDates}
              currentMonth={currentMonth}
            />
          </Fragment>
        ))}
      </DragDropContext>
      <AddDialog
        handle={(inputValue, timeValue) => {
          AddCalendar(inputValue, timeValue);
        }}
      />
      
    </>
  );
};

export default MoonTable;
