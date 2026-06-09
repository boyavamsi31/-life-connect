import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative h-[90vh] overflow-hidden bg-gradient-to-br from-red-800 via-red-600 to-red-500 flex items-center justify-center">

      {/* Falling Blood Drop */}
      <motion.div
        initial={{ y: -400, opacity: 1 }}
        animate={{
          y: 0,
          opacity: [1, 1, 0],
        }}
        transition={{
          duration: 2,
          times: [0, 0.8, 1],
          ease: "easeIn",
        }}
        className="absolute text-7xl"
      >
        🩸
      </motion.div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 2,
          duration: 1,
        }}
        className="text-center text-white"
      >
        <h1 className="text-7xl md:text-8xl font-bold mb-4">
          Life❤️
        </h1>

        <p className="text-2xl mb-8">
          Donate Blood, Save Lives
        </p>

        <div className="flex justify-center gap-4">
          <button className="bg-white text-red-600 px-6 py-3 rounded-xl font-bold hover:scale-105 transition">
            Find Donor
          </button>

          <button className="bg-black text-white px-6 py-3 rounded-xl font-bold hover:scale-105 transition">
            Request Blood
          </button>
        </div>
      </motion.div>

    </section>
  );
}

export default Hero;