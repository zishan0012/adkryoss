


import React, { useState } from "react";
import SEOImage from "../../assets/SEO.png";
import PPCImage from "../../assets/PPC.png";
import SocialMediaImage from "../../assets/socialMedia.png";
import ecomarceImage from "../../assets/ecomarce.png";
import contentImage from "../../assets/inboundmarketing.png";
import CROImage from "../../assets/HomeCRO.png";
import { motion } from "framer-motion";
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
    desc: "Dominate search rankings with technical SEO, content strategy, high-authority link building, and AI-optimized search frameworks. We focus on traffic that converts — not vanity metrics. .",
   
    image: SEOImage
  },
  "Performance Marketing (PPC & Paid Media)": {
    title: "Performance Marketing (PPC & Paid Media)",
    desc: "Google Ads, Meta Ads, LinkedIn Ads & programmatic campaigns engineered for maximum ROI. Smart bidding, advanced targeting, and CRO-backed landing strategies. ",
    
    image: PPCImage
     
  },
  "Social Media Marketing": {
    title: "Social Media Marketing",
    desc: "From brand storytelling to paid social scaling — we build community, engagement, and measurable conversions across Instagram, LinkedIn, Facebook, and emerging platforms. ",
   
    image: SocialMediaImage
  },
  "E-Commerce Marketing ": {
    title: "E-Commerce Marketing ",
    desc: "Marketplace optimization, product feed management, dynamic ads, and performance scaling strategies for Shopify, WooCommerce & Amazon brands.",
    
    image: ecomarceImage
  },
  "Content & Inbound Marketing ": {
    title: "Content & Inbound Marketing ",
    desc: "SEO blogs, thought leadership, video marketing, and funnel-driven content that attracts, nurtures, and converts your audience. ",
    
    image: contentImage
  },
  "Conversion Rate Optimization (CRO)": {
    title: "Conversion Rate Optimization (CRO) ",
    desc: "We turn traffic into revenue using heatmaps, A/B testing, UX audits, and behavioral analytics. ",
    
    image: CROImage
  },
};

const ServicesTabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [activeService, setActiveService] = useState(null);

  const content = tabContent[activeTab];

  return (
    // <section
    //   style={{
    //     backgroundColor: "#ffffff",
    //     padding: "24px 0",
    //   }}
    // >
    //   <div
    //     style={{
    //       maxWidth: "1280px",
    //       margin: "0 auto",
    //       padding: "0 24px",
    //     }}
    //   >
    //     {/* Heading */}
    //     <h2
    //       style={{
    //         textAlign: "center",
    //         fontSize: "36px",
    //         fontWeight: "700",
    //         color: "#000",
    //       }}
    //     >
    //       📊 OUR CORE DIGITAL MARKETING SERVICES
    //     </h2>

    //     <p
    //       style={{
    //         textAlign: "center",
    //         color: "#4b5563",
    //         maxWidth: "896px",
    //         margin: "16px auto 0",
    //       }}
    //     >
    //       Integrated Digital Marketing Solutions Under One Roof 
    //     </p>

    //     <p
    //       style={{
    //         textAlign: "center",
    //         color: "#4b5563",
    //         maxWidth: "1152px",
    //         margin: "8px auto 0",
    //       }}
    //     >
    //   We provide 360° digital marketing services tailored to startups, SMEs, enterprises, and D2C brands. 
    //     </p>


    //     {/* Tabs */}
    //     <div
    //       style={{
    //         display: "flex",
    //         flexWrap: "wrap",
    //         justifyContent: "center",
    //         gap: "16px",
    //         marginTop: "40px",
    //       }}
    //     >
    //       {tabs.map((tab) => (
    //         <button
    //           key={tab}
    //           onClick={() => {
    //             setActiveTab(tab);
    //             setActiveService(null);
    //           }}
    //           style={{
    //             padding: "8px 24px",
    //             borderRadius: "999px",
    //             fontSize: "14px",
    //             fontWeight: "500",
    //             border: "none",
    //             cursor: "pointer",
    //             backgroundColor:
    //               activeTab === tab ? "#008080" : "#f3f4f6",
    //             color: activeTab === tab ? "#ffffff" : "#374151",
    //           }}
    //         >
    //           {tab}
    //         </button>
    //       ))}
    //     </div>

    //     {/* Content Box */}
    //     <div
    //       style={{
    //         marginTop: "56px",
    //         backgroundColor: "#e0f2fe",
    //         borderRadius: "24px",
    //         padding: "48px",
    //         display: "grid",
    //         gridTemplateColumns: "1fr 1fr",
    //         gap: "40px",
    //         alignItems: "center",
    //         position: "relative",
    //       }}
    //     >
    //       {/* Left Content */}
    //       <div>
    //         <h3
    //           style={{
    //             fontSize: "28px",
    //             fontWeight: "700",
    //             color: "#000",
    //           }}
    //         >
    //           {content.title}
    //         </h3>

    //         <p
    //           style={{
    //             marginTop: "12px",
    //             color: "#374151",
    //           }}
    //         >
    //           {content.desc}
    //         </p>

    //         <button
    //           style={{
    //             marginTop: "24px",
    //             backgroundColor: "#f97316",
    //             color: "#fff",
    //             padding: "12px 24px",
    //             borderRadius: "999px",
    //             fontWeight: "600",
    //             border: "none",
    //             cursor: "pointer",
    //           }}
    //         >
    //           {content.button} →
    //         </button>
    //       </div>

    //       {/* Right Content */}
    //       <div
    //         style={{
    //           position: "relative",
    //           display: "flex",
    //           justifyContent: "center",
    //         }}
    //       >
    //         <img
    //           src={content.image}
    //           alt={content.title}
    //           style={{
    //             maxWidth: "320px",
    //             marginRight: "240px",
    //           }}
    //         />

    //         {/* Services list */}
    //         <div
    //           style={{
    //             position: "absolute",
    //             right: "-40px",
    //             top: "50%",
    //             transform: "translateY(-50%)",
    //             width: "280px",
    //             display: "flex",
    //             flexDirection: "column",
    //             gap: "12px",
    //           }}
    //         >
    //           {content.services.map((service) => (
    //             <a
    //               key={service}
    //               href="#"
    //               onClick={() => setActiveService(service)}
    //               style={{
    //                 display: "block",
    //                 padding: "8px 16px",
    //                 borderRadius: "999px",
    //                 fontSize: "14px",
    //                 fontWeight: "500",
    //                 cursor: "pointer",
    //                 textDecoration: "none",
    //                 backgroundColor:
    //                   activeService === service ? "#276ea2" : "#ffffff",
    //                 color:
    //                   activeService === service ? "#ffffff" : "#374151",
    //                 boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    //               }}
    //             >
    //               {service}
    //             </a>
    //           ))}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>

<motion.section className="bg-white py-6 sm:py-8"
 initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}

