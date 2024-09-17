// 下拉選單組件
const Select = ({ title, children }) => {
    return (
        <div className="hidden xl:flex  gap-2 justify-center items-center cursor-pointer">
            {children}
            <p className="">
                {title}
            </p>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 6L8 11L3 6" stroke="#9C9C9C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

        </div>
    );
}

export default Select;