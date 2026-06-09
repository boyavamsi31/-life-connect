function BloodGroups() {
  const groups = [
    "A+",
    "A-",
    "B+",
    "B-",
    "O+",
    "O-",
    "AB+",
    "AB-",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-red-600 mb-12">
          Blood Groups
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {groups.map((group, index) => (
            <div
              key={index}
              className="bg-red-600 text-white text-center py-8 rounded-2xl shadow-lg hover:scale-110 transition duration-300 cursor-pointer"
            >
              <h3 className="text-4xl font-bold">
                {group}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default BloodGroups;