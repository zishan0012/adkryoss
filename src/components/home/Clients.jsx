

import React from "react";

const Clients = () => {
  const logos = [
    // Column 1
    "https://www.techmagnate.com/wp-content/uploads/2025/05/Group-463.webp",
    "https://www.techmagnate.com/wp-content/uploads/2025/08/Indira-ivf.webp",
    "https://www.techmagnate.com/wp-content/uploads/2025/05/Group-457.webp",
    "https://www.techmagnate.com/wp-content/uploads/2025/06/Group-464.webp",

    // Column 2
    "https://www.techmagnate.com/wp-content/uploads/2025/05/Group-459.webp",
    "https://www.techmagnate.com/wp-content/uploads/2025/05/Group-456.webp",
    "https://www.techmagnate.com/wp-content/uploads/2025/06/Group-460.webp",
    "https://www.techmagnate.com/wp-content/uploads/2025/06/Group-478.webp",

    // Column 3
    "https://www.techmagnate.com/wp-content/uploads/2025/05/Group-461.webp",
    "https://www.techmagnate.com/wp-content/uploads/2025/05/Group-462.webp",
    "https://www.techmagnate.com/wp-content/uploads/2025/08/BLK-MAX-1.webp",
    "https://www.techmagnate.com/wp-content/uploads/2025/05/Group-464-1.webp",
  ];

  return (
    // <section
    //   style={{
    //     paddingTop: "64px",
    //     paddingBottom: "64px",
    //     backgroundColor: "#ffffff",
    //   }}
    // >
    //   <div
    //     style={{
    //       maxWidth: "1280px",
    //       margin: "0 auto",
    //       padding: "0 24px",
    //     }}
    //   >
       
    //     <p
    //       style={{
    //         textAlign: "center",
    //         color: "#38bdf8",
    //         fontWeight: "600",
    //         letterSpacing: "1px",
    //       }}
    //     >
    //       CLIENTS
    //     </p>

    //     <h3
    //       style={{
    //         textAlign: "center",
    //         color: "#000000",
    //         fontSize: "36px",
    //         fontWeight: "700",
    //         marginTop: "12px",
    //         lineHeight: "1.2",
    //       }}
    //     >
    //       Working with the Largest Enterprises <br />
    //       To Achieve Business Goals
    //     </h3>

       
    //     <div
    //       style={{
    //         marginTop: "48px",
    //         display: "grid",
    //         gridTemplateColumns: "repeat(3, 1fr)",
    //         gap: "40px",
    //       }}
    //     >
    //       {[0, 1, 2].map((col) => (
    //         <div
    //           key={col}
    //           style={{
    //             display: "grid",
    //             gridTemplateColumns: "repeat(2, 1fr)",
    //             gap: "6px 16px",
    //             alignItems: "center",
    //             justifyItems: "center",
    //           }}
    //         >
    //           {logos.slice(col * 4, col * 4 + 4).map((logo, index) => (
    //             <img
    //               key={index}
    //               src={logo}
    //               alt="Client logo"
    //               style={{
    //                 width: "160px",
    //                 objectFit: "contain",
    //                 cursor: "pointer",
    //               }}
    //             />
    //           ))}
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>

    <section className="py-28 px-6 bg-white">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

    {/* LEFT CONTENT */}
    <div>
      <span className="text-blue-600 font-semibold tracking-widest uppercase text-sm">
        About
      </span>

      <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-8 leading-tight">
        We Don’t Just Market. <br />
        <span className="text-blue-600">We Engineer Digital Growth.</span>
      </h2>

      <p className="text-gray-600 leading-relaxed mb-6">
        Adkryoss is built for ambitious brands that want scalable,
        ROI-focused marketing solutions. In today’s algorithm-driven
        digital landscape, visibility alone is not enough.
      </p>

      <p className="text-gray-600 leading-relaxed">
        You need performance, personalization, and precision.
      </p>
    </div>

    {/* RIGHT SIDE - VALUE BLOCKS */}
    <div className="grid sm:grid-cols-2 gap-6">

      {/* 1 - AI & Data */}
      <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2"
            viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M9 17v-6h6v6M4 7h16M4 12h10M4 17h16" />
          </svg>
        </div>
        <p className="font-semibold text-gray-800">
          Data Science & AI-driven insights
        </p>
      </div>

      {/* 2 - Strategy */}
      <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2"
            viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M3 3v18h18M7 14l4-4 4 4 6-6" />
          </svg>
        </div>
        <p className="font-semibold text-gray-800">
          Full-funnel marketing strategy
        </p>
      </div>

      {/* 3 - Conversion */}
      <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2"
            viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M12 8c-2 0-4 1-4 4s2 4 4 4 4-1 4-4-2-4-4-4zm0 0V4m0 16v-4" />
          </svg>
        </div>
        <p className="font-semibold text-gray-800">
          Conversion-focused creatives
        </p>
      </div>

      {/* 4 - Automation */}
      <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2"
            viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M9.75 3a3 3 0 00-3 3v2.25M14.25 3a3 3 0 013 3v2.25M4.5 12h15M6 21h12a2 2 0 002-2v-5H4v5a2 2 0 002 2z" />
          </svg>
        </div>
        <p className="font-semibold text-gray-800">
          Advanced analytics & automation
        </p>
      </div>

    </div>

  </div>

  {/* Bottom Statement */}
  <div className="mt-20 text-center max-w-3xl mx-auto">
    <p className="text-xl font-medium text-gray-800">
      To create marketing systems that generate consistent growth.
    </p>
  </div>
</section>
  );
};

export default Clients;