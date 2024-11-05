import { useState, useEffect, useRef, Fragment } from "react";
import ButtonGroup from "../btn/ButtonGroup";
import DateItem from "./components/DateItem";
import moment from "moment";

const buttons = [{ text: "room" }, { text: "floor" }];

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

const MoonRow = ({ dates }) => {
  const moonRowRef = useRef(null); // 參考區塊
  const [isSticky, setIsSticky] = useState(false); // 控制是否固定

  // 將日期至頂於上方
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting); 
      },
      { root: null, threshold: 0 } 
    );

    if (moonRowRef.current) {
      observer.observe(moonRowRef.current);
    }

    return () => {
      if (moonRowRef.current) {
        observer.unobserve(moonRowRef.current);
      }
    };
  }, []);

  return (
    <Fragment>
      <div ref={moonRowRef}></div>
      <div
        className={`flex w-full ${isSticky ? "fixed top-0 z-10 bg-white" : ""}`}
      >
        <div className=" py-4 flex gap-4 bg-white items-center border-[#E1E1E1] border-b w-[60px] md:w-[140px] xl:w-[152px]">
  
        </div>

        {/* Date items */}
        <div className="flex-grow flex justify-between">
          {dates.map((date, index) => {
            const dateState = dateClassHandler(date.date);
            return <DateItem key={index} dateState={dateState} />;
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default MoonRow;
