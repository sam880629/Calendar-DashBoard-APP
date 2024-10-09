const BookingCard = ({ booking, index }) => {
  const { time, title } = booking;

 

  return (
    <div
      className=" border-l-4 rounded py-2 pl-1 bg-[#1994FC] w-10/12 mb-1"
    >
      <p className="text-white text-[10px]">{title}</p>
    </div>
  );
};

export default BookingCard;
