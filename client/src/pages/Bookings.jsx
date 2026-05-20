import { useEffect, useState } from "react";
import axios from "axios";

function Bookings() {

  const [formData, setFormData] = useState({
    studentName: "",
    date: "",
    time: ""
  });

  const [bookings, setBookings] = useState([]);

  // Fetch bookings
  const fetchBookings = async () => {

    try {

      const response = await axios.get(
        "https://slot-bookings.onrender.com/api/bookings"
      );

      setBookings(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {

    fetchBookings();

  }, []);

  // Handle input
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  // Create booking
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(
        "https://slot-bookings.onrender.com/api/bookings",
        formData
      );

      alert(response.data.message);

      setFormData({
        studentName: "",
        date: "",
        time: ""
      });

      fetchBookings();

    } catch (error) {

      console.log(error);

      alert(
        error.response?.data?.message ||
        "Booking Failed"
      );

    }

  };

  // Cancel booking
  const cancelBooking = async (id) => {

    try {

      await axios.delete(
        `https://slot-bookings.onrender.com/api/bookings/${id}`
      );

      alert("Booking Cancelled");

      fetchBookings();

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
        Barber Slot Booking
      </h1>

      {/* Booking Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-lg max-w-md mx-auto mb-10"
      >

        <input
          type="text"
          name="studentName"
          placeholder="Student Name"
          value={formData.studentName}
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
        />

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
        />

        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700"
        >
          Book Slot
        </button>

      </form>

      {/* Booking List */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {bookings.map((booking) => (

          <div
            key={booking._id}
            className="bg-white p-6 rounded-xl shadow-md"
          >

            <h2 className="text-2xl font-bold mb-2">
              {booking.studentName}
            </h2>

            <p className="mb-2">
              Date: {booking.date}
            </p>

            <p className="mb-4">
              Time: {booking.time}
            </p>

            <button
              onClick={() => cancelBooking(booking._id)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Cancel Booking
            </button>

          </div>

        ))}

      </div>

    </div>

  );
}

export default Bookings;
