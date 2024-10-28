import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState} from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";


const BasicTooltip = () => {
  return (
    <Tooltip title="Delete">
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  );
};

export default function AlertDialog({ handler }) {
  const [open, setOpen] = useState(false);
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const AgreeHandle = () => {
    handler();
    setOpen(false);
  };



  return (
    <div>
      <div onClick={handleClickOpen}>
        <BasicTooltip />
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"確定要刪除資料嗎?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            刪除資料後資料將無法復原!!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={AgreeHandle}>確定</Button>
          <Button onClick={handleClose}>取消</Button>
        </DialogActions>
      </Dialog>

    </div>
  );
}
