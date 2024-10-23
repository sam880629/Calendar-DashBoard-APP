import { Fragment, useEffect, useState } from "react";
import MoonRow from "./MoonRow";
import RoomTypeRow from "./RoomTypeRow";
import TimeRow from "./TimeRow";
import { useDispatch, useSelector } from "react-redux";
import { setRoomData, setDates } from "../../store/roomSlice";
import { setDaysToShow, setCalendarDate } from "../../store/calendarSlice";
import { DragDropContext } from "@hello-pangea/dnd";
import TemporaryRow from "./temporaryRow";

// 各裝置寬度
const MAX_MOBILE_WIDTH = 768; //手機寬度

const MoonTable = () => {
  // store
  const dispatch = useDispatch();
  const { roomData } = useSelector((state) => state.room);
  const [temporary, setTemporary] = useState([]);
  // 月曆store
  const { showData, currentMonth } = useSelector((state) => state.Calendar);
  // 確認暫存區的渲染邏輯
  useEffect(() => {
    console.log('暫存區資料:', temporary);
  }, [temporary]);
  const displayDates = showData;

  //移動的變更
  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    console.log(result);
    
    // 如果拖動到無效區域，直接返回
    if (!destination) return;

    //初始資訊
    const sourceParts = source.droppableId.split("-");
    const sourceIndex = Number(draggableId.split("-")[2]);
    const sourceDate = sourceParts.slice(2, 5).join("-"); // 原先的目標日期
    const sourceColumnId = draggableId.split("-")[0]; // 來源欄位 ID
    const sourceTime = sourceParts[5]; // 原來的時間
    // 取得來源欄位的資料
    const sourceBookingData = Array.from(displayDates[sourceColumnId].todoList);
    let removed = sourceBookingData.find(
      (booking) => booking.id === sourceIndex
    );

    const newBookingData = sourceBookingData.filter(
      (booking) => booking.id !== sourceIndex
    );

    if(destination.droppableId=='tt-drop'){
      console.log('暫存區');
      setTemporary([removed,...temporary]);
      // 更新來源日期的狀態
      dispatch(
        setCalendarDate({
          newBookingData: newBookingData,
          currentMonth: sourceParts[3] - 1, // 月份
          target_date: sourceDate,
        })
      );
       // 更新顯示天數
      handleWindowWidth();
      return
    }

    //改變資訊
    const destinationIndex = destination.index;
    const destinationParts = destination.droppableId.split("-");
    const destinationDate = destinationParts.slice(2, 5).join("-"); // 要移動到的目標日期
    const destTime = destinationParts[5]; // 目標時間

    // 更改時間
    if (sourceTime != destTime) {
      removed = {
        ...removed,
        time: `${destTime}:00`,
      };
    }
    // 更新來源日期的狀態
    dispatch(
      setCalendarDate({
        newBookingData: newBookingData,
        currentMonth: sourceParts[3] - 1, // 月份
        target_date: sourceDate,
      })
    );
    // 不同日期之間移動
    if (sourceDate !== destinationDate) {
      // 取得目標日期的資料
      const targetBookingData = Array.from(
        displayDates[destinationParts[0]].todoList
      );

      // 將移除的項目插入目標日期的指定位置
      targetBookingData.splice(destinationIndex, 0, removed);

      // 更新目標日期的狀態
      dispatch(
        setCalendarDate({
          newBookingData: targetBookingData,
          currentMonth: destinationParts[3] - 1,
          target_date: destinationDate,
        })
      );
    } else {
      // 移除並重新插入項目
      newBookingData.splice(destinationIndex, 0, removed);
      // 更新狀態
      dispatch(
        setCalendarDate({
          newBookingData,
          currentMonth,
          target_date: sourceDate,
        })
      );
    }

    // 更新顯示天數
    handleWindowWidth();
  };

  // 根據寬度大小設定裝置
  const handleWindowWidth = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth < MAX_MOBILE_WIDTH) {
      dispatch(setDaysToShow(3)); //手機顯示3筆
    } else if (windowWidth >= MAX_MOBILE_WIDTH) {
      dispatch(setDaysToShow(7)); //其餘裝置7筆
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
        <TemporaryRow temporary={temporary}/>
          {roomData.map((floors, index) => (
            <Fragment key={index}>
              {/* 房型 */}
              {/* <RoomTypeRow floors={floors} dates={displayDates} /> */}
              {/* 房間名稱和訂單 */}
                <TimeRow
                  times={floors.times}
                  dates={displayDates}
                  currentMonth={currentMonth}
                />
            </Fragment>
          ))}
          
      </DragDropContext>
    </>
  );
};

export default MoonTable;
