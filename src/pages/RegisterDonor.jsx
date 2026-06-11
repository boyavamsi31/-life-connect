import { useState } from "react";

function RegisterDonor() {
  const [form, setForm] = useState({
    name: "",
    bloodGroup: "",
    city: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Donor Registered Successfully ❤️");
    console.log(form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-red-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-96"
      >
        <h1 className="text-3xl font-bold text-center text-red-600 mb-6">
          Register as Donor
        </h1>

        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="w-full border p-3 mb-3 rounded"
        />

        <select
          name="bloodGroup"
          onChange={handleChange}
          className="w-full border p-3 mb-3 rounded"
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
          name="city"
          placeholder="City"
          onChange={handleChange}
          className="w-full border p-3 mb-3 rounded"
        />

        <input
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
          className="w-full border p-3 mb-4 rounded"
        />

        <button className="w-full bg-red-600 text-white py-3 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
}

export default RegisterDonor;