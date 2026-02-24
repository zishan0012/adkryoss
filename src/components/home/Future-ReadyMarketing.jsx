import React, { useRef } from "react";
import { Link } from "react-router-dom";
import aiImage from "../../assets/ai.png"
import { motion } from "framer-motion";
const CaseStudySection = () => {
  const scrollRef = useRef(null);

  const scrollNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: scrollRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  return (
   <motion.section className="py-16 bg-[#f4f7fb]"
   
 initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
   >
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Future-Ready Marketing with AI & Automation
          </h2>
          <p className="text-gray-600 mt-4 text-base md:text-lg">
            The digital landscape is evolving — and so are we.
          </p>
        </div>

        {/* Two-column Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-10">
          {/* LEFT SIDE - Heading + Points */}
          <div>
            <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
              Adkryoss integrates:
            </h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-2 text-lg">
              <li className="py-2">AI-powered keyword research</li>
              <li className="py-2">Predictive audience targeting</li>
              <li className="py-2">Marketing automation workflows</li>
              <li className="py-2">Data-driven personalization</li>
              <li className="py-2">Advanced analytics dashboards</li>
            </ul>
          </div>

          {/* RIGHT SIDE - Image */}
          <div className="flex justify-center">
            <img
            src={aiImage}
                alt="Future Marketing"
              className="w-full max-w-md object-contain rounded-4xl"
            />
          </div>
        </div>

        {/* Paragraph Below Full Width */}
        <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto">
          We blend creativity with technology to stay ahead of algorithms and competitors.
        </p>
      </div>
    </motion.section>
  );
};

export default CaseStudySection;