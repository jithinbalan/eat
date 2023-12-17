import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Scanner from "./Scanner";
import "./Scanner.css";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import CircularProgress from '@mui/material/CircularProgress';

const scannerStyle = {
  position: 'relative',
  marginTop: '20px',
  marginBottom: '20px',
  width: '100%', // Scanner area takes full width of the modal
  height: '300px', // Adjust height as needed
  backgroundColor: '#e0e0e0', // Scanner area background color
  border: '1px dashed #555', // Dashed border to indicate the scan area
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export default function ScanningModal(props) {
  return (
    // <div>
    //   <Dialog
    //     open={props.open}
    //     onClose={props.handleClose}
    //     aria-labelledby="alert-dialog-title"
    //     aria-describedby="alert-dialog-description"
    //   >
    //     <Scanner isScanning={props.open} onDetected={props.onDetected}  handleClose={props.handleClose}/>
    //     <DialogActions>
    //       <Button onClick={props.handleClose}>Close</Button>
    //     </DialogActions>
    //   </Dialog>
    // </div>

    <Dialog open={props.open} onClose={props.handleClose} maxWidth="sm" fullWidth>
    <DialogTitle sx={{ bgcolor: 'primary.dark', color: 'common.white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      Scanning...
      <IconButton
        edge="end"
        color="inherit"
        onClick={props.handleClose}
        sx={{ position: 'absolute', right: 8, top: 8 }}
      >
        <CloseIcon />
      </IconButton>
    </DialogTitle>
    <div style={scannerStyle}>
      {/* This is where the scanner output would be displayed */}
      {/* <CircularProgress color="inherit" /> */}
     <Scanner isScanning={props.open} onDetected={props.onDetected}  handleClose={props.handleClose}/>

      {/* You can replace the CircularProgress with your scanning animation or output */}
    </div>
  </Dialog>
    // <Dialog
    //   open={props.open}
    //   onClose={props.handleClose}
    //   aria-labelledby="scanning-dialog-title"
    //   sx={{
    //     "& .MuiDialog-paper": {
    //       minWidth: "80vw", // Use a percentage of the view width for responsiveness
    //       maxWidth: "600px", // Maximum size of the modal
    //       borderRadius: "10px", // Rounded corners
    //     },
    //   }}
    // >
    //   <DialogTitle
    //     id="scanning-dialog-title"
    //     sx={{ bgcolor: "primary.main", color: "common.white" }}
    //   >
    //     Scanning...
    //   </DialogTitle>
    //   <DialogContent
    //     sx={{
    //       position: "relative",
    //       minHeight: "300px",
    //       display: "flex",
    //       justifyContent: "center",
    //       alignItems: "center",
    //     }}
    //   >
    //     <Scanner
    //       isScanning={props.open}
    //       onDetected={props.onDetected}
    //       handleClose={props.handleClose}
    //     />
    //     <Button
    //       startIcon={<CloseIcon />}
    //       variant="contained"
    //       onClick={props.handleClose}
    //       sx={{
    //         position: "absolute",
    //         bottom: 8,
    //         right: 8,
    //         bgcolor: "secondary.main",
    //         "&:hover": { bgcolor: "secondary.dark" },
    //       }}
    //     >
    //       Close
    //     </Button>
    //   </DialogContent>
    // </Dialog>
  );
}
