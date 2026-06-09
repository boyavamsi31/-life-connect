function Stats() {
  const stats = [
    { number: "5000+", label: "Registered Donors" },
    { number: "1200+", label: "Lives Saved" },
    { number: "150+", label: "Hospitals" },
    { number: "24/7", label: "Support" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-red-50 p-6 rounded-2xl shadow-md text-center"
          >
            <h2 className="text-4xl font-bold text-red-600">
              {item.number}
            </h2>
            <p className="mt-2 text-gray-700">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;