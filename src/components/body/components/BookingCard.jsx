const setData = ()=>{
  console.log('編輯');
  
}

const BookingCard = ({ booking}) => {
  const { time, title } = booking;

  return (
    <div onClick={setData} className={`border-l-4 rounded py-2 pl-1  w-10/12 mb-1 bg-[#1994FC] group flex`}>
      <p className="text-white text-[10px]">{title}</p>
      <p className="hidden group-hover:flex text-white">set</p>
    </div>
  );
};

export default BookingCard;
