import { useState } from "react";

function FindDonor() {
  const [bloodGroup, setBloodGroup] = useState("");
  const [city, setCity] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    if (!bloodGroup || bloodGroup === "Select Blood Group") {
      alert("Please select a blood group");
      return;
    }

    if (!city) {
      alert("Please enter a city");
      return;
    }

    alert(`Searching donors for ${bloodGroup} in ${city}`);
  };

  return (
    <div className="min-h-screen bg-red-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-[400px]">

        <h1 className="text-3xl font-bold text-red-600 text-center mb-6">
          Find Donor ❤️
        </h1>

        <form onSubmit={handleSearch}>

          <select
            className="w-full border p-3 rounded mb-4"
            onChange={(e) => setBloodGroup(e.target.value)}
          >
            <option>Select Blood Group</option>
            <option>A+</option>
            <option>A-</option>
            <option>B+</option>
            <option>B-</option>
            <option>O+</option>
            <option>O-</option>
            <option>AB+</option>
            <option>AB-</option>
          </select>

          <input
            type="text"
            placeholder="Enter City"
            className="w-full border p-3 rounded mb-4"
            onChange={(e) => setCity(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700"
          >
            Search Donors
          </button>

        </form>

      </div>
    </div>
  );
}

export default FindDonor;