import { Fragment, useEffect, useState } from "react";
import MoonRow from "./MoonRow";
import RoomTypeRow from "./RoomTypeRow";
import RoomRow from "./RoomRow";
import { useDispatch, useSelector } from 'react-redux';
import { setRoomData, setDates } from '../../store/roomSlice';
import { setDaysToShow } from '../../store/calendarSlice';
import moment from "moment";

const LAYOUT = {
  MOBILE: 'mobile',
  TABLET: 'tablet',
  DESKTOP: 'desktop',
}

// 各裝置寬度
const MAX_MOBILE_WIDTH = 768
const MAX_TABLET_WIDTH = 1440

const MoonTable = () => {
  // store
  const dispatch = useDispatch();
  const { roomData} = useSelector((state) => state.room);

  // 月曆
  const { CalendarDate, startDay, daysToShow } = useSelector((state) => state.Calendar);
  const displayDates = getDisplayDates(CalendarDate, startDay, daysToShow);
  console.log(CalendarDate);
  
  useEffect(() => {
    // 根據寬度大小設定裝置
    const handleWindowWidth = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth < MAX_MOBILE_WIDTH) {
        dispatch(setDaysToShow(3)); // 移動裝置顯示3天
      } else if (windowWidth >= MAX_MOBILE_WIDTH && windowWidth < MAX_TABLET_WIDTH) {
        dispatch(setDaysToShow(7)); // 平板裝置顯示7天
      } else {
        dispatch(setDaysToShow(14)); // 桌面裝置顯示14天
      }
    };

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
      {roomData.map((floors, index) => (
        <Fragment key={index}>
          {/* 房型 */}
          <RoomTypeRow floors={floors} dates={displayDates} />
          {/* 房間名稱和訂單 */}
          <RoomRow rooms={floors.rooms} dates={displayDates} />
        </Fragment>
      ))}
    </>
  );
};

// 根據寬度大小選擇要顯示的資料數量
const getDisplayDates = (CalendarDate, startDay, daysToShow) => {
  console.log(startDay);
  
  return CalendarDate.slice(startDay, startDay + daysToShow);
};

export default MoonTable;
