import moment from "moment";

// 判斷是否為週末
const isWeekend = (date) => {
  const day = moment(date, "YYYY-M-D").day();
  return day === 0 || day === 6; // 星期日或星期六
};

// 處理日期樣式
const dateClassHandler = (date) => {
  const mmt = moment(date); // 用 moment 對象解析日期
  const isHoliday = isWeekend(date); // 假日判斷
  const isToday = mmt.isSame(moment(), "day"); // 判斷是否是今天
  const isBeforeToday = mmt.isBefore(moment(), "day"); // 判斷是否是今天之前
  const weekDay = mmt.format("ddd"); // 星期幾（簡寫）
  const monthName = mmt.format("MMM"); // 月份名稱（簡寫）
  const dateDayName = mmt.format("DD"); // 日期
  return {
    isHoliday,
    isBeforeToday,
    isToday,
    weekDay,
    monthName,
    dateDayName,
  };
};
const MoonItem = ({ dateItem }) => {
  const dateState = dateClassHandler(dateItem.date);
  console.log(dateState);
  
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
      <p className={dayClasses}>{dateDayName}</p>
      <p className={monthClasses}>{monthName}</p>
    </div>
  );
};


export default MoonItem;