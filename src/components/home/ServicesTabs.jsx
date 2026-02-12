



// import React, { useState } from "react";

// const tabs = [
//   "Search Engine Optimization",
//   "Paid Marketing",
//   "Content Marketing",
//   "Mobile App Marketing",
//   "Marketing Technology & Automation",
// ];

// const tabContent = {
//   "Search Engine Optimization": {
//     title: "Search Engine Optimization",
//     desc: "Greater visibility. Higher rankings. Higher traffic. Better quality leads.",
//     button: "Discover SEO Services",
//     services: [
//       "AI SEO Services",
//       "Enterprise SEO Services",
//       "Ecommerce SEO Services",
//     ],
//     image:
//       "https://www.techmagnate.com/wp-content/uploads/2025/01/seo-services.webp",
//   },

//   "Paid Marketing": {
//     title: "Paid Marketing",
//     desc: "Maximize ROI with data-driven paid campaigns across platforms.",
//     button: "Discover Paid Marketing Services",
//     services: ["PPC Services", "PPC Reseller Services", "Mobile Advertising"],
//     image:
//       "https://www.techmagnate.com/wp-content/uploads/2025/04/ppc-services-company.webp",
//   },

//   "Content Marketing": {
//     title: "Content Marketing",
//     desc: "Content that attracts, engages, and converts your audience.",
//     button: "Discover Content Marketing Services",
//     services: ["Content Writing Services", "Guest Posting"],
//     image:
//       "https://www.techmagnate.com/wp-content/uploads/2025/04/content-marketing-services.webp",
//   },

//   "Mobile App Marketing": {
//     title: "Mobile App Marketing",
//     desc: "Boost app installs and retention with targeted strategies.",
//     button: "Discover App Marketing Services",
//     services: [
//       "App Store Optimization Services",
//       "Mobile App Marketing Services",
//     ],
//     image:
//       "https://www.techmagnate.com/wp-content/uploads/2025/04/mobile-app-marketing-services.webp",
//   },

//   "Marketing Technology & Automation": {
//     title: "Marketing Technology & Automation",
//     desc: "Automate, optimize, and scale marketing operations.",
//     button: "Discover Martech Services",
//     services: [
//       "Martech Consulting Services",
//       "Conversion Rate Optimization",
//       "Customer Data Platform Services",
//     ],
//     image:
//       "https://www.techmagnate.com/wp-content/uploads/2025/04/Martech1.webp",
//   },
// };

// const ServicesTabs = () => {
//   const [activeTab, setActiveTab] = useState(tabs[0]);
//   const [activeService, setActiveService] = useState(null);

//   const content = tabContent[activeTab];

//   return (
//     <section className="bg-white py-6">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Heading */}
//         <h2 className="text-center text-3xl md:text-4xl font-bold text-black">
//           Data Backed Services to Grow Your Revenue
//         </h2>

//         <p className="text-center text-gray-600 max-w-4xl mx-auto mt-4">
//           To experience 360-degree growth for your business, you need a
//           360-degree approach.
//         </p>
//         <p className="text-center text-gray-600 max-w-6xl mx-auto mt-2">
//           Do you want to rank higher on search engines, optimize ad campaigns, or
//           enhance visibility? Leveraging the right data and marketing channels is
//           key to sustained business growth. Techmagnate can help.
//         </p>
//         <p className="text-center text-gray-600 max-w-4xl mx-auto mt-2">
//           Partner with the best in digital marketing. Let’s drive measurable
//           growth.
//         </p>

//         {/* Tabs */}
//         <div className="flex flex-wrap justify-center gap-4 mt-10">
//           {tabs.map((tab) => (
//             <button
//               key={tab}
//               onClick={() => {
//                 setActiveTab(tab);
//                 setActiveService(null);
//               }}
//               className={`px-6 py-2 rounded-full text-sm font-medium transition-all
//                 ${
//                   activeTab === tab
//                     ? "bg-[#008080] text-white"
//                     : "bg-gray-100 text-gray-700 hover:bg-[#008080] hover:text-white"
//                 }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>

//         {/* Content Box */}
//         <div className="mt-14 bg-sky-50 rounded-3xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

//           {/* Left Content */}
//           <div>
//             <h3 className="text-2xl md:text-3xl font-bold text-black">
//               {content.title}
//             </h3>

//             <p className="mt-3 text-gray-700">{content.desc}</p>

//             <button className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition">
//               {content.button} →
//             </button>
//           </div>

//           {/* Right Content */}
//           <div className="relative flex justify-center">
//             <img
//               src={content.image}
//               alt={content.title}
//               className="max-w-xs md:max-w-xs mr-60"
//             />

//             {/* Services list */}
//             <div className="absolute right-[-40px] w-70 top-1/2 -translate-y-1/2 space-y-3">
//               {content.services.map((service) => (
//                 <a
//                   key={service}
//                   href="#"
//                   onClick={() => setActiveService(service)}
//                   className={`block px-4 py-2 rounded-full shadow text-sm font-medium transition cursor-pointer
//                     ${
//                       activeService === service
//                         ? "bg-[#276ea2] text-white"
//                         : "bg-white text-gray-700 hover:bg-[#276ea2] hover:text-white"
//                     }`}
//                 >
//                   {service}
//                 </a>
//               ))}
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesTabs;



















import React, { useState } from "react";

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
    button: "Discover SEO Services",
    services: [
      "AI SEO Services",
      "Enterprise SEO Services",
      "Ecommerce SEO Services",
    ],
    image:
      "https://www.techmagnate.com/wp-content/uploads/2025/01/seo-services.webp",
  },
  "Performance Marketing (PPC & Paid Media)": {
    title: "Performance Marketing (PPC & Paid Media)",
    desc: "Google Ads, Meta Ads, LinkedIn Ads & programmatic campaigns engineered for maximum ROI. Smart bidding, advanced targeting, and CRO-backed landing strategies. ",
    button: "Discover Paid Marketing Services",
    services: ["PPC Services", "PPC Reseller Services", "Mobile Advertising"],
    image:
      "https://www.techmagnate.com/wp-content/uploads/2025/04/ppc-services-company.webp",
  },
  "Social Media Marketing": {
    title: "Social Media Marketing",
    desc: "From brand storytelling to paid social scaling — we build community, engagement, and measurable conversions across Instagram, LinkedIn, Facebook, and emerging platforms. ",
    button: "Discover Content Marketing Services",
    services: ["Content Writing Services", "Guest Posting"],
    image:
      "https://www.techmagnate.com/wp-content/uploads/2025/04/content-marketing-services.webp",
  },
  "E-Commerce Marketing ": {
    title: "E-Commerce Marketing ",
    desc: "Marketplace optimization, product feed management, dynamic ads, and performance scaling strategies for Shopify, WooCommerce & Amazon brands.",
    button: "Discover App Marketing Services",
    services: [
      "App Store Optimization Services",
      "Mobile App Marketing Services",
    ],
    image:
      "https://www.techmagnate.com/wp-content/uploads/2025/04/mobile-app-marketing-services.webp",
  },
  "Content & Inbound Marketing ": {
    title: "Content & Inbound Marketing ",
    desc: "SEO blogs, thought leadership, video marketing, and funnel-driven content that attracts, nurtures, and converts your audience. ",
    button: "Discover Martech Services",
    services: [
      "Martech Consulting Services",
      "Conversion Rate Optimization",
      "Customer Data Platform Services",
    ],
    image:
      "https://www.techmagnate.com/wp-content/uploads/2025/04/Martech1.webp",
  },
  "Conversion Rate Optimization (CRO)": {
    title: "Conversion Rate Optimization (CRO) ",
    desc: "We turn traffic into revenue using heatmaps, A/B testing, UX audits, and behavioral analytics. ",
    button: "Discover Martech Services",
    services: [
      "Martech Consulting Services",
      "Conversion Rate Optimization",
      "Customer Data Platform Services",
    ],
    image:
      "https://www.techmagnate.com/wp-content/uploads/2025/04/Martech1.webp",
  },
};

const ServicesTabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [activeService, setActiveService] = useState(null);

  const content = tabContent[activeTab];

  return (
    <section
      style={{
        backgroundColor: "#ffffff",
        padding: "24px 0",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        {/* Heading */}
        <h2
          style={{
            textAlign: "center",
            fontSize: "36px",
            fontWeight: "700",
            color: "#000",
          }}
        >
          📊 OUR CORE DIGITAL MARKETING SERVICES
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#4b5563",
            maxWidth: "896px",
            margin: "16px auto 0",
          }}
        >
          Integrated Digital Marketing Solutions Under One Roof 
        </p>

        <p
          style={{
            textAlign: "center",
            color: "#4b5563",
            maxWidth: "1152px",
            margin: "8px auto 0",
          }}
        >
      We provide 360° digital marketing services tailored to startups, SMEs, enterprises, and D2C brands. 
        </p>


        {/* Tabs */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "16px",
            marginTop: "40px",
          }}
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setActiveService(null);
              }}
              style={{
                padding: "8px 24px",
                borderRadius: "999px",
                fontSize: "14px",
                fontWeight: "500",
                border: "none",
                cursor: "pointer",
                backgroundColor:
                  activeTab === tab ? "#008080" : "#f3f4f6",
                color: activeTab === tab ? "#ffffff" : "#374151",
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Box */}
        <div
          style={{
            marginTop: "56px",
            backgroundColor: "#e0f2fe",
            borderRadius: "24px",
            padding: "48px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
            alignItems: "center",
            position: "relative",
          }}
        >
          {/* Left Content */}
          <div>
            <h3
              style={{
                fontSize: "28px",
                fontWeight: "700",
                color: "#000",
              }}
            >
              {content.title}
            </h3>

            <p
              style={{
                marginTop: "12px",
                color: "#374151",
              }}
            >
              {content.desc}
            </p>

            <button
              style={{
                marginTop: "24px",
                backgroundColor: "#f97316",
                color: "#fff",
                padding: "12px 24px",
                borderRadius: "999px",
                fontWeight: "600",
                border: "none",
                cursor: "pointer",
              }}
            >
              {content.button} →
            </button>
          </div>

          {/* Right Content */}
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={content.image}
              alt={content.title}
              style={{
                maxWidth: "320px",
                marginRight: "240px",
              }}
            />

            {/* Services list */}
            <div
              style={{
                position: "absolute",
                right: "-40px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "280px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {content.services.map((service) => (
                <a
                  key={service}
                  href="#"
                  onClick={() => setActiveService(service)}
                  style={{
                    display: "block",
                    padding: "8px 16px",
                    borderRadius: "999px",
                    fontSize: "14px",
                    fontWeight: "500",
                    cursor: "pointer",
                    textDecoration: "none",
                    backgroundColor:
                      activeService === service ? "#276ea2" : "#ffffff",
                    color:
                      activeService === service ? "#ffffff" : "#374151",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                  }}
                >
                  {service}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesTabs;