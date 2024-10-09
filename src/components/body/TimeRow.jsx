import HourTitle from "./components/HourTitle";
import RoomBooking from "./components/RoomBooking";
import { DragDropContext, Droppable ,Draggable   } from 'react-beautiful-dnd';


const TimeRow = ({ times, dates }) => {

  // 拖動結束的處理函數
  const onDragEnd = (result) => {
    if (!result.destination) return; // 如果沒有放置到有效區域
    // 在這裡處理項目重排序或其他業務邏輯
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
              />
            ))}
          </div>
          </DragDropContext>
        </div>
      ))
    
  );
};


export default TimeRow;