>
  <div className="max-w-[1280px] mx-auto px-4 sm:px-6">

    {/* Heading */}
    <h2 className="text-center text-[28px] sm:text-[32px] md:text-[36px] font-bold text-black">
      📊 OUR CORE DIGITAL MARKETING SERVICES
    </h2>

    <p className="text-center text-gray-600 max-w-[896px] mx-auto mt-4 text-sm sm:text-base">
      Integrated Digital Marketing Solutions Under One Roof
    </p>

    <p className="text-center text-gray-600 max-w-[1152px] mx-auto mt-2 text-sm sm:text-base">
      We provide 360° digital marketing services tailored to startups, SMEs, enterprises, and D2C brands.
    </p>

    {/* Tabs */}
    <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-8 sm:mt-10">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => {
            setActiveTab(tab);
            setActiveService(null);
          }}
          className={`px-4 sm:px-6 py-2 rounded-full text-[13px] sm:text-[14px] font-medium transition
            ${activeTab === tab
              ? "bg-[#008080] text-white"
              : "bg-gray-100 text-gray-700"
            }`}
        >
          {tab}
        </button>
      ))}
    </div>

    {/* Content Box */}
    <div className="mt-10 sm:mt-14 bg-sky-100 rounded-3xl p-6 sm:p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center relative">

      {/* Left Content */}
      <div>
        <h3 className="text-[22px] sm:text-[24px] md:text-[28px] font-bold text-black">
          {content.title}
        </h3>

        <p className="mt-3 text-gray-700 text-sm sm:text-base">
          {content.desc}
        </p>

        
      </div>

      {/* Right Content */}
      <div className="relative flex justify-center lg:justify-start">

        <img
          src={content.image}
          alt={content.title}
          className="max-w-[240px] sm:max-w-[280px] ml-30 md:max-w-[320px] w-full lg:mr-[240px]"
        />

        {/* Services List */}
        {/* <div className="mt-6 lg:mt-0 lg:absolute lg:right-[-40px] lg:top-1/2 lg:-translate-y-1/2 w-full lg:w-[280px] flex flex-col gap-3">
          {content.services.map((service) => (
            <a
              key={service}
              href="#"
              onClick={() => setActiveService(service)}
              className={`block px-4 py-2 rounded-full text-[13px] sm:text-[14px] font-medium shadow-md transition
                ${activeService === service
                  ? "bg-[#276ea2] text-white"
                  : "bg-white text-gray-700"
                }`}
            >
              {service}
            </a>
          ))}
        </div> */}

      </div>
    </div>
  </div>
</motion.section>


  );
};

export default ServicesTabs;