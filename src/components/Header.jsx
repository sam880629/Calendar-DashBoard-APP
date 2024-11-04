import Hemburger from "./header/Hemburger";
import Select from "./Header/Select";


// 渲染header
const HeaderRender= () =>{
    return (
        <header className="bg-white h-[64px] flex items-center gap-4 py-0 pr-4 pl-4 xl:pl-[80px] xl:pr-8">
            <Hemburger />
            <div className="mr-auto cursor-pointer font-normal text-2xl">
                Calendar DashBoard
            </div>
           
            <Select />
          
        </header>
    );
}

export default HeaderRender