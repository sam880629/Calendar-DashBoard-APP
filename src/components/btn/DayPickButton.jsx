// 日期按鈕
function DatePickButton({day}) {
    return(
        <div className="flex justify-center items-center gap-2 cursor-pointer bg-white w-[90px] h-12 border border-[#E9E9E9] rounded">
            <p>{day}</p>
        </div>
    )
}

export default DatePickButton