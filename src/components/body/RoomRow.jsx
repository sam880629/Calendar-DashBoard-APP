import RoomNumber from "./components/RoomNumber";
import RoomBooking from "./components/RoomBooking";
import moment from "moment";

const RoomRow = ({ rooms, dates }) => {

  return rooms.map((room, roomIndex) => (
    <div key={roomIndex} className="flex w-full">
  
      {/* 房間名稱/號碼 */}
      <RoomNumber room={room} />

      {/* 日期網格 */}
      {/* <div className="flex-grow flex justify-between">
        {dates.map((date, dateIndex) => {
          const dateState = dateClassHandler(date);
          return (
            <RoomBooking
              key={dateIndex}
              room={room}
              date={date}
              dateState={dateState}
            />
          );
        })}
      </div> */}
    </div>
  ));
};

// 判斷是否為週末
const isWeekend = (date) => {
  const day = moment(date, "YYYY-M-D").day();
  return day === 0 || day === 6; // 星期日或星期六
};

// 處理日期樣式
const dateClassHandler = (date) => {
  const isHoliday = isWeekend(date); // 假日判斷
  const isToday = moment(date).isSame('2024-05-20', 'day');
  const isBeforeToday = moment(date).isBefore('2024-05-20', 'day'); // 判斷是否是今天之前
  const week = moment(date, "YYYY-M-D").format("ddd"); // 星期
  const day = moment(date, "YYYY-M-D").format("DD"); // 日
  const mon = moment(date, "YYYY-M-D").format("MMM"); // 月

  return {
    isHoliday,
    isToday,
    isBeforeToday,
    week,
    day,
    mon,
  };
};
export default RoomRow;
