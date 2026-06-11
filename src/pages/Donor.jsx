import { useState } from "react";
import { Link } from "react-router-dom";

function Donor() {
  const donors = [
    { name: "Ravi Kumar", group: "O+", city: "Vijayawada" },
    { name: "Suresh", group: "A+", city: "Guntur" },
    { name: "Prasad", group: "B+", city: "Vijayawada" },
    { name: "Kiran", group: "AB+", city: "Hyderabad" },
    { name: "Mahesh", group: "O+", city: "Vijayawada" },
  ];

  const [selectedGroup, setSelectedGroup] = useState("All");

  const filteredDonors =
    selectedGroup === "All"
      ? donors
      : donors.filter((d) => d.group === selectedGroup);

  return (
    <div className="min-h-screen bg-red-50 p-8">

      {/* Back Button */}
      <Link to="/dashboard">
        <button className="mb-6 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
          ← Back to Dashboard
        </button>
      </Link>

      {/* Heading */}
      <h1 className="text-4xl font-bold text-center text-red-600 mb-8">
        Available Donors 🩸
      </h1>

      {/* Blood Group Filters */}
      <div className="flex flex-wrap gap-3 justify-center mb-8">
        {["All", "A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"].map(
          (group) => (
            <button
              key={group}
              onClick={() => setSelectedGroup(group)}
              className={`px-4 py-2 rounded-lg font-semibold ${
                selectedGroup === group
                  ? "bg-red-600 text-white"
                  : "bg-white text-red-600 shadow"
              }`}
            >
              {group}
            </button>
          )
        )}
      </div>

      {/* Donor Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {filteredDonors.map((donor, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg hover:scale-105 transition"
          >
            <h2 className="text-2xl font-bold text-red-600">
              {donor.name}
            </h2>

            <p className="mt-3">
              Blood Group: <b>{donor.group}</b>
            </p>

            <p>
              City: <b>{donor.city}</b>
            </p>

            <p className="text-green-600 font-semibold mt-2">
              Available
            </p>

            <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg">
              Contact Donor
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Donor;