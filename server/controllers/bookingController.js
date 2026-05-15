const Booking = require("../models/Booking");

// CREATE BOOKING
exports.createBooking = async (req, res) => {

  try {

    const { studentName, date, time } = req.body;

    // Check existing slot
    const existingBooking = await Booking.findOne({
      date,
      time
    });

    if (existingBooking) {
      return res.status(400).json({
        message: "Slot already booked"
      });
    }

    // Create booking
    const booking = await Booking.create({
      studentName,
      date,
      time
    });

    res.status(201).json({
      message: "Booking Created",
      booking
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

// GET ALL BOOKINGS
exports.getBookings = async (req, res) => {

  try {

    const bookings = await Booking.find();

    res.json(bookings);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

// CANCEL BOOKING
exports.cancelBooking = async (req, res) => {

  try {

    const booking = await Booking.findByIdAndDelete(req.params.id);

    if (!booking) {
      return res.status(404).json({
        message: "Booking not found"
      });
    }

    res.json({
      message: "Booking Cancelled"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};


// UPDATE BOOKING STATUS
exports.updateBookingStatus = async (req, res) => {

  try {

    const { status } = req.body;

    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!booking) {
      return res.status(404).json({
        message: "Booking not found"
      });
    }

    res.json({
      message: "Booking Status Updated",
      booking
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};