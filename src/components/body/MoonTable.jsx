import ButtonGroup from "../btn/ButtonGroup";
import FilterButton from "../btn/FilterButton";
import MoonItem from "./components/MoonItem";

const Dates = [
  { week: "Sat", day: 18, month: "May" },
  { week: "Sun", day: 19, month: "May" },
  { week: "Mon", day: 20, month: "May" },
  { week: "Tue", day: 21, month: "May" },
  { week: "Wed", day: 22, month: "May" },
  { week: "Thu", day: 23, month: "May" },
  { week: "Fri", day: 24, month: "May" },
  { week: "Sat", day: 25, month: "May" },
  { week: "Sun", day: 26, month: "May" },
  { week: "Mon", day: 27, month: "May" },
  { week: "Tue", day: 28, month: "May" },
  { week: "Wed", day: 29, month: "May" },
  { week: "Thu", day: 30, month: "May" },
  { week: "Fri", day: 31, month: "May" },
];

function MoonTable() {
  const buttons = [{ text: "room" }, { text: "floor" }];
  const FilterStyle = `w-40 mb:w-60  bg-white flex items-center border-[#E1E1E1] border-b`;

  return (
    <div className="text-center  w-full grid grid-cols-[352px_repeat(auto-fit,minmax(0,1fr))]">
      <div className={`flex gap-4 ${FilterStyle}`}>
        <ButtonGroup buttons={buttons} />
        <FilterButton />
      </div>
      {Dates.map((Date, index) => (
        <MoonItem key={index} Date={Date} />
      ))}
    </div>
  );
}

export default MoonTable;
