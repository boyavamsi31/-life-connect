import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-red-600 text-white px-8 py-4 flex justify-between items-center">

      <Link to="/">
        <h1 className="text-3xl font-bold">
          Life❤️
        </h1>
      </Link>

      <div className="space-x-4">

        <Link to="/login">
          <button className="bg-white text-red-600 px-4 py-2 rounded-lg font-semibold">
            Login
          </button>
        </Link>

        <Link to="/signup">
          <button className="bg-black px-4 py-2 rounded-lg font-semibold">
            Register
          </button>
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;