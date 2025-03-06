import React from "react";
import TidycalEmbed from "../components/BookCall/TidycallEmbed";
import HeaderSection from "../components/BookCall/HeaderSection"; 
import './BookingPage.css'
const BookingPage = () => {
  return (
    <div className="booking-page">
      <HeaderSection />
      <TidycalEmbed />
    </div>
  );
};

export default BookingPage;
