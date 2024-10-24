
const HourTitle = ({time}) =>{
   
    // 定義不同狀態的背景顏色
    const statusColors = {
        "locked": "bg-[#FF6E6E]",
        "occupied": "bg-[#1994FC]",
        "available": "bg-[#4BD791]",
      };

    return (
        <div className="w-[60px] md:w-[140px] xl:w-[152px] box-border flex items-center justify-end gap-4 pr-4  h-auto  border-r border-l border-b border-[#E1E1E1] bg-[#FAFAFA]">
            <p className="font-medium text-lg text-[#686868]">{time}</p>
        </div>
    )
}

export default HourTitle