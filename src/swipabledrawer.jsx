import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import { Close } from "@mui/icons-material";
import { Button } from "@mui/material";
import { submitFormData } from "./firebaseutils";
import QRCode from "react-qr-code";
import { QRCodeSVG } from "qrcode.react";
import { useNavigate } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";
import { useQRCode } from "next-qrcode";
const drawerBleeding = 56;

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)",
}));

const SwipeableEdgeDrawer = ({
  open,
  onClose,
  onOpen,
  name,
  email,
  noofpersons,
  address,
  selectedItems,
}) => {
  const [confirmed, setConfirmed] = useState(false);
  const navigate = useNavigate();
  const { Canvas } = useQRCode();
  const [qrCodeData, setQrCodeData] = useState("");
  const [dataUrl, setDataUrl] = useState("");

  const handleConfirm = async () => {
    onOpen();
    try {
      const formData = {
        name,
        email,
        noofpersons,
        address,
        selectedItems,
      };
      const result = await submitFormData(formData);
      if (result) {
        setConfirmed(true);
        console.log("form submitted successfully" ,result);
        setQrCodeData(result);
        navigate("/success", { state: { result } });
      }
    } catch (error) {
      console.log("something went wrong", error);
    }
  };
  return (
    <SwipeableDrawer
      anchor="bottom"
      open={open}
      onClose={onClose}
      onOpen={() => {}}
      swipeAreaWidth={drawerBleeding}
      disableSwipeToOpen={false}
      ModalProps={{
        keepMounted: true,
      }}
    >
      <StyledBox
        sx={{
          position: "absolute",
          top: -drawerBleeding,
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          visibility: "visible",
          right: 0,
          left: 0,
        }}
      >
        <Puller />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: 2,
          }}
        >
          <Typography variant="h6">Booking Details</Typography>
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
        </Box>
      </StyledBox>
      <StyledBox
        sx={{
          px: 2,
          pb: 2,
          height: "100%",
          overflow: "auto",
        }}
      >
        <Card sx={{ mt: 2 ,mb:2}}>
          <CardContent>
            <Typography variant="h5" component="div" gutterBottom>
              Booking Information
            </Typography>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="body1" component="div">
                <strong>Name:</strong>
              </Typography>
              <Typography variant="body1" component="div">
                {name}
              </Typography>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="body1" component="div">
                <strong>Email:</strong>
              </Typography>
              <Typography variant="body1" component="div">
                {email}
              </Typography>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="body1" component="div">
                <strong>No. of Persons:</strong>
              </Typography>
              <Typography variant="body1" component="div">
                {noofpersons}
              </Typography>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="body1" component="div">
                <strong>Address:</strong>
              </Typography>
              <Typography variant="body1" component="div">
                {address}
              </Typography>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            {selectedItems.map((item) => (
              <div key={item.id}>
                <Typography variant="body1" component="div">
                  <strong>Title:</strong> {item.title}
                </Typography>
                <Typography variant="body1" component="div">
                  <strong>Time:</strong> {item.time}
                </Typography>

                <hr />
              </div>
            ))}

            <Button
              size="large"
              sx={{ width: "100%" }}
              variant="contained"
              onClick={handleConfirm}
            >
              Confirm Ticket
            </Button>
          </CardContent>
        </Card>
      </StyledBox>
    </SwipeableDrawer>
  );
};

export default SwipeableEdgeDrawer;
