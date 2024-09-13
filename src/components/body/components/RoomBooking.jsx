import BookingCard from "./BookingCard";


const RoomBooking = ({ room, date ,dateState}) => {
  const {isHoliday, isToday, isBeforeToday} = dateState
  const { bookings } = room;
  const booking = getBookingForDate(bookings, date);

  // class 樣式設定
  let containerClasses = `flex-1 p-2 border  relative ${
    isHoliday ? 'bg-[#FFFFF0]' : 'bg-white'
  }`;
  
  if (isToday) {
    containerClasses = ` bg-[#EDF5FF] flex-1 p-2 border relative`;
  }else if(isBeforeToday){
    containerClasses = ` bg-[#F0F0F0] flex-1 p-2 border relative`;
  }

  return (
    <div className={containerClasses}>
      {booking.occupied ? (
        <BookingCard booking={booking} />
      ) : (
        <div className=""></div>
      )}
    </div>
  );
};

const getBookingForDate = (bookings, date) => {
  return bookings[date] || { count: 0, occupied: false };
};



export default RoomBooking;
