import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import { Remove, Add, BookOnline, Favorite } from "@mui/icons-material";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import { Button, Typography, IconButton } from "@mui/material";
import SwipeableEdgeDrawer from "../swipabledrawer"; // Adjust the import path based on your project structure
import "./Booking.css";
import data from "./data.json";
import { submitFormData } from "../firebaseutils";

const Booking = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { name, email, noofpersons, address } = location.state || {};
  const [selectedItems, setSelectedItems] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleSelectItem = (item) => {
    if (!selectedItems.find((selectedItem) => selectedItem.id === item.id)) {
      setSelectedItems((prevSelected) => [...prevSelected, item]);
    }
  };

  const handleRemoveItem = (item) => {
    setSelectedItems((prevSelected) =>
      prevSelected.filter((selectedItem) => selectedItem.id !== item.id)
    );
  };
 const handledrawer = () =>{
   setDrawerOpen(true);
 }
  const handleBooking = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <div>
      {data.map((item) => (
        <Card key={item.id} sx={{ maxWidth: 345, my: 2, flexDirection: "row" }}>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image={item.image}
              alt={`${item.title} image`}
            />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  {item.title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  {item.time}
                </Typography>
              </CardContent>
              <Box sx={{ display: "flex", alignItems: "center", pl: 4, pb: 1 }}>
                <IconButton
                  className={
                    selectedItems.some(
                      (selectedItem) => selectedItem.id === item.id
                    )
                      ? "selected"
                      : ""
                  }
                  onClick={() => handleSelectItem(item)}
                >
                  <Add />
                </IconButton>
                <IconButton
                  className={
                    selectedItems.some(
                      (selectedItem) => selectedItem.id === item.id
                    )
                      ? "selected"
                      : ""
                  }
                  onClick={() => handleRemoveItem(item)}
                >
                  <Remove />
                </IconButton>
                <IconButton>
                  <Favorite />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Card>
      ))}

      <div>
        <Box>
          <Button
            size="large"
            variant="contained"
            endIcon={<BookOnline />}
            onClick={handleBooking}
          >
            Book Your Ticket
          </Button>
        </Box>
      </div>

      <SwipeableEdgeDrawer
        open={drawerOpen} 
        onOpen={handledrawer}
        onClose={handleDrawerClose}
        name={name}
        email={email}
        noofpersons={noofpersons}
        address={address}
        selectedItems={selectedItems}
      />
    </div>
  );
};

export default Booking;
