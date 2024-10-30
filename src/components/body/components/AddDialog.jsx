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
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
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

export default function AddDialog( {handle}) {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState(null);
  const [timeValue, setTimeValue] = useState(dayjs());

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const AgreeHandle = () => {
    console.log(inputValue,timeValue);
    handle(inputValue);
    setOpen(false);
  };

  return (
    <>
      <div onClick={handleClickOpen}>
        <BasicTooltip />
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"新增資料"}</DialogTitle>
        <DialogContent>
          <Box
            sx={{
              height: 20,
              backgroundColor: { white: "white" },
            }}
          />
          <TextField
            id="outlined-basic"
            label="Title"
            variant="outlined"
            onChange={handleInputChange}
          />
          <Box
            sx={{
              height: 20,
              backgroundColor: { white: "white" },
            }}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DateTimePicker", "DateTimePicker"]}>
              <DateTimePicker
                label="Time"
                defaultValue={dayjs()}
                onChange={(newValue) => setTimeValue(newValue)}
              />
            </DemoContainer>
          </LocalizationProvider>
        </DialogContent>

        <DialogActions>
          <Button onClick={AgreeHandle}>確定</Button>
          <Button onClick={handleClose}>取消</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
