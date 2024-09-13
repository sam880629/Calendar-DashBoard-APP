import { useState } from "react";

// 按鈕
const Button = ({ text, onClick, isActive  })=> {

    return (
        <button
        className={`  flex-1 w-auto h-12 border-r border-stroke px-4 py-2 font-medium  last-of-type:border-r-0 text-sm 
          ${isActive ? "bg-[#787878] text-white" : "bg-white text-[#787878] "}`}
        onClick={onClick}
      >
        <span className="mr-2 hidden xl:inline-block">By</span> 
        <span>{text}</span>
      </button>
    );
}
  
// 群組按鈕
const ButtonGroup =()=> {
    const buttons = [{ text: "Room" }, { text: "Floor" }];//按鈕名稱
    const [open, setOpen] = useState(buttons[0].text)
    const handledOpen = (Category) => {
        setOpen(Category);
    }

    return (
     
        <div className="pl-6 w-80 mb:p-4">
         
            <div className="flex  overflow-hidden rounded-lg border box-border">
              {buttons.map((button, index) => (
                <Button
                  key={index}
                  text={button.text}
                  isActive={open === button.text}
                  onClick={()=>handledOpen(button.text)}
                />
              ))}
            </div>
        </div>
     
    );
  }

export default ButtonGroup
