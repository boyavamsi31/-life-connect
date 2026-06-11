import { useState } from "react";
import { Link } from "react-router-dom";

function Emergency() {
  const [bloodGroup, setBloodGroup] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Emergency Request Sent Successfully!");
  };

  return (
    <div className="min-h-screen bg-red-50 p-8">

      <Link to="/dashboard">
        <button className="mb-6 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
          ← Back to Dashboard
        </button>
      </Link>

      <h1 className="text-4xl font-bold text-center text-red-600 mb-10">
        Emergency Blood Request 🚨
      </h1>

      <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-lg">

        <form onSubmit={handleSubmit} className="space-y-4">

          <select
            className="w-full border p-3 rounded-lg"
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
            placeholder="Enter Location"
            className="w-full border p-3 rounded-lg"
            onChange={(e) => setLocation(e.target.value)}
          />

          <input
            type="tel"
            placeholder="Contact Number"
            className="w-full border p-3 rounded-lg"
            onChange={(e) => setPhone(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700"
          >
            Send Emergency Request
          </button>

        </form>
      </div>

    </div>
  );
}

export default Emergency;