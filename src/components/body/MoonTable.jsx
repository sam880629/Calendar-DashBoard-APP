import { Fragment, useEffect, useState } from "react";
import MoonRow from "./MoonRow";
import RoomTypeRow from "./RoomTypeRow";
import RoomRow from "./RoomRow";
import { useDispatch, useSelector } from 'react-redux';
import { setRoomData, setDates } from '../../store/roomSlice';
import { setDaysToShow } from '../../store/calendarSlice';

// 各裝置寬度
const MAX_MOBILE_WIDTH = 768//手機寬度

const MoonTable = () => {
  // store
  const dispatch = useDispatch();
  const { roomData} = useSelector((state) => state.room);

  // 月曆store
  const {showData} = useSelector((state) => state.Calendar);
   
  const displayDates = showData;
  
  useEffect(() => {
    // 根據寬度大小設定裝置
    const handleWindowWidth = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth < MAX_MOBILE_WIDTH) {
        dispatch(setDaysToShow(3)); //手機顯示3筆
      } else if (windowWidth >= MAX_MOBILE_WIDTH ) {
        dispatch(setDaysToShow(7)); 
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
          {/* <RoomTypeRow floors={floors} dates={displayDates} /> */}
          {/* 房間名稱和訂單 */}
          <RoomRow rooms={floors.rooms} dates={displayDates} />
        </Fragment>
      ))}
    </>
  );
};


export default MoonTable;
