
const RoomNumber = ({room}) =>{
    const { status, number, name } = room;
    // 定義不同狀態的背景顏色
    const statusColors = {
        "locked": "bg-[#FF6E6E]",
        "occupied": "bg-[#1994FC]",
        "available": "bg-[#4BD791]",
      };

    return (
        <div className="w-[160px] mb:w-[240px] lg:w-[352px] box-border flex items-center justify-end gap-4 pr-4  h-16  border-r border-l border-b border-[#E1E1E1] bg-[#FAFAFA]">
            <p className="text-[#686868]">{name}</p>
            <p className="font-medium text-lg text-[#686868]">{number}</p>
            <p className={`w-4 h-4 ${statusColors[status]}`}></p>
        </div>
    )
}

export default RoomNumber