import ButtonGroup from "../btn/ButtonGroup";
import FilterButton from "../btn/FilterButton";
import DateItem from "./components/DateItem";
import moment from "moment";
const buttons = [{ text: "room" }, { text: "floor" }];

const MoonRow = ({ dates }) => {
  return (
    <div className="flex w-full">
      {/* room / floor 按鈕 */}
      <div className="flex gap-4 bg-white items-center border-[#E1E1E1] border-b w-[160px] mb:w-[240px] lg:w-[352px]">
        <ButtonGroup buttons={buttons} />
        <FilterButton />
      </div>
      {/* Date items */}
      <div className="flex-grow flex justify-between">
        {dates.map((date, index) => {
          const dateState = dateClassHandler(date); 
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
  const isHoliday = isWeekend(date); // 假日判斷
  const isToday = moment(date).isSame('2024-05-20', 'day');; // 是否是今天
  const isBeforeToday = moment(date).isBefore('2024-05-20', 'day'); // 判斷是否是今天之前
  const week = moment(date, "YYYY-M-D").format("ddd"); // 星期
  const day = moment(date, "YYYY-M-D").format("DD"); // 日
  const mon = moment(date, "YYYY-M-D").format("MMM"); // 月

  return {
    isHoliday,
    isBeforeToday,
    isToday,
    week,
    day,
    mon,
  };
};

export default MoonRow;
