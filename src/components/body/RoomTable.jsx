

const RoomTable = ({status,number}) =>{
    // 定義不同狀態的背景顏色
    const statusColors = {
        "Speed": "bg-[#FF6E6E]",
        "Discovery": "bg-[#1994FC]",
        "Racing - Beyond": "bg-[#4BD791]",
      };

    return (
        <td className="flex items-center justify-end gap-4 pt-4 pr-4 pb-2  w-[160px] mb:w-[240px] lg:w-[352px]">
            <p className="text-[#686868]">{status}</p>
            <p className="font-medium text-lg text-[#686868]">{number}</p>
            <p className={`w-4 h-4 ${statusColors[status]}`}></p>
        </td>
    )
}

export default RoomTable