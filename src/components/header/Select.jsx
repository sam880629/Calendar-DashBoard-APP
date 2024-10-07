import { useState } from "react";

useState;
// 下拉選單組件
const Select = ({ title, children }) => {
  const [show, setShow] = useState(false);

  // 處理點擊事件，切換 show 狀態
  const showHandler = () => {
    setShow((prevShow) => !prevShow); // 正確地使用 setShow 來更新狀態
  };
  return (
    <div className=" relative">
      <div
        className="hidden md:flex  gap-2 justify-center items-center cursor-pointer "
        onClick={showHandler}
      >
        {children}
        <p className="">{title}</p>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 6L8 11L3 6"
            stroke="#9C9C9C"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div
        id="dropdown"
        className={`absolute  z-10 right-0 bottom-[260px] bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700
        ${show ? "block" : "hidden"}`}
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Settings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Earnings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Select;
