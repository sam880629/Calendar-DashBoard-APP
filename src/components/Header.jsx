import Hemburger from "./header/Hemburger";
import Select from "./header/Select";


// 渲染header
const HeaderRender= () =>{
    return (
        <header className="bg-white h-[64px] flex items-center gap-4 py-0 pr-4 pl-4 xl:pl-[80px] xl:pr-8 dark:bg-gray-700 dark:text-white">
            <Hemburger />
            <div className="mr-auto cursor-pointer font-normal text-base md:text-2xl font-semibold ">
                Calendar DashBoard
            </div>
            <Select />
        </header>
    );
}

export default HeaderRender