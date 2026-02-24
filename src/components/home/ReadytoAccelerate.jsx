import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ReadyToAccelerateImage from "../../assets/ReadyToaccelerate.jpeg";
const ClientTestimonials = () => {
  const navigate = useNavigate();
  return (
    <motion.section
      className="py-14 bg-white bg-cover mb-5"
      style={{
        backgroundImage:
          "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/client_bg.webp')",
      }}

      
 initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE CTA */}
        <div className="flex flex-col items-start md:items-start justify-center space-y-6 px-6">
          <h2 className="text-4xl font-bold text-gray-800">
            Ready to Accelerate Your Digital Growth?
          </h2>
          <p className="text-lg text-white">
            Let’s build a scalable digital strategy that drives traffic, leads, and revenue.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <button 
            onClick={()=>navigate("/contact")}
            className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition">
              👉 Book Your Free Consultation
            </button>
            <button 
            onClick={()=>navigate("/request-quote")}
            
            className="bg-gray-200 text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-300 transition">
              👉 Request Custom Proposal
            </button>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex items-center justify-center">
          <img
            src= {ReadyToAccelerateImage}
              alt="Client"
            className="rounded-4xl shadow-lg max-w-full h-100"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default ClientTestimonials;
