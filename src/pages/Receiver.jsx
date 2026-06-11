import { Link } from "react-router-dom";

function Receiver() {
  return (
    <div className="min-h-screen bg-red-50 p-8">

      <Link to="/dashboard">
        <button className="mb-6 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
          ← Back to Dashboard
        </button>
      </Link>

      <h1 className="text-4xl font-bold text-center text-red-600 mb-10">
        Receiver History ❤️
      </h1>

      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg">

        <h2 className="text-2xl font-bold text-red-600 mb-6">
          Blood Received Details
        </h2>

        <div className="space-y-4 text-lg">

          <p>
            <span className="font-semibold">Last Received Date:</span>
            {" "}12-Feb-2026
          </p>

          <p>
            <span className="font-semibold">Blood Group:</span>
            {" "}B+
          </p>

          <p>
            <span className="font-semibold">Hospital:</span>
            {" "}Government Hospital, Vijayawada
          </p>

          <p>
            <span className="font-semibold">Status:</span>
            {" "}
            <span className="text-green-600 font-bold">
              Successfully Received
            </span>
          </p>

        </div>
      </div>

    </div>
  );
}

export default Receiver;