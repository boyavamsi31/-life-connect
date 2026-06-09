function WhyDonate() {
  const points = [
    {
      title: "Save Lives",
      description:
        "One blood donation can help save multiple lives in emergencies.",
    },
    {
      title: "Emergency Support",
      description:
        "Quickly connect donors with patients who urgently need blood.",
    },
    {
      title: "Community Impact",
      description:
        "Become a hero in your community by helping others.",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-red-600 mb-12">
          Why Donate Blood?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {points.map((point, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:scale-105 transition"
            >
              <h3 className="text-2xl font-bold mb-4 text-red-600">
                {point.title}
              </h3>

              <p className="text-gray-600">
                {point.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyDonate;