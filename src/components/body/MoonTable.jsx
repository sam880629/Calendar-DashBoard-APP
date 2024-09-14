import { Fragment, useEffect, useState } from "react";
import MoonRow from "./MoonRow";
import RoomTypeRow from "./RoomTypeRow";
import RoomRow from "./RoomRow";
import { useDispatch, useSelector } from 'react-redux';
import { setRoomData, setDates, setCurrentLayout } from '../../store/roomSlice';

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
  const { roomData, dates, currentLayout } = useSelector((state) => state.room);

  const displayDates = getDisplayDates(currentLayout, dates)

  useEffect(() => {

    // 根據寬度大小設定裝置
    const handleWindowWidth = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth < MAX_MOBILE_WIDTH) {
        dispatch(setCurrentLayout('mobile'));
      } else if (windowWidth >= MAX_MOBILE_WIDTH && windowWidth < MAX_TABLET_WIDTH) {
        dispatch(setCurrentLayout('tablet'));
      } else {
        dispatch(setCurrentLayout('desktop'));
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
const getDisplayDates = (currentLayout, dates) => {
  if (currentLayout === LAYOUT.MOBILE) {
    return dates.slice(0, 3);  // 顯示3筆資料
  } else if (currentLayout === LAYOUT.TABLET) {
    return dates.slice(0, 7);  // 顯示7筆資料
  } else {
    return dates.slice(0, 14); // 顯示14筆資料
  }
};

export default MoonTable;
