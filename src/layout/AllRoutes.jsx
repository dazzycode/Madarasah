
// src/AllRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutUs from "../pages/AboutUs";
import OnlineCourses from "../pages/OnlineCourses";
import Tutors from "../pages/Tutors";
import ContactPage from "../pages/ContactPage";
import EventPage from "../pages/EventPage";


const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
              <Route path="/about" element={<AboutUs/>} />
                <Route path="/courses" element={<OnlineCourses/>} />
                <Route path="/tutors" element={<Tutors/>} />
                <Route path="/contact" element={<ContactPage/>} />
                <Route path="/event" element={<EventPage/>} />


    </Routes>
  );
};

export default AllRoutes;
