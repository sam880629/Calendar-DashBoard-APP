const RoomTitle = ({ roomType, icon_path }) => {
  return (
    <div className="bg-[#F4F4F4] w-[160px] md:w-[240px] xl:w-[352px] flex  items-center gap-2 h-10 p-0 pl-6 pr-4 border-r border-l border-b border-[#E1E1E1] justify-between">
      <div className="flex items-center gap-2 font-bold">
        {roomType}
        <div dangerouslySetInnerHTML={{ __html: icon_path }} />
      </div>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

        <path d="M12 15L7 10H17L12 15Z" fill="#1E1E1E" />

      </svg>

    </div>
  );
};

export default RoomTitle;
