import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../navBar/navBar";
import Footer from "../footer/footer";

import "./newReservation.css";

const NewReservation = ({ onReserve }) => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [nameError, setNameError] = useState("");
  const [dateError, setDateError] = useState("");
  const [timeError, setTimeError] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError("");
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
    setDateError("");
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
    setTimeError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation
    let isValid = true;

    if (name.trim() === "") {
      setNameError("Name is required");
      isValid = false;
    }

    if (date.trim() === "") {
      setDateError("Date is required");
      isValid = false;
    }

    if (time.trim() === "") {
      setTimeError("Time is required");
      isValid = false;
    }

    if (isValid) {
      navigate("/home");
      onReserve();
      // Add your reservation submission logic here
    }
  };

  return (
    <div>
      <NavBar />
      <h1>New Reservation</h1>
      <form id="newReservationForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            className="form-control"
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
          {nameError && (
            <small className="form-text text-muted error">{nameError}</small>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            className="form-control"
            type="date"
            id="date"
            value={date}
            onChange={handleDateChange}
          />
          {dateError && (
            <small className="form-text text-muted error">{dateError}</small>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="time">Time:</label>
          <input
            className="form-control"
            type="time"
            id="time"
            value={time}
            onChange={handleTimeChange}
          />
          {timeError && (
            <small className="form-text text-muted error">{timeError}</small>
          )}
        </div>

        <button className="btn btn-outline-primary" type="submit">
          Submit
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default NewReservation;
