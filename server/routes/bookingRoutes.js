const express = require("express");

const router = express.Router();

const {
  createBooking,
  getBookings,
  cancelBooking,
  updateBookingStatus
} = require("../controllers/bookingController");

// Create Booking
router.post("/", createBooking);

// Get All Bookings
router.get("/", getBookings);

// Cancel Booking
router.delete("/:id", cancelBooking);


// Update Booking Status
router.patch("/:id", updateBookingStatus);

module.exports = router; 