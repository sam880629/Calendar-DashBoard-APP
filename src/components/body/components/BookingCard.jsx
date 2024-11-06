import SettingBox from "./SettingBox";
import { useState, useRef, useEffect, Fragment } from "react";
import SettingsIcon from '@mui/icons-material/Settings';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const BookingCard = ({ booking, keyId, today }) => {
  const { title } = booking;
  const [settingBoxShow, setSettingBoxShow] = useState(false);
  const settingBoxRef = useRef(null);
  const [SnackbarOpen, setSnackbarOpen] = useState(false);
  const handleClick = () => {
    setSnackbarOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbarOpen(false);
  };
  const toggleSettingBox = () => {
    setSettingBoxShow(!settingBoxShow);
  };
  const closeCard = () => {
    setSettingBoxShow(false);
    handleClick()
  };
  const handleClickOutside = (event) => {
    if (
      settingBoxRef.current &&
      !settingBoxRef.current.contains(event.target) &&
      !event.target.closest(".MuiDialog-root") 
    ) {
      setSettingBoxShow(false);
    }
  };

  useEffect(() => {
    if (settingBoxShow) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [settingBoxShow]);
  // 消息條樣式
  const action = (
    <Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </Fragment>
  );
  
  return (
    <div className="xl:w-40 lg:w-32 md:w-20 w-auto m-auto border-l-8 border-l-blue-700 dark:border-gray-100  rounded py-2 pl-1 mb-1 bg-[#1994FC] group flex relative"  title={title}>
        <p className="text-white text-sm truncate xl:w-40 md:w-32 w-20 "
        >{title}
        </p>
      <p
        onClick={toggleSettingBox}
        className="hidden group-hover:flex ml-auto text-black mr-1 cursor-pointer "
      >
        <SettingsIcon />
      </p>
      {settingBoxShow && (
        <div ref={settingBoxRef}>
          <SettingBox booking={booking} keyId={keyId} today={today} closeCard={closeCard}/>
        </div>
      )}
      <Snackbar
        open={SnackbarOpen}
        autoHideDuration={4000}
        onClose={handleClose}
        message="Update Finished"
        action={action}
      />
    </div>
    
  );
};

export default BookingCard;
