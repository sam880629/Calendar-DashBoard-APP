
const MoonItem = ({ dateState }) => {

  const { weekDay,dateDayName,monthName, isToday, isHoliday} = dateState
  // class 樣式設定
  let containerClasses = `flex-1 border-[#E1E1E1] border-l border-b border-r flex flex-col items-center justify-center ${
    isHoliday ? 'bg-[#EDFFFF]' : 'bg-white'
  }`;

  let weekClasses = `text-sm font-semibold text-[#4B4B4B]`;//week 樣式
  let dayClasses = 'text-[#1E1E1E] font-bold md:text-xl textlg ';//day 樣式
  let monthClasses = 'text-sm text-[#787878]';//month 樣式
  
  // 今天的樣式覆蓋
  if (isToday) {
    containerClasses = `flex-1 bg-[#ff9900] border-[#f55300] border-t-4 flex flex-col items-center justify-center`;
    dayClasses = 'text-white font-bold text-xl';
    monthClasses = 'text-sm text-white'
    weekClasses =`text-sm font-semibold text-white`;
  }

  return (
    <div className={containerClasses}>
      <p className={weekClasses}>{weekDay}</p>
      <p className={dayClasses}>10</p>
      <p className={monthClasses}>{monthName}</p>
    </div>
  );
};


export default MoonItem;