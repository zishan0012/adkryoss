

import React from "react";
import { useNavigate } from "react-router-dom";
import HerobgImage from "../../assets/Herobg.png";
import { motion } from "framer-motion";
const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <>
      <motion.section
        className="relative flex items-center min-h-[90vh] bg-cover bg-left bg-no-repeat "
        style={{
          backgroundImage: `url(${HerobgImage})`
            // "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/banner_desk_bg.webp')",
          }}

           initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      >
        {/* Gradient Overlay */}
        {/* <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,59,102,0.95)_0%,rgba(11,95,76,0.85)_100%)]"></div> */}

        {/* Content Container */}
        <div className="relative z-10 container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-4">

          {/* LEFT SIDE */}
          
                  <div className="text-left lg:text-left text-white space-y-6 mx-auto lg:mx-0">

            <h1 className="text-[36px] font-extrabold mt-5 leading-[1.2]">
              We Build Digital Growth Systems That Drive Revenue.
            </h1>

            <p className="mt-[25px] text-[18px] max-w-[550px] text-white">
              Not just traffic. Not just engagement.
              <br />
              We engineer data-driven marketing strategies that turn clicks
              into customers and brands into market leaders.
            </p>

            {/* Buttons */}
            <div className="mt-[35px] flex flex-col sm:flex-row gap-5">
              <button 
              onClick={()=> navigate("/contact")}
              className="bg-[#ff7a00] text-white px-[28px] py-[14px] rounded-[40px] font-semibold text-[15px]">
                Get a Free Growth Audit →
              </button>

              <button 
              onClick={()=> navigate("/contact")}
              className="border-2 border-white text-white px-[28px] py-[14px] rounded-[40px] font-semibold text-[15px] bg-transparent">
                Talk to a Growth Strategist →
              </button>
            </div>
          </div>

         
           {/* <div className="flex justify-center lg:justify-end mt-10 lg:mt-0">
              <div className="w-full max-w-[400px] h-[260px] sm:h-[300px] md:h-[320px] flex items-center justify-center">
              <img
                src={HeroImage}
                alt="Section Image"
                className="max-w-full max-h-full object-contain rounded-xl shadow-lg"
              />
            </div>
          </div> */}

        </div>
      </motion.section>
    </>
  );
};

export default HeroSection;























