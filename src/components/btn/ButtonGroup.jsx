import { useState } from "react";

// 按鈕
const Button = ({ text, onClick, isActive  })=> {

    return (
        <button
        className={`w-32 h-12 border-r border-stroke px-4 py-2 font-medium  last-of-type:border-r-0 text-sm 
          ${isActive ? "bg-[#787878] text-white" : "bg-white text-[#787878] "}`}
        onClick={onClick}
      >
        By {text}
      </button>
    );
}
  
// 群組按鈕
const ButtonGroup =()=> {
    const buttons = [{ text: "room" }, { text: "floor" }];//按鈕名稱
    const [open, setOpen] = useState(buttons[0].text)
    const handledOpen = (Category) => {
        setOpen(Category);
    }

    return (
      <section className="p-4 pl-6">
        <div className="container">
          <div className="flex justify-center">
            <div className="inline-flex items-center overflow-hidden rounded-lg border border-stroke dark:border-dark-3">
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
        </div>
      </section>
    );
  }

export default ButtonGroup
