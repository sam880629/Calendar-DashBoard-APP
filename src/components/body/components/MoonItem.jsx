import moment from "moment";

const isWeekend = (date) => {
  const day = new Date(date).getDay(); // 0 = Sunday, 6 = Saturday
  return day === 0 || day === 6;
};

// 顯示月份BOX
const MoonItem = ({ dateStr }) => {
  const isHoliday = isWeekend(dateStr);
  const isToday = moment(dateStr).isSame("2024-5-20", "day"); //今日

  const week = moment(dateStr).format("ddd"); //星期
  const day = moment(dateStr).format("DD"); //日
  const mon = moment(dateStr).format("MMM"); //月

  // class樣式
  let containerClasses = ` border-[#E1E1E1] border-l border-b border-r  ${
    isHoliday ? "bg-[#FFFFF0]" : "bg-white"
  }`;
  const weekClasses = `text-sm font-semibold ${
    isHoliday ? "text-[#FF6E6E]" : "text-[#4B4B4B]"
  }`;
  let dayClasses = "text-[#1E1E1E] font-bold";
  // 判斷日期樣式變化
  if (isToday) {
    containerClasses = "bg-[#EDF5FF] border-[#4B91FF] border-t-4";
    dayClasses = "text-[#1994FC] font-bold";
  }

  return (
    <th className={containerClasses}>
      <p className={weekClasses}>{week}</p>
      <p className={dayClasses}>{day}</p>
      <p className="text-sm text-[#787878]">{mon}</p>
    </th>
  );
};

export default MoonItem;
