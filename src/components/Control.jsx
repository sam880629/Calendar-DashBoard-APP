import DatePicKButton from "./btn/DatePickButton"
import NextButton from "./btn/NextButton"
import PreviousButton from "./btn/PreviousButton"
import DayPickButton from "./btn/DayPickButton"

function Control() {
    return (
        <div className="bg-[#F4F4F4] flex gap-2 pr-8 pl-6">
            <DatePicKButton year="2024" month="Apr"/>
            <PreviousButton />
            <DayPickButton day="Today"/>
            <NextButton />
        </div>
    )

}

export default Control