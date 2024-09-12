import MoonTable from "./body/MoonTable";
import CountTable from "./body/CountTable";
import RoomTable from "./body/RoomTable";
import MoonCol from "./body/MoonCol";

const Body = () => {

  return (
    <section className="bg-white dark:bg-dark  ">
      <div className="flex flex-nowrap">
        <div className="w-full ">
            <MoonCol />
        </div>
      </div>
    </section>
  );
};

export default Body;
