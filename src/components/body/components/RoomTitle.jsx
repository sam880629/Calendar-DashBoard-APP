function RoomTitle({ roomType, children }) {
  return (
    <td className="w-40 mb:w-60 lg:w-[352px] flex  items-center gap-2 min-h-10 pl-6 border-[#E1E1E1]  border-transparent ">
      <p className="">{roomType}</p>
      {children}
    </td>
  );
}

export default RoomTitle;
