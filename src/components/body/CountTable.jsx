import RoomCount from "./components/RoomCount";
import RoomTitle from "./components/RoomTitle";

const RoomDate = [
  { count: 2 },
  { count: 0 },
  { count: 2 },
  { count: 5 },
  { count: 2 },
  { count: 0 },
  { count: 2 },
  { count: 5 },
  { count: 2 },
  { count: 0 },
  { count: 2 },
  { count: 5 },
  { count: 2 },
  { count: 5 },
];

const CountTable = () => {
  return (
    <td className="bg-[#F4F4F4] h-10 text-center w-full grid gap-4 
  grid-cols-[160px_1fr] sm:grid-cols-[160px_1fr] md:grid-cols-[240px_1fr] lg:grid-cols-[352px_1fr] " >
      <RoomTitle roomType="EMC">
        <svg
          width="20"
          height="14"
          viewBox="0 0 20 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 5.78V3C19 1.35 17.65 0 16 0H12C11.23 0 10.53 0.3 10 0.78C9.47 0.3 8.77 0 8 0H4C2.35 0 1 1.35 1 3V5.78C0.39 6.33 0 7.12 0 8V14H2V12H18V14H20V8C20 7.12 19.61 6.33 19 5.78ZM12 2H16C16.55 2 17 2.45 17 3V5H11V3C11 2.45 11.45 2 12 2ZM3 3C3 2.45 3.45 2 4 2H8C8.55 2 9 2.45 9 3V5H3V3ZM2 10V8C2 7.45 2.45 7 3 7H17C17.55 7 18 7.45 18 8V10H2Z"
            fill="#686868"
          />
        </svg>
      </RoomTitle>
      <td className="">
        {RoomDate.map((val, index) => (
          <RoomCount key={index} count={val.count} />
        ))}
      </td>
  
    </td>
  );
};

export default CountTable;
