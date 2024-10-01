import ButtonGroup from "../btn/ButtonGroup";
import FilterButton from "../btn/FilterButton";
import DateItem from "./components/DateItem";
import moment from "moment";
const buttons = [{ text: "room" }, { text: "floor" }];

const MoonRow = ({ dates }) => {
  return (
    <div className="flex w-full">
      {/* room / floor 按鈕 */}
      <div className=" py-4 flex gap-4 bg-white items-center border-[#E1E1E1] border-b w-[160px] md:w-[240px] xl:w-[352px]">
        <ButtonGroup buttons={buttons} />
        <FilterButton />
      </div>
    
  
      {/* Date items */}
      <div className="flex-grow flex justify-between">
        {dates.map((date, index) => {
          // const dateState = date; 
          const dateState = dateClassHandler(date.date); 
         
          
          return <DateItem key={index} dateState={dateState} />;
        })}
      </div>
    </div>
  );
};
// 判斷是否為週末
const isWeekend = (date) => {
  const day = moment(date, "YYYY-M-D").day();
  return day === 0 || day === 6; // 星期日或星期六
};

// 處理日期樣式
const dateClassHandler = (date) => {
  const mmt = moment(date); // 用 moment 對象解析日期
  const isHoliday = isWeekend(date); // 假日判斷
  const isToday = mmt.isSame(moment(), 'day'); // 判斷是否是今天
  const isBeforeToday = mmt.isBefore(moment(), 'day'); // 判斷是否是今天之前
  const weekDay = mmt.format("ddd"); // 星期幾（簡寫）
  const monthName = mmt.format("MMM"); // 月份名稱（簡寫）
  const dateDayName = mmt.format("DD"); // 日期

  return {
      isHoliday,
      isBeforeToday,
      isToday,
      weekDay,
      monthName,
      dateDayName
  };
};

export default MoonRow;
