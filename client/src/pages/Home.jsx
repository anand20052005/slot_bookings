import { Link } from "react-router-dom";

function Home() {

  return (

    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold">
          Barber Booking
        </h1>

        <div className="flex gap-4">

          <Link
            to="/"
            className="hover:text-gray-200"
          >
            Home
          </Link>

          <Link
            to="/register"
            className="hover:text-gray-200"
          >
            Register
          </Link>

          <Link
            to="/login"
            className="hover:text-gray-200"
          >
            Login
          </Link>

          <Link
            to="/bookings"
            className="hover:text-gray-200"
          >
            Bookings
          </Link>

        </div>

      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center mt-32 px-4">

        <h1 className="text-5xl font-bold text-blue-600 mb-6">
          University Barber Slot Booking
        </h1>

        <p className="text-lg text-gray-700 max-w-2xl mb-8">
          Skip long waiting lines at the university barber shop.
          Book your haircut slot online and manage your time easily.
        </p>

        <div className="flex gap-4">

          <Link
            to="/register"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Get Started
          </Link>

          <Link
            to="/bookings"
            className="bg-white border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50"
          >
            Book Slot
          </Link>

        </div>

      </div>

    </div>

  );
}

export default Home;