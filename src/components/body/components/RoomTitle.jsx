const RoomTitle = ({roomType, icon_path}) => {
  return (
    <td className=" flex  items-center gap-2 min-h-10 pl-6 border-[#E1E1E1]  border-transparent ">
      <p className="">{roomType}</p>
      <div dangerouslySetInnerHTML={{ __html: icon_path }} />
    </td>
  );
};

export default RoomTitle;
