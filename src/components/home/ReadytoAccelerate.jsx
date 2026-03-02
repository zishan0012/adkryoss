import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import ReadyToAccelerateImage from "../../assets/ReadyToaccelerate.jpeg";



const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};



const ClientTestimonials = () => {

  const navigate = useNavigate();

  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const yParallax = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -20]
  );


  return (

    <motion.section
      ref={sectionRef}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className="py-14 bg-cover bg-center mb-5 overflow-hidden relative"
      style={{
        backgroundImage:
          "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/client_bg.webp')",
      }}
    >

      {/* overlay */}

      <div className="absolute inset-0 bg-black/40 z-0"></div>


      <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl z-0"></div>



      <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-2 gap-10 items-center relative z-10">


        {/* LEFT */}

        <motion.div
          variants={item}
          style={{ y: yParallax }}
          className="flex flex-col items-start md:items-start justify-center space-y-6 px-6"
        >

          <h2 className="text-4xl font-bold text-white drop-shadow-lg">

            Ready to Accelerate Your Digital Growth?

          </h2>


          <p className="text-lg text-gray-200 drop-shadow">

            Let's build a scalable digital strategy that drives traffic, leads, and revenue.

          </p>



          <div className="flex flex-col sm:flex-row gap-4 mt-4">


            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 10px 20px rgba(249,115,22,0.4)",
              }}
              onClick={() => navigate("/contact")}
              className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg"
            >
              👉 Book Your Free Consultation
            </motion.button>


            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 10px 20px rgba(0,0,0,0.3)",
              }}
              onClick={() => navigate("/request-quote")}
              className="bg-gray-200 text-gray-800 px-6 py-3 rounded-full font-semibold shadow-lg"
            >
              👉 Request Custom Proposal
            </motion.button>

          </div>



          <p className="text-sm text-gray-300 mt-4 flex items-center gap-2">

            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>

            No commitment • Free strategy call • 100% confidential

          </p>

        </motion.div>



        {/* RIGHT IMAGE */}

        <motion.div
          variants={item}
          style={{ y: yParallax }}
          className="flex items-center justify-center"
        >

          <motion.img
            src={ReadyToAccelerateImage}
            alt="Client"
            className="rounded-4xl shadow-2xl max-w-full h-auto w-96"
            whileHover={{
              scale: 1.03,
            }}
          />

        </motion.div>

      </div>

    </motion.section>

  );

};

export default ClientTestimonials;