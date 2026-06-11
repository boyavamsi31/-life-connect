import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="min-h-screen bg-red-50">

      {/* Welcome Section */}
      <div className="text-center pt-10">
        <h2 className="text-4xl font-bold text-red-600">
          Welcome
        </h2>

        <p className="text-gray-600 mt-3">
          Save Lives Through Blood Donation
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8 px-10 mt-12">

        {/* Donor */}
        <Link to="/donor">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:scale-105 transition cursor-pointer">
            <h2 className="text-4xl mb-4">🩸</h2>

            <h3 className="text-2xl font-bold text-red-600">
              Donor
            </h3>

            <p className="mt-3 text-gray-600">
              View available blood donors by blood group.
            </p>
          </div>
        </Link>

        {/* Receiver */}
        <Link to="/receiver">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:scale-105 transition cursor-pointer">
            <h2 className="text-4xl mb-4">❤️</h2>

            <h3 className="text-2xl font-bold text-red-600">
              Receiver
            </h3>

            <p className="mt-3 text-gray-600">
              Check your blood receiving history.
            </p>
          </div>
        </Link>

        {/* Emergency */}
        <Link to="/emergency">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:scale-105 transition cursor-pointer">
            <h2 className="text-4xl mb-4">🚨</h2>

            <h3 className="text-2xl font-bold text-red-600">
              Emergency
            </h3>

            <p className="mt-3 text-gray-600">
              Send urgent blood requests instantly.
            </p>
          </div>
        </Link>

      </div>

    </div>
  );
}

export default Dashboard;