import HourTitle from "./components/HourTitle";
import RoomBooking from "./components/RoomBooking";
import { DragDropContext, Droppable ,Draggable   } from '@hello-pangea/dnd';
import { useState } from 'react';

const TimeRow = ({ times, dates }) => {
  const [bookingData, setBookingData] = useState(dates[2]);
  const onDragEnd = (result) => {
    const { destination, source } = result;
    console.log(result);
    
    // 如果拖動到無效區域，直接返回
    if (!destination) return;
  
    const sourceIndex = source.index;
    const destinationIndex = destination.index;
  
    // 創建 bookingData 的副本，避免直接修改狀態
    const newBookingData = Array.from(bookingData);
  
    // 取得並移除被拖動的項目
    const [removed] = newBookingData.splice(sourceIndex, 1);
  
    // 在目標位置插入移動的項目
    newBookingData.splice(destinationIndex, 0, removed);
  
   
    // 更新狀態
    setBookingData(newBookingData);
  
    // 驗證結果
    console.log(newBookingData);
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
