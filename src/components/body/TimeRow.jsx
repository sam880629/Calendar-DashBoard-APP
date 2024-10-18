import HourTitle from "./components/HourTitle";
import RoomBooking from "./components/RoomBooking";
import { DragDropContext   } from '@hello-pangea/dnd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCalendarDate } from '../../store/calendarSlice';

const TimeRow = ({ times, dates, currentMonth }) => {
  const dispatch = useDispatch();
  
  const [bookingData, setBookingData] = useState(dates[3].todoList);

  const onDragEnd = (result) => {
    const { destination, source } = result;
    console.log(result);
    
    // 如果拖動到無效區域，直接返回
    if (!destination) return;
   
    const sourceIndex = source.index;
    const destinationIndex = destination.index;
    //目標日期
    const parts = source.droppableId.split('-');
    const target_date = parts.slice(1,4).join('-')
  

    const newBookingData = Array.from(bookingData);
  
    // 取得並移除被拖動的項目
    const [removed] = newBookingData.splice(sourceIndex, 1);
  
    // 在目標位置插入移動的項目
    newBookingData.splice(destinationIndex, 0, removed);
  
   
    // 更新狀態
    setBookingData(newBookingData);
    dispatch(setCalendarDate({newBookingData,currentMonth,target_date}));
    // 驗證結果
    console.log(newBookingData);
  };

  return (
   
      times.map((time, roomIndex) => (
        <div key={roomIndex} className="flex w-full">
          {/* 時段標題 */}
          <HourTitle time={time} />
          <div>{currentMonth}</div>
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
