// 訂單狀態樣式
const roomStatusClasses={
  "CheckOut": "bg-[#FBAEAE80]",
  "CheckIn": "bg-[#96F2D180]",
  "Future":"bg-[#8ED5FD80]",
}
// 預訂類型樣式
const  reservationTypeClasses={
  "Individual": "border-[#1994FC]",
  "Group": "border-[#8B5CF6]",
  "Dayuse":"border-[#F59E0B]",
}
const BookingCard = ({booking}) => {
  const {status, reservationType} =booking
  return (
    <div className={`${roomStatusClasses[status]} ${reservationTypeClasses[reservationType]}  w-[139px] h-[60px]  border-l-4 rounded py-[9px] pl-[6px]  absolute top-0`}>
      <p className=' text-[#787878] text-[10px] '>Conf.#1022110</p>
      <p className='font-semibold text-[#787878] text-[12px]'>Cynthia,Tsai</p>
      <p className=' text-[#787878] text-[10px]'>0970412412</p>
    </div>
  );
};

export default BookingCard;