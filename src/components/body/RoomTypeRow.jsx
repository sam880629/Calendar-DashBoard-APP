import RoomTitle from "./components/RoomTitle";

const RoomTypeRow = ({ floors, dates }) => {
  const { floor, icon_path, rooms } = floors
  return (
    <div className="flex w-full">
      {/* 房號 */}
      <RoomTitle roomType={floor} icon_path={icon_path} />

      {/* 日期的房間庫存 */}
      <div className="flex-grow flex justify-between">
        {dates.map((date, dateIndex) => {

          const count = getBookingForDate(rooms[0], date);
          return (
            <div
              key={dateIndex}
              className="flex-1 p-2 border bg-[#F4F4F4] text-center h-10 box-border"
            >
              <p>{count}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const getBookingForDate = (room, date) => {
  if (room.bookings[date]) {
    return room.bookings[date][0]["count"] || 0;
  }
  return 0;
};

export default RoomTypeRow;
