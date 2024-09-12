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
const DD = {
  2024: {
    May: {
      18: {
        rooms: {
          ECD: {
            Speed: {
              102: {
                status: "occupied",
                booked_by: {
                  name: "Trisha Hung",
                  reservation_id: "Cert#563212",
                  contact: "0999-999-999",
                },
              },
              104: {
                status: "available",
                booked_by: null,
              },
            },
            Discovery: {
              202: {
                status: "occupied",
                booked_by: {
                  name: "James Chen",
                  reservation_id: "Cert#781233",
                  contact: "0922-222-222",
                },
              },
              204: {
                status: "clean",
                booked_by: null,
              },
            },
          },
          STD: {
            "Racing - Beyond": {
              216: {
                status: "occupied",
                booked_by: {
                  name: "Lisa Chen",
                  reservation_id: "Cert#991032",
                  contact: "0955-555-555",
                },
              },
              218: {
                status: "available",
                booked_by: null,
              },
            },
            "Racing - Suite": {
              316: {
                status: "occupied",
                booked_by: {
                  name: "Eric Yang",
                  reservation_id: "Cert#912034",
                  contact: "0933-333-333",
                },
              },
              318: {
                status: "clean",
                booked_by: null,
              },
              320: {
                status: "occupied",
                booked_by: {
                  name: "Anna Wong",
                  reservation_id: "Cert#332187",
                  contact: "0911-111-111",
                },
              },
            },
          },
        },
      },
      19: {
        // 類似上面的資料結構，隨機生成其他天的資料
      },
      20: {
        // 類似上面的資料結構，隨機生成其他天的資料
      },
      // 持續到31日
    },
  },
};

const MoonTable = () => {
  const buttons = [{ text: "room" }, { text: "floor" }];
  const FilterStyle = `w-40 mb:w-60  bg-white flex items-center border-[#E1E1E1] border-b`;

  return (
    <div
      className="text-center w-full grid gap-4 
  grid-cols-[160px_1fr] sm:grid-cols-[160px_1fr] md:grid-cols-[240px_1fr] lg:grid-cols-[352px_1fr]"
    >
      <div className={`flex gap-4 ${FilterStyle}`}>
        <ButtonGroup buttons={buttons} />
        <FilterButton />
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-7 lg:grid-cols-14  grid-flow-col">
        {Dates.map((Date, index) => (
          <MoonItem key={index} Date={Date} />
        ))}
      </div>
     
    </div>
  );
};

export default MoonTable;
