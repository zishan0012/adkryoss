import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";


// Array of cards with text and related SVG
const cards = [
  {
    title: "Dedicated account strategist",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-blue-500 mb-4 mx-auto"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.84 5.422 12.083 12.083 0 01-.84 5.422L12 14z" />
      </svg>
    ),
  },
  {
    title: "Weekly performance insights",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-green-500 mb-4 mx-auto"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3h2v12h-2zM4 9h2v6H4zM18 7h2v8h-2z" />
      </svg>
    ),
  },
  {
    title: "Real-time reporting",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-purple-500 mb-4 mx-auto"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h2l3 10h8l3-10h2" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 4h-2v6h2V4z" />
      </svg>
    ),
  },
  {
    title: "Strategic consultations",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-red-500 mb-4 mx-auto"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h8m-8 4h6" />
      </svg>
    ),
  },
  {
    title: "Transparent communication",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-yellow-500 mb-4 mx-auto"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.928 9.928 0 01-5.032-1.406L3 20l1.406-3.032A9.928 9.928 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: "Your success defines our growth",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-indigo-500 mb-4 mx-auto"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
];



const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};



const GrowthPartner = () => {

  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const yParallax = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -30]
  );


  return (

    <motion.section
      ref={sectionRef}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className="py-16 bg-gradient-to-b from-white to-gray-50 overflow-hidden relative"
    >


      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-100/20 rounded-full blur-3xl -z-10"></div>



      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">


        <motion.h2
          variants={item}
          style={{ y: yParallax }}
          className="text-4xl font-bold text-black mb-4 relative inline-block"
        >
          Your Growth Partner — Not Just an Agency

          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></span>

        </motion.h2>


        <motion.p
          variants={item}
          className="text-gray-600 text-lg mb-12"
        >
          At Adkryoss, we believe in partnerships, not projects. You get:
        </motion.p>



        <motion.div
          variants={container}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >

          {cards.map((card, index) => (

            <motion.div
              key={index}
              variants={item}
              whileHover={{
                y: -10,
                scale: 1.05,
                boxShadow:
                  "0 20px 40px rgba(0,0,0,0.15)",
              }}
              className="border rounded-2xl p-6 shadow-sm bg-[#f9fafb] cursor-pointer"
            >

              {card.icon}

              <h3 className="text-lg font-semibold text-gray-800">
                {card.title}
              </h3>

            </motion.div>

          ))}

        </motion.div>

      </div>

    </motion.section>

  );

};

export default GrowthPartner;