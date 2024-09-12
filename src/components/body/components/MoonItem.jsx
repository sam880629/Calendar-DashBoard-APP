import moment from 'moment';

const MoonItem = ({ dateStr }) => {
  const isHoliday = isWeekend(dateStr); // 假日判斷
  const isToday = moment(dateStr).isSame('2024.5.20', 'day'); // 判斷是否是今天

  const week = moment(dateStr).format('ddd'); // 星期
  const day = moment(dateStr).format('DD'); // 日
  const mon = moment(dateStr).format('MMM'); // 月

  // class 樣式設定
  let containerClasses = `flex-1 border-[#E1E1E1] border-l border-b border-r   flex flex-col items-center justify-center ${
    isHoliday ? 'bg-[#FFFFF0]' : 'bg-white'
  }`;
  
  const weekClasses = `text-sm font-semibold ${
    isHoliday ? 'text-[#FF6E6E]' : 'text-[#4B4B4B]'
  }`;
  
  let dayClasses = 'text-[#1E1E1E] font-bold text-lg';
  
  // 今天的樣式覆蓋
  if (isToday) {
    containerClasses = `flex-1 bg-[#EDF5FF] border-[#4B91FF] border-t-4 flex flex-col items-center justify-center`;
    dayClasses = 'text-[#1994FC] font-bold text-lg';
  }

  return (
    <div className={containerClasses}>
      <p className={weekClasses}>{week}</p>
      <p className={dayClasses}>{day}</p>
      <p className="text-sm text-[#787878] ">{mon}</p>
    </div>
  );
};

// 判斷是否是假日
const isWeekend = (dateStr) => {
  const day = moment(dateStr).day();
  return day === 0 || day === 6; // 星期日或星期六
};

export default MoonItem;