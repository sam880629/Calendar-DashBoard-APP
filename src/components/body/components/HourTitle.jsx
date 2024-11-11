
const HourTitle = ({time}) =>{


    return (
        <div className="w-[60px] md:w-[140px] xl:w-[152px] min-h-[45px] box-border flex items-center justify-end gap-4 md:pr-4 pr-1 h-auto  border-r border-b border-[#E1E1E1] bg-[#FAFAFA]  dark:bg-gray-600 dark:border-gray-800">
            <p className="font-semibold text-lg text-[#686868] dark:text-gray-200">{time}:00</p>
        </div>
    )
}

export default HourTitle