import { useState, useEffect, useRef, Fragment } from "react";
import DateItem from "./components/DateItem";


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
        className={`flex w-full ${isSticky ? "md:fixed top-0 z-10 bg-white dark:bg-gray-700" : ""}`}
      >
        <div className="dark:bg-gray-700  py-4 flex gap-4 bg-white items-center border-[#E1E1E1] border-r dark:border-gray-800  w-[60px] md:w-[140px] xl:w-[152px]">
  
        </div>

        {/* Date items */}
        <div className="flex-grow flex justify-between">
          {dates.map((date, index) => {
          
            return <DateItem key={index} dateItem={date} />;
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default MoonRow;
