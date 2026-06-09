function Dashboard() {
  return (
    <div className="min-h-screen bg-red-50 p-8">
      <h1 className="text-4xl font-bold text-red-600 mb-6">
        Welcome to Life❤️ Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-bold">Register as Donor</h2>
          <p className="mt-2 text-gray-600">
            Become a blood donor and help save lives.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-bold">Request Blood</h2>
          <p className="mt-2 text-gray-600">
            Create a blood request in emergencies.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-bold">Find Donors</h2>
          <p className="mt-2 text-gray-600">
            Search for available blood donors.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;