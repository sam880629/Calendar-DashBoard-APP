import MoonTable from "./body/MoonTable";
import RoomTable from "./body/RoomTable";


function Body() {
  
  const TdStyle = {
    FilterStyle :`w-40 mb:w-60 lg:w-[352px] bg-white flex items-center border-[#E1E1E1] border-b`,
    RoomTitleStyle: `w-40 mb:w-60 lg:w-[352px] border-b border-r border-transparent  border-[#E1E1E1] py-4 px-3 text-lg  lg:py-7 lg:px-4 text-black text-end`,
    ThStyle: `w-auto min-w-[160px] border-l border-transparent py-4 px-3 text-lg font-medium text-white lg:py-7 lg:px-4`,
    TdStyle: `w-auto text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF]  text-center text-base font-medium`,
    TdStyle2: `text-dark border-b border-[#E8E8E8] bg-white text-center text-base font-medium`,
    TdButton: `inline-block px-6 py-2.5 border rounded-md border-primary text-primary hover:bg-primary hover:text-white font-medium`,
  };
  return (
    <section className="bg-white dark:bg-dark  ">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full ">
            <div className="max-w-full overflow-x-auto ">
              <table className="w-full table-auto border-collapse">
                <thead className="text-center bg-black grid grid-cols-12 gap-2">
                  <MoonTable />
                </thead>

                <tbody>
                  <RoomTable />
                  <tr>
                    <td className={TdStyle.RoomTitleStyle}>.com</td>
                    <td className={TdStyle.TdStyle2}>1 Year</td>
                    <td className={TdStyle.TdStyle}>$75</td>
                    <td className={TdStyle.TdStyle2}>$5</td>
                    <td className={TdStyle.TdStyle}>$10</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Body;
