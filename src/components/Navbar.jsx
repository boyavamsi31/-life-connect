import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-red-600 text-white shadow-md">

      {/* Logo */}
      <Link to="/">
        <h1 className="text-3xl font-bold">
          Life❤️
        </h1>
      </Link>

      {/* Buttons */}
      <div className="space-x-4 flex items-center">

        <Link to="/login">
          <button className="bg-white text-red-600 px-4 py-2 rounded-lg font-semibold hover:scale-105 transition">
            Login
          </button>
        </Link>

        <Link to="/signup">
          <button className="bg-black text-white px-4 py-2 rounded-lg font-semibold hover:scale-105 transition">
            Register
          </button>
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;