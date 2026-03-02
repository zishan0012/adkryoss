import React, { useState } from "react";
import SEOImage from "../../assets/SEO.png";
import PPCImage from "../../assets/PPC.png";
import SocialMediaImage from "../../assets/socialMedia.png";
import ecomarceImage from "../../assets/ecomarce.png";
import contentImage from "../../assets/inboundmarketing.png";
import CROImage from "../../assets/HomeCRO.png";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  "Search Engine Optimization",
  "Performance Marketing (PPC & Paid Media)",
  "Social Media Marketing",
  "E-Commerce Marketing ",
  "Content & Inbound Marketing ",
  "Conversion Rate Optimization (CRO)"
];

const tabContent = {
  "Search Engine Optimization": {
    title: "Search Engine Optimization",
    desc: "Dominate search rankings with technical SEO, content strategy, high-authority link building, and AI-optimized search frameworks.",
    image: SEOImage
  },
  "Performance Marketing (PPC & Paid Media)": {
    title: "Performance Marketing (PPC & Paid Media)",
    desc: "Google Ads, Meta Ads, LinkedIn Ads & programmatic campaigns engineered for maximum ROI.",
    image: PPCImage
  },
  "Social Media Marketing": {
    title: "Social Media Marketing",
    desc: "We build engagement and conversions across Instagram, LinkedIn, Facebook, and emerging platforms.",
    image: SocialMediaImage
  },
  "E-Commerce Marketing ": {
    title: "E-Commerce Marketing",
    desc: "Marketplace optimization, dynamic ads, and scaling strategies for Shopify & Amazon brands.",
    image: ecomarceImage
  },
  "Content & Inbound Marketing ": {
    title: "Content & Inbound Marketing",
    desc: "SEO blogs, video marketing, and funnel-driven content that converts.",
    image: contentImage
  },
  "Conversion Rate Optimization (CRO)": {
    title: "Conversion Rate Optimization (CRO)",
    desc: "Heatmaps, A/B testing, UX audits, and behavioral analytics.",
    image: CROImage
  },
};

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const ServicesTabs = () => {

  const [activeTab, setActiveTab] = useState(tabs[0]);

  const content = tabContent[activeTab];

  return (

    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: false }}
      variants={fade}
      className="bg-white py-12 sm:py-16 overflow-hidden relative"
    >

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">

        {/* Heading */}

        <motion.h2
          variants={fade}
          className="text-center text-[28px] sm:text-[32px] md:text-[36px] font-bold text-gray-900"
        >
          OUR CORE DIGITAL MARKETING SERVICES
        </motion.h2>

        <motion.p
          variants={fade}
          className="text-center text-gray-600 max-w-[896px] mx-auto mt-4"
        >
          Integrated Digital Marketing Solutions Under One Roof
        </motion.p>

        <motion.p
          variants={fade}
          className="text-center text-gray-600 max-w-[1152px] mx-auto mt-2"
        >
          We provide 360° digital marketing services tailored to startups, SMEs, enterprises, and D2C brands.
        </motion.p>


        {/* Tabs */}

        <div className="flex flex-wrap justify-center gap-3 mt-10">

          {tabs.map((tab) => (

            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="
                px-6 py-2.5 rounded-full
                text-sm font-medium
                bg-[#0066CC] text-white
                hover:bg-[#0052a3]
                transition
                shadow-md
              "
            >
              {tab}
            </button>

          ))}

        </div>


        {/* Content Box */}

        <AnimatePresence mode="wait">

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="mt-12 bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 sm:p-10 md:p-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center border border-blue-100 shadow-xl"
          >

            {/* Left */}

            <div className="space-y-4">

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                {content.title}
              </h3>

              <p className="text-gray-600">
                {content.desc}
              </p>

            </div>


            {/* Right */}

            <div className="flex justify-center lg:justify-end">

              <img
                src={content.image}
                alt={content.title}
                className="max-w-[300px] w-full"
              />

            </div>

          </motion.div>

        </AnimatePresence>

      </div>

    </motion.section>

  );

};

export default ServicesTabs;