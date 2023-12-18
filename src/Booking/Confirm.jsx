import React from "react";
import { useLocation } from "react-router-dom";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";

const ConfirmBooking = () => {
  const location = useLocation();
  const { name, email, noofpersons, address, selectedItems } = location.state;
console.log(selectedItems)
  return (
    <div>
      {/* Display Booking Details */}
      <Card sx={{ maxWidth: 345, my: 2, flexDirection: "row" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              Name: {name}
            </Typography>
            <Typography variant="h5" component="div">
              Email: {email}
            </Typography>
            <Typography variant="h5" component="div">
              No. of Persons: {noofpersons}
            </Typography>
            <Typography variant="h5" component="div">
              Address: {address}
            </Typography>
          </CardContent>
        </Box>
      </Card>

      {selectedItems.map((item) => (
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
            </Box>
          </Box>
        </Card>
      ))}
    </div>
  );
};

export default ConfirmBooking;
