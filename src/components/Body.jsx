import MoonTable from "./body/MoonTable";
import CountTable from "./body/CountTable";
import RoomTable from "./body/RoomTable";

function Body() {

  return (
    <section className="bg-white dark:bg-dark  ">
      <div className="flex flex-nowrap">
        <div className="w-full ">
             <MoonTable />
             <CountTable />
             <RoomTable />
        </div>
      </div>

    </section>
  );
}

export default Body;
