// 下拉選單組件
function Select({ title, children }) {
    return (
        <div className="hidden sm:flex  gap-2 justify-center items-center cursor-pointer">
            {children}
            <p className="">
                {title}
            </p>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 6L8 11L3 6" stroke="#9C9C9C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        </div>
    );
}

export default Select;