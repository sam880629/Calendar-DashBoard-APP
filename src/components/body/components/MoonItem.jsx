// 顯示月份BOX
function MoonItem({ Date }) {
    
  let ThStyle = `w-auto  border-[#E1E1E1] border-l border-b border-r border-transparent `;
  // 判斷是否是周末
  const isWeekend = Date.week === "Sat" || Date.week === "Sun";

  //樣式
  const containerClasses = `text-center w-100 h-auto ${
    isWeekend ? "bg-[#FFFFF0]" : "bg-white"
  }`;
  const weekClasses = `text-sm font-semibold ${
    isWeekend ? "text-[#FF6E6E]" : "text-[#4B4B4B]"
  }`;

  return (
    <th className={`${containerClasses} ${ThStyle}`}>
      <p className={weekClasses}>{Date.week}</p>
      <p className="text-[#1E1E1E] font-bold">{Date.day}</p>
      <p className="text-sm text-[#787878]">{Date.month}</p>
    </th>
  );
}

export default MoonItem;
