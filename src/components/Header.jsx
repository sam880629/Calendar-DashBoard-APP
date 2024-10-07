import Hemburger from "./header/Hemburger";
import Select from "./header/select";


// 渲染header
const HeaderRender= () =>{
    return (
        <header className="bg-white h-[64px] flex items-center gap-4 py-0 pr-4 pl-4 xl:pl-[80px] xl:pr-8">
            <Hemburger />
            <div className="mr-auto cursor-pointer font-normal text-2xl">
                Calendar DashBoard
            </div>
            <Select title="Profile">
                 <svg fill="#000000" width="30px" height="800px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z"/></svg>
            </Select>
          
        </header>
    );
}

export default HeaderRender