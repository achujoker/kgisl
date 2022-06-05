import React from "react";
import { Routes, Route } from "react-router-dom";
import BookingSlot from "./BookingSlot";
import AddSlot from "./AddSlot";

export default function RoutesPage() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<BookingSlot />} />
        <Route path="/addSlot" exact element={<AddSlot />} />
      </Routes>
    </>
  );
}
