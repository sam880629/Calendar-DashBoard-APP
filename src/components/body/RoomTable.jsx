

function RoomTable() {
    const TdStyle = `text-dark border-b  border-l border-[#E8E8E8] bg-[#FFFFF0] text-center text-base font-medium`
    const TdStyle2 = `text-dark border-b  border-l border-[#E8E8E8] bg-white text-center text-base font-medium`
    const TdStyle3 = `text-dark border-b  border-l border-[#E1E1E1]  bg-[#F4F4F4] text-center text-base font-medium`

    return (
        <div className="grid grid-cols-[352px_repeat(auto-fit,minmax(0,1fr))]">
            <div className="flex items-center justify-end gap-4 w-40 mb:w-60  border-b  border-[#E1E1E1] pt-4 pr-4 pb-2 ml-auto ">
                <p className="text-[#686868]">Speed</p>
                <p className="font-medium text-lg">102</p>
                <p className="w-4 h-4 bg-[#FF6E6E]"></p>
            </div>
            <div className={TdStyle3}></div>
            <div className={TdStyle3}></div>
            <div className={TdStyle2}></div>
            <div className={TdStyle2}></div>
            <div className={TdStyle2}></div>
            <div className={TdStyle2}></div>
            <div className={TdStyle2}></div>
            <div className={TdStyle}></div>
            <div className={TdStyle}></div>
            <div className={TdStyle2}></div>
            <div className={TdStyle2}></div>
            <div className={TdStyle2}></div>
            <div className={TdStyle2}></div>
            <div className={TdStyle2}></div>
        </div>
    )
}

export default RoomTable