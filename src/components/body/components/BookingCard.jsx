import SettingBox from "./SettingBox";
import { useState, useRef, useEffect } from "react";
import SettingsIcon from '@mui/icons-material/Settings';



const BookingCard = ({ booking, keyId, today }) => {
  const { title } = booking;
  const [show, setShow] = useState(false);
  const settingBoxRef = useRef(null);

  const toggleSettingBox = () => {
    setShow(!show);
  };

  const handleClickOutside = (event) => {
    if (settingBoxRef.current && !settingBoxRef.current.contains(event.target)) {
      setShow(false);
    }
  };

  useEffect(() => {
    if (show) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show]);

  return (
    <div className="border-l-4 rounded py-2 pl-1 mb-1 bg-[#1994FC] group flex relative">
      <p className="text-white text-sm truncate max-w-40">{title}</p>
      <p
        onClick={toggleSettingBox}
        className="hidden group-hover:flex ml-auto text-black mr-1 cursor-pointer "
      >
        <SettingsIcon />
      </p>
      {show && (
        <div ref={settingBoxRef}>
          <SettingBox booking={booking} keyId={keyId} today={today} />
        </div>
      )}
    </div>
  );
};

export default BookingCard;
