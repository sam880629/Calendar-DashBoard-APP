const RoomTitle = ({roomType, icon_path}) => {
  return (
    <div className="bg-[#F4F4F4] w-[160px] md:w-[240px] xl:w-[352px] flex  items-center gap-2 h-10 p-0 pl-6 border-r border-l border-b border-[#E1E1E1]">
      <p className="">{roomType}</p>
      <div dangerouslySetInnerHTML={{ __html: icon_path }} />
    </div>
  );
};

export default RoomTitle;
