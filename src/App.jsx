import { useState } from "react";

import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
import Booking from "./Booking/Booking";
import ConfirmBooking from "./Booking/Confirm";
import Sucess from "./Sucess";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookticket" element={<Booking />} />
          <Route path="/confirmbook" element={<ConfirmBooking />} />
          <Route path="/success" element={<Sucess />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
