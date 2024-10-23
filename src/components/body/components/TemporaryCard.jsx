// 暫存區顯示卡片
const TemporaryCard = ({ booking, index }) => {
    const { time, title } = booking;
  
    return (
      <div
        className=" border-l-4 rounded py-2 pl-1 bg-gray-400 w-auto m-1 pr-5"
      >
        <p className="text-white text-[10px]">{title}</p>
      </div>
    );
  };
  
  export default TemporaryCard;
  