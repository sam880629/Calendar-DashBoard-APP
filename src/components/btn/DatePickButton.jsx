// 年/月按鈕
const DatePicKButton = ({year,month}) => {

    return (
        <div className="flex justify-center items-center gap-2 cursor-pointer bg-white min-w-[156px] h-12 border border-[#E9E9E9] rounded">
            <p>{year}</p>
            <p>{month}</p>
        </div>

    )
}

export default DatePicKButton