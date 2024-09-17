
const MoonItem = ({ dateState }) => {

  const {isHoliday, isToday,week,day,mon} = dateState
  // class 樣式設定
  let containerClasses = `flex-1 border-[#E1E1E1] border-l border-b border-r   flex flex-col items-center justify-center ${
    isHoliday ? 'bg-[#FFFFF0]' : 'bg-white'
  }`;
  
  const weekClasses = `text-sm font-semibold ${
    isHoliday ? 'text-[#FF6E6E]' : 'text-[#4B4B4B]'
  }`;
  
  let dayClasses = 'text-[#1E1E1E] font-bold ';
  
  // 今天的樣式覆蓋
  if (isToday) {
    containerClasses = `flex-1 bg-[#EDF5FF] border-[#4B91FF] border-t-4 flex flex-col items-center justify-center`;
    dayClasses = 'text-[#1994FC] font-bold ';
  }

  return (
    <div className={containerClasses}>
      <p className={weekClasses}>{week}</p>
      <p className={dayClasses}>{day}</p>
      <p className="text-sm text-[#787878] ">{mon}</p>
    </div>
  );
};


export default MoonItem;