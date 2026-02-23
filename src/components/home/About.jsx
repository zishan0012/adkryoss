

import React from "react";
import { motion } from "framer-motion";
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
  

//     <section className="py-28 px-6 bg-white">
//   <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

//     {/* LEFT CONTENT */}
//     <div>
//       <span className="text-blue-600 font-semibold tracking-widest uppercase text-sm">
//         About
//       </span>

//       <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-8 leading-tight">
//         We Don’t Just Market. <br />
//         <span className="text-blue-600">We Engineer Digital Growth.</span>
//       </h2>

//       <p className="text-gray-600 leading-relaxed mb-6">
//         Adkryoss is built for ambitious brands that want scalable,
//         ROI-focused marketing solutions. In today’s algorithm-driven
//         digital landscape, visibility alone is not enough.
//       </p>

//       <p className="text-gray-600 leading-relaxed">
//         You need performance, personalization, and precision.
//       </p>
//     </div>

//     {/* RIGHT SIDE - VALUE BLOCKS */}
//     <div className="grid sm:grid-cols-2 gap-6">

//       {/* 1 - AI & Data */}
//       <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
//         <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
//           <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2"
//             viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round"
//               d="M9 17v-6h6v6M4 7h16M4 12h10M4 17h16" />
//           </svg>
//         </div>
//         <p className="font-semibold text-gray-800">
//           Data Science & AI-driven insights
//         </p>
//       </div>

//       {/* 2 - Strategy */}
//       <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
//         <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
//           <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2"
//             viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round"
//               d="M3 3v18h18M7 14l4-4 4 4 6-6" />
//           </svg>
//         </div>
//         <p className="font-semibold text-gray-800">
//           Full-funnel marketing strategy
//         </p>
//       </div>

//       {/* 3 - Conversion */}
//       <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
//         <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
//           <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2"
//             viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round"
//               d="M12 8c-2 0-4 1-4 4s2 4 4 4 4-1 4-4-2-4-4-4zm0 0V4m0 16v-4" />
//           </svg>
//         </div>
//         <p className="font-semibold text-gray-800">
//           Conversion-focused creatives
//         </p>
//       </div>

//       {/* 4 - Automation */}
//       <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
//         <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
//           <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2"
//             viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round"
//               d="M9.75 3a3 3 0 00-3 3v2.25M14.25 3a3 3 0 013 3v2.25M4.5 12h15M6 21h12a2 2 0 002-2v-5H4v5a2 2 0 002 2z" />
//           </svg>
//         </div>
//         <p className="font-semibold text-gray-800">
//           Advanced analytics & automation
//         </p>
//       </div>

//     </div>

//   </div>

//   {/* Bottom Statement */}
//   <div className="mt-20 text-center max-w-3xl mx-auto">
//     <p className="text-xl font-medium text-gray-800">
//       To create marketing systems that generate consistent growth.
//     </p>
//   </div>
// </section>


<motion.section className="py-14 sm:py-20 lg:py-28 px-4 sm:px-6 bg-white overflow-hidden"

 initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
>
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

    {/* LEFT CONTENT */}
    <div>
      <span className="text-blue-600 font-semibold tracking-widest uppercase text-xs sm:text-sm">
        About
      </span>

      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 sm:mb-8 leading-tight">
        We Don’t Just Market. <br />
        <span className="text-blue-600">We Engineer Digital Growth.</span>
      </h2>

      <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6">
        Adkryoss is built for ambitious brands that want scalable,
        ROI-focused marketing solutions. In today’s algorithm-driven
        digital landscape, visibility alone is not enough.
      </p>

      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
        You need performance, personalization, and precision.
      </p>
    </div>

    {/* RIGHT SIDE - VALUE BLOCKS */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">

      {/* 1 */}
      <div className="bg-gray-50 p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-6h6v6M4 7h16M4 12h10M4 17h16" />
          </svg>
        </div>
        <p className="font-semibold text-gray-800 text-sm sm:text-base">
          Data Science & AI-driven insights
        </p>
      </div>

      {/* 2 */}
      <div className="bg-gray-50 p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18M7 14l4-4 4 4 6-6" />
          </svg>
        </div>
        <p className="font-semibold text-gray-800 text-sm sm:text-base">
          Full-funnel marketing strategy
        </p>
      </div>

      {/* 3 */}
      <div className="bg-gray-50 p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-2 0-4 1-4 4s2 4 4 4 4-1 4-4-2-4-4-4zm0 0V4m0 16v-4" />
          </svg>
        </div>
        <p className="font-semibold text-gray-800 text-sm sm:text-base">
          Conversion-focused creatives
        </p>
      </div>

      {/* 4 */}
      <div className="bg-gray-50 p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3a3 3 0 00-3 3v2.25M14.25 3a3 3 0 013 3v2.25M4.5 12h15M6 21h12a2 2 0 002-2v-5H4v5a2 2 0 002 2z" />
          </svg>
        </div>
        <p className="font-semibold text-gray-800 text-sm sm:text-base">
          Advanced analytics & automation
        </p>
      </div>

    </div>
  </div>

  {/* Bottom Statement */}
  <div className="mt-14 sm:mt-20 text-center max-w-3xl mx-auto px-4">
    <p className="text-base sm:text-lg md:text-xl font-medium text-gray-800">
      To create marketing systems that generate consistent growth.
    </p>
  </div>
</motion.section>

  );
};

export default Clients;