import BookingCard from "./BookingCard";


const RoomBooking = ({ room, date, dateState }) => {
  
  const { isHoliday, isToday, isBeforeToday } = dateState
  const { bookings } = room;

  const bookingList = getBookingForDate(bookings, date);

  // class 樣式設定
  let containerClasses = `flex-1 p-2 border  relative ${isHoliday ? 'bg-[#FFFFF0]' : 'bg-white'
    }`;

  if (isToday) {
    containerClasses = ` bg-[#EDF5FF] flex-1 p-2 border relative`;
  } else if (isBeforeToday) {
    containerClasses = ` bg-[#F0F0F0] flex-1 p-2 border relative`;
  }

  return (
    <div className={containerClasses}>
      {bookingList.length > 0 ? (
        bookingList.map((booking, index) => (
          <BookingCard key={index} booking={booking} />
        ))
      ) : (
        <div className=""></div>
      )}
    </div>
  );

};

// 有無對應的訂房資料
const getBookingForDate = (bookings, date) => {
    return bookings[date] || [];
};


export default RoomBooking;
