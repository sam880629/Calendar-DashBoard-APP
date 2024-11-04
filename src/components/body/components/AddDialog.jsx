import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import TextField from "@mui/material/TextField";
import dayjs from 'dayjs';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

const fabStyle = {
  position: "fixed",
  bottom: 16,
  right: 16,
  bgcolor: "#426976",
  "&:hover": {
    bgcolor: "#244871",
  },
};

const BasicTooltip = () => {
  return (
    <Box>
      <Fab color="secondary" aria-label="add" sx={fabStyle}>
        <AddIcon />
      </Fab>
    </Box>
  );
};

export default function AddDialog({ handle }) {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [timeValue, setTimeValue] = useState(dayjs());
  const [inputError, setInputError] = useState(false); 

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setInputError(event.target.value === "");
  };

  const handleClickOpen = () => {
    // 重製參數
    setTimeValue(dayjs())
    setInputValue(""); 
    setInputError(false); 
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setInputValue(""); // 清空輸入
    setInputError(false); // 重置錯誤狀態
  };

  const AgreeHandle = () => {
    if (inputValue === "") {
      setInputError(true);
      return;
    }

    setOpen(false);
    handle(inputValue, timeValue);
  };

  return (
    <>
      <div onClick={handleClickOpen}>
        <BasicTooltip />
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New TodoList</DialogTitle>
        <DialogContent>
          <Box sx={{ height: 20, backgroundColor: "white" }} />
          <TextField
            error={inputError}
            helperText={inputError ? "cannot be blank" : ""}
            id="outlined-basic"
            label="Title"
            variant="outlined"
            value={inputValue}
            onChange={handleInputChange}
          />
          <Box sx={{ height: 20, backgroundColor: "white" }} />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
              label="Time"
              value={timeValue}
              onChange={(newValue) => setTimeValue(newValue || dayjs())} 
            />
          </LocalizationProvider>
        </DialogContent>
        <DialogActions>
          <Button onClick={AgreeHandle} disabled={inputError || !inputValue}>
            OK
          </Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}