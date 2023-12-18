import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom/dist";
import Button from "@mui/material/Button";
import { submitFormData } from "../firebaseutils";
const Home = () => {
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    noofpersons: "",
    address: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();


   
    navigate("/bookticket", {
      state: {
        name: formdata.name,
        email: formdata.email,
        noofpersons: formdata.noofpersons,
        address: formdata.address,
      },
    });
  };
  return (
    <div>
      <h2>Fill this to book your Ticket</h2>
      <div>
        <Box
          display="flex"
          flexDirection="column"
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "100%" }, // Set width to 100% for text fields
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-multiline-flexible"
            label="Name"
            multiline
            maxRows={6}
            onChange={(e) => {
              setFormdata({ ...formdata, name: e.target.value });
            }}
          />
          <TextField
            id="outlined-multiline-flexible"
            label="Email"
            multiline
            maxRows={6}
            onChange={(e) => {
              setFormdata({ ...formdata, email: e.target.value });
            }}
          />
          <TextField
            id="outlined-multiline-flexible"
            label="No of Persons"
            multiline
            maxRows={6}
            onChange={(e) => {
              setFormdata({ ...formdata, noofpersons: e.target.value });
            }}
          />
          <TextField
            id="outlined-multiline-flexible"
            label="Address"
            multiline
            maxRows={6}
            onChange={(e) => {
              setFormdata({ ...formdata, address: e.target.value });
            }}
          />
          <div style={{ paddingLeft: "7px", width: "100%" }}>
            <Button
              style={{ width: "100%" }} // Set width to 100% for the button
              variant="contained"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default Home;
