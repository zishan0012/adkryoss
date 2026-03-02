import React, { useRef } from "react";
import aiImage from "../../assets/ai.png";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const CaseStudySection = () => {

  const sectionRef = useRef(null);

  // ✅ parallax

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const yHeading = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -30]
  );

  const yImage = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -20]
  );

  const yText = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -10]
  );

  return (

    <motion.section
      ref={sectionRef}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className="py-16 bg-[#f4f7fb] overflow-hidden relative"
    >

      {/* background */}

      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl -z-10"></div>


      <div className="max-w-7xl mx-auto px-6 relative z-10">


        {/* TOP */}

        <motion.div
          variants={item}
          style={{ y: yHeading }}
          className="text-center mb-14"
        >

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Future-Ready Marketing with AI & Automation
          </h2>

          <p className="text-gray-600 mt-4 text-base md:text-lg">
            The digital landscape is evolving — and so are we.
          </p>

        </motion.div>



        {/* GRID */}

        <div className="grid md:grid-cols-2 gap-10 items-center mb-10">


          {/* LEFT */}

          <motion.div
            variants={container}
            style={{ y: yText }}
          >

            <motion.h3
              variants={item}
              className="text-2xl md:text-4xl font-bold text-gray-900 mb-6"
            >
              Adkryoss integrates:
            </motion.h3>

            <ul className="space-y-3 text-lg">

              {[
                "AI-powered keyword research",
                "Predictive audience targeting",
                "Marketing automation workflows",
                "Data-driven personalization",
                "Advanced analytics dashboards",
              ].map((text, i) => (

                <motion.li
                  key={i}
                  variants={item}
                  className="py-2 flex items-center gap-3"
                >

                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>

                  <span className="text-gray-700">
                    {text}
                  </span>

                </motion.li>

              ))}

            </ul>

          </motion.div>



          {/* IMAGE */}

          <motion.div
            variants={item}
            style={{ y: yImage }}
            className="flex justify-center"
          >

            <motion.img
              src={aiImage}
              alt="Future Marketing"
              className="w-full max-w-md object-contain rounded-4xl"
            />

          </motion.div>

        </div>



        {/* BOTTOM TEXT */}

        <motion.p
          variants={item}
          style={{ y: yText }}
          className="text-center text-gray-600 text-lg max-w-3xl mx-auto relative"
        >

          We blend creativity with technology to stay ahead of algorithms and competitors.

          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></span>

        </motion.p>


      </div>

    </motion.section>
  );
};

export default CaseStudySection;