import moment from "moment";

// 判斷是否為週末
const isWeekend = (date) => {
  const day = moment(date, "YYYY-M-D").day();
  return day === 0 || day === 6; // 星期日或星期六
};

// 處理日期樣式
const dateClassHandler = (date) => {
  const mmt = moment(date, "YYYY-M-D"); 

  if (!mmt.isValid()) {
    console.error("Invalid date format:", date);
    return {};
  }
  
  const isHoliday = isWeekend(date); // 假日判斷
  const isToday = mmt.isSame(moment(), "day"); // 判斷是否是今天
  const isBeforeToday = mmt.isBefore(moment(), "day"); // 判斷是否是今天之前
  const weekDay = mmt.format("ddd"); // 星期幾（簡寫）
  const monthName = mmt.format("MMM"); // 月份名稱（簡寫）
  const dateDayName = mmt.format("D"); // 日期
  

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

  
  const { weekDay,dateDayName,monthName, isToday, isHoliday} = dateState
  // class 樣式設定
  let containerClasses = `pt-2 pb-1 flex-1 border-[#E1E1E1] dark:border-gray-800   border-r flex flex-col items-center justify-center ${
    isHoliday ? 'bg-[#EDFFFF] dark:bg-[#43768c]' : 'bg-white dark:bg-gray-700 dark:text-gray-700'
  }`;

  let weekClasses = `text-sm font-semibold text-[#4B4B4B] dark:text-gray-300`;//week 樣式
  let dayClasses = 'text-[#1E1E1E] font-bold md:text-xl textlg dark:text-gray-300';//day 樣式
  let monthClasses = 'text-sm text-[#787878] dark:text-gray-300';//month 樣式
  
  // 今天的樣式覆蓋
  if (isToday) {
    containerClasses = `flex-1 bg-[#ff9900] border-[#f55300] border-t-8 flex flex-col items-center justify-center`;
    dayClasses = 'text-white font-bold text-xl ';
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