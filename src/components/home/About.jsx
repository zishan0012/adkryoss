import React from "react";
import { motion } from "framer-motion";

const cardVariant = {
  hidden: { opacity: 0, y: 80, scale: 0.8 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const textVariant = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const Clients = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
      className="py-14 sm:py-20 lg:py-28 px-4 sm:px-6 bg-white overflow-hidden relative"
    >
      {/* Background */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-transparent rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-orange-100/30 to-transparent rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start relative z-10">

        {/* LEFT */}
        <motion.div className="space-y-4">

          <motion.span
            variants={textVariant}
            className="inline-block text-orange-400 font-bold tracking-widest uppercase text-sm sm:text-2xl"
          >
            About
          </motion.span>

          <motion.h2
            variants={textVariant}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 sm:mb-8 leading-tight"
          >
            We Don't Just Market. <br />
            <span className="text-blue-600">
              We Engineer Digital Growth.
            </span>
          </motion.h2>

          <motion.p
            variants={textVariant}
            className="text-gray-600 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6"
          >
            Adkryoss is built for ambitious brands that want scalable,
            ROI-focused marketing solutions.
          </motion.p>

          <motion.p
            variants={textVariant}
            className="text-gray-600 text-sm sm:text-base leading-relaxed"
          >
            You need performance, personalization, and precision.
          </motion.p>

        </motion.div>


        {/* RIGHT CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">

          {/* CARD 1 */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            whileHover={{
              scale: 1.05,
              y: -6,
              boxShadow: "0px 0px 25px #3b82f6",
            }}
            className="group relative bg-white p-6 rounded-2xl border border-blue-100 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-orange-400"></span>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-orange-400"></span>

            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-orange-50 opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl"></div>

            <div className="relative z-10">

              {/* ICON */}
              <div className="card-icon w-12 h-12 bg-gradient-to-br from-blue-100 to-orange-100 rounded-xl flex items-center justify-center mb-4">

                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 17v-6h6v6M4 7h16M4 12h10M4 17h16"
                  />
                </svg>

              </div>

              <p className="font-semibold text-gray-800">
                Data Science & AI-driven insights
              </p>

            </div>
          </motion.div>


          {/* CARD 2 */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            whileHover={{
              scale: 1.05,
              y: -6,
              boxShadow: "0px 0px 25px #ec4899",
            }}
            className="group relative bg-white p-6 rounded-2xl border border-blue-100 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-orange-400"></span>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-orange-400"></span>

            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-orange-50 opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl"></div>

            <div className="relative z-10">

              <div className="card-icon w-12 h-12 bg-gradient-to-br from-blue-100 to-orange-100 rounded-xl flex items-center justify-center mb-4">

                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3v18h18M7 14l4-4 4 4 6-6"
                  />
                </svg>

              </div>

              <p className="font-semibold text-gray-800">
                Full-funnel marketing strategy
              </p>

            </div>
          </motion.div>


          {/* CARD 3 */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            whileHover={{
              scale: 1.05,
              y: -6,
              boxShadow: "0px 0px 25px #f97316",
            }}
            className="group relative bg-white p-6 rounded-2xl border border-blue-100 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-orange-400"></span>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-orange-400"></span>

            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-orange-50 opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl"></div>

            <div className="relative z-10">

              <div className="card-icon w-12 h-12 bg-gradient-to-br from-blue-100 to-orange-100 rounded-xl flex items-center justify-center mb-4">

                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8c-2 0-4 1-4 4s2 4 4 4 4-1 4-4-2-4-4-4zm0 0V4m0 16v-4"
                  />
                </svg>

              </div>

              <p className="font-semibold text-gray-800">
                Conversion-focused creatives
              </p>

            </div>
          </motion.div>


          {/* CARD 4 */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            whileHover={{
              scale: 1.05,
              y: -6,
              boxShadow: "0px 0px 25px #8b5cf6",
            }}
            className="group relative bg-white p-6 rounded-2xl border border-blue-100 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-orange-400"></span>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-orange-400"></span>

            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-orange-50 opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl"></div>

            <div className="relative z-10">

              <div className="card-icon w-12 h-12 bg-gradient-to-br from-blue-100 to-orange-100 rounded-xl flex items-center justify-center mb-4">

                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 3a3 3 0 00-3 3v2.25M14.25 3a3 3 0 013 3v2.25M4.5 12h15M6 21h12a2 2 0 002-2v-5H4v5a2 2 0 002 2z"
                  />
                </svg>

              </div>

              <p className="font-semibold text-gray-800">
                Advanced analytics & automation
              </p>

            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default Clients;