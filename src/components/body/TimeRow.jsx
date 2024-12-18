import HourTitle from "./components/HourTitle";
import RoomBooking from "./components/RoomBooking";

const TimeRow = ({ times, dates }) => {
  return times.map((time, roomIndex) => (
    <div key={roomIndex} className="flex w-auto">
      {/* 時段標題 */}
      <HourTitle time={time} />
      {/* 日期網格 */}
      <div className="flex-grow flex justify-between">
        {dates.map((date, dateIndex) => (
          <RoomBooking
            keyId={dateIndex}
            key={dateIndex}
            hour={time}
            todoList={date["todoList"]}
            today={date["date"]}
          />
        ))}
      </div>
    </div>
  ));
};

export default TimeRow;
