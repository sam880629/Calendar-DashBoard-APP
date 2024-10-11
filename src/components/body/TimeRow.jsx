import HourTitle from "./components/HourTitle";
import RoomBooking from "./components/RoomBooking";
import { DragDropContext, Droppable ,Draggable   } from '@hello-pangea/dnd';
import { useState } from 'react';

const TimeRow = ({ times, dates }) => {
  const [bookingData, setBookingData] = useState(dates);
  // 拖動結束的處理函數
  const onDragEnd = (result) => {
    const { destination, source } = result;

    if (!destination) return;
  
    // 複製現有的 bookingData
    const newBookingData = bookingData;
    
    console.log(bookingData);
    
    // 取得來源日期的 todoList
    const [sourceTodoList ]= Array.from(newBookingData);

    // 移除被拖動的項目
    newBookingData.splice(destination.index,0 ,sourceTodoList);

    // console.log(newBookingData);
    

    // 更新狀態
    // setBookingData(newBookingData);
  };

  return (
   
      times.map((time, roomIndex) => (
        <div key={roomIndex} className="flex w-full">
          {/* 時段標題 */}
          <HourTitle time={time} />

          {/* 日期網格 */}
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="flex-grow flex justify-between">
            {dates.map((date, dateIndex) => (
              <RoomBooking
                key={dateIndex}
                hour={time}
                todoList={date["todoList"]}
                today = {date["date"]}
              />
            ))}
          </div>
          </DragDropContext>
        </div>
      ))
    
  );
};


export default TimeRow;
