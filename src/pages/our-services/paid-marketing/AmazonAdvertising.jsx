// import React from "react";
// import amazon from "../../../assets/Amazon.jpg"
// import { useState } from "react";
// import {
//   Megaphone,
//   Radar,
//   BarChart4,
//   Layout,
//   LineChart,
//   SearchCheck,
//   Layers,
//   Sliders,
//   TrendingUp,
//   CheckCircle,
//   Plus, X
// } from "lucide-react";

// const amazonServices = [
//   {
//     title: "Sponsored Ads Management",
//     desc: "We build structured campaign architectures focused on intent-based keyword targeting and profitability.",
//     points: [
//       "Sponsored Products",
//       "Sponsored Brands",
//       "Sponsored Display",
//     ],
//     icon: Megaphone,
//   },
//   {
//     title: "DSP & Programmatic Advertising",
//     desc: "Expand beyond Amazon search with advanced audience targeting using Amazon DSP.",
//     points: [
//       "High-intent audience targeting",
//       "Cross-platform retargeting",
//       "Prospecting & re-engagement",
//     ],
//     icon: Radar,
//   },
//   {
//     title: "Marketplace Intelligence & Competitor Analysis",
//     desc: "Uncover growth gaps by analyzing competitor ad strategies, pricing, and keyword bidding patterns.",
//     points: [
//       "Competitor ad intelligence",
//       "Keyword bidding analysis",
//       "Pricing & positioning insights",
//     ],
//     icon: BarChart4,
//   },
//   {
//     title: "Listing & Conversion Optimization",
//     desc: "Ads drive traffic. Listings drive sales. We optimize your storefront for maximum conversion.",
//     points: [
//       "Titles & keyword mapping",
//       "A+ Content optimization",
//       "Storefront experience",
//       "Creative visuals",
//       "Product descriptions",
//     ],
//     icon: Layout,
//   },
//   {
//     title: "Performance Analytics & Attribution",
//     desc: "Every decision is backed by data. We track performance metrics that matter to revenue.",
//     points: [
//       "ACOS / TACOS",
//       "ROAS",
//       "Impression share",
//       "Conversion rates",
//       "Lifetime value signals",
//     ],
//     icon: LineChart,
//   },
// ];
// const strategicApproach = [
//   {
//     title: "Deep Marketplace Audit",
//     desc: "We audit campaigns, keyword clusters, product listings, competitor density, and sales history to identify inefficiencies and scaling opportunities.",
//     icon: SearchCheck,
//   },
//   {
//     title: "Structured Campaign Architecture",
//     desc: "We build segmented campaigns based on funnel stage, match type, product category, and profit margin to maintain control and scalability.",
//     icon: Layers,
//   },
//   {
//     title: "Smart Bidding & Budget Allocation",
//     desc: "Using AI-powered bid adjustments and profitability modeling, we reallocate budgets toward high-performing keywords and pause wasteful spends.",
//     icon: Sliders,
//   },
//   {
//     title: "Continuous Testing & Scaling",
//     desc: "Amazon is dynamic. So are we. We continuously test creatives, placements, audience segments, and bidding models to scale what works.",
//     icon: TrendingUp,
//   },
// ];
// const whyChooseAmazon = [
//   "Performance-first mindset",
//   "ROI-driven campaign frameworks",
//   "Advanced keyword intelligence",
//   "Marketplace-specific strategies",
//   "Transparent reporting dashboards",
//   "Data-backed growth decisions",
// ];
// const faqs = [
//   {
//     question: "How long does it take to see results from Amazon Ads?",
//     answer:
//       "Typically 30–60 days to optimize and stabilize campaigns. Scaling begins once performance data matures.",
//   },
//   {
//     question: "What budget is required?",
//     answer:
//       "Budgets vary based on competition and category. We recommend starting with a data-backed minimum viable spend aligned with your growth targets.",
//   },
//   {
//     question: "Do you handle international marketplaces?",
//     answer:
//       "Yes. We manage campaigns across multiple Amazon marketplaces globally.",
//   },
// ];
// const AmazonAdvertising = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };
//   return (
//     <>
//       <section
//         className="relative py-16 md:py-20 lg:py-24 text-white bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')",
//         }}
//       >
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-blue-900/80"></div>

//         <div className="relative w-full px-6 lg:px-20 xl:px-28">

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

//             {/* LEFT CONTENT */}
//             <div className="space-y-6 text-left">

//               <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
//                 Amazon Advertising Services
//               </h1>

//               <p className="text-lg md:text-xl font-semibold text-blue-100">
//                 Scale Faster. Sell Smarter. Dominate Amazon.
//               </p>

//               <p className="text-blue-100 text-base md:text-lg max-w-xl">
//                 Turn product visibility into predictable revenue with
//                 performance-driven Amazon Advertising strategies. We combine data
//                 science, creative optimization, and marketplace intelligence to
//                 help you win the Buy Box, outrank competitors, and maximize ROAS.
//               </p>

//               {/* <div className="flex flex-col sm:flex-row gap-4 pt-2">
//           <button
//             className="w-full sm:w-auto bg-white text-blue-700 px-6 py-3 rounded-full font-semibold
//             hover:bg-blue-100 hover:shadow-lg transition"
//           >
//             Speak to an Amazon Expert →
//           </button>

//           <button
//             className="w-full sm:w-auto border border-white/70 px-6 py-3 rounded-full font-semibold
//             hover:bg-white hover:text-blue-700 transition"
//           >
//             Our Amazon Services →
//           </button>
//         </div> */}


//               <div className="flex flex-col sm:flex-row gap-4 mt-2">
//                 <a
//                   href="/contact"
//                   className="bg-white text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-center"
//                 >
//                   Speak to Our Expert →
//                 </a>
//                 <a
//                   href="#services"
//                   className="border-2 border-blue-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:text-black hover:-translate-y-1 hover:shadow-xl text-center"
//                 >
//                   Our Services →
//                 </a>
//               </div>
//             </div>

//             {/* RIGHT IMAGE */}
//             <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
//               <img
//                 src={amazon}
//                 alt="Amazon Advertising Services"
//                 className="w-150 h-100 object-contain"
//               />
//             </div>

//           </div>
//         </div>
//       </section>

//       <section className="bg-gray-50 py-12 sm:py-16 md:py-20">
//         <div className="w-full px-4 sm:px-6 lg:px-20 xl:px-28">

//           <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-16">

//             {/* LEFT CONTENT */}
//             <div className="text-left space-y-5">

//               <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
//                 Why Amazon Advertising Is a Growth Engine
//               </h2>

//               <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
//                 Amazon is no longer just a marketplace — it’s a{" "}
//                 <span className="font-semibold text-gray-900">
//                   search engine for buyers with intent.
//                 </span>{" "}
//                 Every click carries commercial value.
//               </p>

//               <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
//                 But without structured campaigns, optimized listings, and smart
//                 bidding strategies, ad spend quickly turns into wasted budget.
//               </p>

//               <p className="text-gray-800 font-medium text-base sm:text-lg">
//                 That’s where{" "}
//                 <span className="text-blue-700">
//                   strategy meets performance.
//                 </span>
//               </p>

//               <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
//                 <span className="font-semibold text-gray-900">
//                   Adkryoss managed by Clink Consultancy Services Private Limited
//                 </span>{" "}
//                 helps brands unlock scalable Amazon growth by aligning advertising
//                 with conversion optimization, pricing intelligence, and advanced
//                 analytics.
//               </p>

//             </div>

//             {/* RIGHT IMAGE */}
//             <div className="flex justify-center lg:justify-end mt-6 lg:mt-0">
//               <img
//                 src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546"
//                 alt="Amazon Advertising Growth"
//                 className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-2xl shadow-xl object-cover"
//               />
//             </div>

//           </div>
//         </div>
//       </section>

//       <section className="bg-white py-12 sm:py-16 md:py-20">
//         <div className="w-full px-4 sm:px-6 lg:px-20 xl:px-28">

//           {/* Heading */}
//           <div className="mb-12 max-w-4xl">
//             <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
//               Our Amazon Advertising Solutions
//             </h2>
//             <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
//               Performance-driven Amazon advertising solutions designed to scale
//               visibility, conversions, and long-term profitability.
//             </p>
//           </div>

//           {/* Cards */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
//             {amazonServices.map((service, index) => {
//               const Icon = service.icon;
//               return (
//                 <div
//                   key={index}
//                   className="group flex flex-col justify-between
//             bg-white border border-blue-100 rounded-2xl p-6 md:p-8
//             transition-all duration-500
//             hover:bg-teal-700 hover:shadow-xl hover:-translate-y-1"
//                 >
//                   <div>
//                     <div
//                       className="w-12 h-12 rounded-full bg-gray-100
//                 flex items-center justify-center mb-5
//                 group-hover:bg-white/20 transition"
//                     >
//                       <Icon className="w-6 h-6 text-teal-700 group-hover:text-white" />
//                     </div>

//                     <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 group-hover:text-white">
//                       {service.title}
//                     </h3>

//                     <p className="text-sm text-gray-600 leading-relaxed mb-4 group-hover:text-white/90">
//                       {service.desc}
//                     </p>

//                     <ul className="space-y-2 text-sm text-gray-600 group-hover:text-white/90">
//                       {service.points.map((point, i) => (
//                         <li key={i}>• {point}</li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//         </div>
//       </section>

//       <section className="bg-blue-50 py-12 sm:py-16 md:py-20">
//         <div className="w-full px-4 sm:px-6 lg:px-20 xl:px-28">

//           {/* Heading */}
//           <div className="mb-12 max-w-4xl">
//             <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
//               Our Strategic Approach
//             </h2>
//             <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
//               A structured, data-driven framework designed to scale Amazon
//               advertising efficiently and profitably.
//             </p>
//           </div>

//           {/* Cards */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
//             {strategicApproach.map((item, index) => {
//               const Icon = item.icon;
//               return (
//                 <div
//                   key={index}
//                   className="
//               bg-white border border-blue-100 rounded-2xl
//               p-6 md:p-8
//               transition-all duration-300
//               hover:-translate-y-1 hover:shadow-lg
//             "
//                 >
//                   <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-5">
//                     <Icon className="w-6 h-6 text-blue-700" />
//                   </div>

//                   <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">
//                     {item.title}
//                   </h3>

//                   <p className="text-sm text-gray-600 leading-relaxed">
//                     {item.desc}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>

//         </div>
//       </section>

//       <section className="bg-white py-16 md:py-20">
//         <div className="w-full px-4 sm:px-6 lg:px-20 xl:px-28">

//           {/* Heading */}
//           <div className="mb-12 max-w-4xl">
//             <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               Why Choose Us for Amazon Advertising?
//             </h2>
//             <p className="text-gray-600 text-base md:text-lg">
//               A strategic, performance-led approach designed to scale your Amazon
//               revenue efficiently.
//             </p>
//           </div>

//           {/* Cards */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
//             {whyChooseAmazon.map((item, index) => (
//               <div
//                 key={index}
//                 className="
//             group flex items-start gap-4
//             bg-white rounded-2xl p-6
//             border border-gray-200
//             transition-all duration-300
//             hover:-translate-y-1 hover:shadow-lg hover:border-blue-200
//           "
//               >
//                 <CheckCircle className="w-6 h-6 text-green-500 mt-1 shrink-0 group-hover:text-blue-600" />
//                 <p className="text-gray-800 font-medium leading-relaxed">
//                   {item}
//                 </p>
//               </div>
//             ))}
//           </div>

//           {/* Closing Statement */}
//           <div className="border-l-4 border-blue-700 pl-6 max-w-4xl">
//             <p className="text-gray-700 text-base md:text-lg leading-relaxed">
//               <span className="font-semibold text-gray-900">
//                 Adkryoss managed by Clink Consultancy Services Private Limited
//               </span>{" "}
//               does not treat Amazon as just an ad channel — we treat it as a{" "}
//               <span className="font-semibold text-blue-700">
//                 full-scale revenue ecosystem.
//               </span>
//             </p>
//           </div>

//         </div>
//       </section>

//       <section className="bg-white py-16 md:py-20">
//         <div className="w-full px-4 sm:px-6 lg:px-20 xl:px-28">

//           {/* Heading */}
//           <div className="max-w-4xl mb-12">
//             <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               What Makes Our Framework Different?
//             </h2>

//             <p className="text-lg text-gray-700">
//               Most agencies optimize ads.
//             </p>

//             <p className="text-xl font-semibold text-gray-900">
//               We optimize revenue systems.
//             </p>
//           </div>

//           {/* Cards */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">

//             {[
//               {
//                 title: "Advertising Performance",
//                 desc: "Campaign-level profitability tracking and ROAS scaling.",
//                 img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
//               },
//               {
//                 title: "Listing Conversion Strategy",
//                 desc: "Optimized product listings built for maximum conversion.",
//                 img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
//               },
//               {
//                 title: "Pricing Intelligence",
//                 desc: "Dynamic pricing insights aligned with competition.",
//                 img: "https://images.unsplash.com/photo-1589758438368-0ad531db3366"
//               },
//               {
//                 title: "Inventory Planning Alignment",
//                 desc: "Advertising aligned with stock forecasting systems.",
//                 img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
//               },
//               {
//                 title: "Funnel-Based Segmentation",
//                 desc: "Audience targeting structured by buying stage.",
//                 img: "https://images.unsplash.com/photo-1552664730-d307ca884978"
//               }
//             ].map((item, index) => (
//               <div
//                 key={index}
//                 className="group bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
//               >
//                 <img
//                   src={item.img}
//                   alt={item.title}
//                   className="w-full h-40 object-fit"
//                 />

//                 <div className="p-6">
//                   <h3 className="text-lg font-semibold text-gray-900 mb-2">
//                     {item.title}
//                   </h3>
//                   <p className="text-gray-600 text-sm leading-relaxed">
//                     {item.desc}
//                   </p>
//                 </div>
//               </div>
//             ))}

//           </div>

//           <p className="text-gray-700 text-lg max-w-4xl">
//             This ensures long-term brand equity and sustained profitability.
//           </p>

//         </div>
//       </section>

//       <section className="bg-blue-50 py-16 md:py-20">
//         <div className="w-full px-4 sm:px-6 lg:px-20 xl:px-28 text-left">

//           <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-12">
//             Frequently Asked Questions
//           </h2>

//           <div className="space-y-0">

//             {faqs.map((faq, index) => (
//               <div key={index} className="border-b border-black">

//                 <button
//                   onClick={() => toggleFAQ(index)}
//                   className="w-full flex justify-between items-center py-6 text-left"
//                 >
//                   <span className="text-base sm:text-lg font-semibold text-gray-900 pr-6">
//                     {faq.question}
//                   </span>

//                   <span className="shrink-0">
//                     {openIndex === index ? (
//                       <X className="w-5 h-5 text-black" />
//                     ) : (
//                       <Plus className="w-5 h-5 text-black" />
//                     )}
//                   </span>
//                 </button>

//                 {openIndex === index && (
//                   <div className="pb-6 text-gray-700 text-sm sm:text-base leading-relaxed max-w-4xl">
//                     {faq.answer}
//                   </div>
//                 )}

//               </div>
//             ))}

//           </div>

//         </div>
//       </section>

//       <section className="bg-linear-to-r from-blue-700 to-blue-900 py-20">
//         <div className="max-w-5xl mx-auto px-6 text-center text-white">
//           <h2 className="text-white md:text-4xl font-bold mb-6">
//             Ready to Dominate Amazon?
//           </h2>
//           <p className="text-lg text-blue-100 mb-8 max-w-3xl mx-auto">
//             If you want structured growth, optimized spending, and measurable
//             revenue impact — it’s time to build your Amazon advertising engine
//             with experts who understand both performance marketing and
//             marketplace psychology.
//           </p>

//           <p className="text-white font-semibold mb-10">
//             Let’s turn your Amazon store into a scalable profit channel.
//           </p>

//           <div>
//             <button
//               className="
//               bg-white text-blue-700 font-semibold
//               px-8 py-4 rounded-full
//               hover:bg-blue-100
//               transition-all duration-300
//               hover:shadow-xl
//             "
//             >
//               Speak to an Amazon Advertising Expert →
//             </button>
//           </div>

//         </div>
//       </section>
//     </>
//   );
// };

// export default AmazonAdvertising;


import React from "react";
import amazon from "../../../assets/Amazon.jpg";
import { useState } from "react";
import {
  Megaphone,
  Radar,
  BarChart4,
  Layout,
  LineChart,
  SearchCheck,
  Layers,
  Sliders,
  TrendingUp,
  CheckCircle,
  Plus,
  X,
} from "lucide-react";

const amazonServices = [
  {
    title: "Sponsored Ads Management",
    desc: "We build structured campaign architectures focused on intent-based keyword targeting and profitability.",
    points: ["Sponsored Products", "Sponsored Brands", "Sponsored Display"],
    icon: Megaphone,
  },
  {
    title: "DSP & Programmatic Advertising",
    desc: "Expand beyond Amazon search with advanced audience targeting using Amazon DSP.",
    points: [
      "High-intent audience targeting",
      "Cross-platform retargeting",
      "Prospecting & re-engagement",
    ],
    icon: Radar,
  },
  {
    title: "Marketplace Intelligence & Competitor Analysis",
    desc: "Uncover growth gaps by analyzing competitor ad strategies, pricing, and keyword bidding patterns.",
    points: [
      "Competitor ad intelligence",
      "Keyword bidding analysis",
      "Pricing & positioning insights",
    ],
    icon: BarChart4,
  },
  {
    title: "Listing & Conversion Optimization",
    desc: "Ads drive traffic. Listings drive sales. We optimize your storefront for maximum conversion.",
    points: [
      "Titles & keyword mapping",
      "A+ Content optimization",
      "Storefront experience",
      "Creative visuals",
      "Product descriptions",
    ],
    icon: Layout,
  },
  {
    title: "Performance Analytics & Attribution",
    desc: "Every decision is backed by data. We track performance metrics that matter to revenue.",
    points: [
      "ACOS / TACOS",
      "ROAS",
      "Impression share",
      "Conversion rates",
      "Lifetime value signals",
    ],
    icon: LineChart,
  },
];
const strategicApproach = [
  {
    title: "Deep Marketplace Audit",
    desc: "We audit campaigns, keyword clusters, product listings, competitor density, and sales history to identify inefficiencies and scaling opportunities.",
    icon: SearchCheck,
  },
  {
    title: "Structured Campaign Architecture",
    desc: "We build segmented campaigns based on funnel stage, match type, product category, and profit margin to maintain control and scalability.",
    icon: Layers,
  },
  {
    title: "Smart Bidding & Budget Allocation",
    desc: "Using AI-powered bid adjustments and profitability modeling, we reallocate budgets toward high-performing keywords and pause wasteful spends.",
    icon: Sliders,
  },
  {
    title: "Continuous Testing & Scaling",
    desc: "Amazon is dynamic. So are we. We continuously test creatives, placements, audience segments, and bidding models to scale what works.",
    icon: TrendingUp,
  },
];
const whyChooseAmazon = [
  "Performance-first mindset",
  "ROI-driven campaign frameworks",
  "Advanced keyword intelligence",
  "Marketplace-specific strategies",
  "Transparent reporting dashboards",
  "Data-backed growth decisions",
];
const faqs = [
  {
    question: "How long does it take to see results from Amazon Ads?",
    answer:
      "Typically 30–60 days to optimize and stabilize campaigns. Scaling begins once performance data matures.",
  },
  {
    question: "What budget is required?",
    answer:
      "Budgets vary based on competition and category. We recommend starting with a data-backed minimum viable spend aligned with your growth targets.",
  },
  {
    question: "Do you handle international marketplaces?",
    answer:
      "Yes. We manage campaigns across multiple Amazon marketplaces globally.",
  },
];
const AmazonAdvertising = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <section
        className="bg-cover bg-center bg-no-repeat py-20 min-h-[500px] md:h-[480px] flex items-center relative text-white"
        style={{
          backgroundImage:
            "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-blue-900/85"></div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 w-full relative z-10">

          {/* LEFT CONTENT */}
          <div className="text-left text-white max-w-[600px]">

            <h2 className="text-white md:text-[48px] font-bold mb-4 leading-tight">
              Amazon Advertising Services
            </h2>

            <h3 className="text-[20px] md:text-[24px] font-semibold mb-4">
              Scale Faster. Sell Smarter. Dominate Amazon.
            </h3>

            <p className="text-[16px] md:text-[18px] text-white/90 leading-relaxed">
              Turn product visibility into predictable revenue with performance-driven
              Amazon Advertising strategies. We combine data science, creative optimization,
              and marketplace intelligence to help you win the Buy Box, outrank competitors,
              and maximize ROAS.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate("/contact")}
                className="bg-[#ff7a00] text-white px-6 py-3 rounded-full font-semibold"
              >
                Speak to Our Expert →
              </button>

              <button
                onClick={() => navigate("/contact")}
                className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold bg-transparent"
              >
                Our Services →
              </button>
            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-[400px] h-[260px] sm:h-[300px] md:h-[320px] flex items-center justify-center">
              <img
                src={amazon}
                alt="Amazon Advertising Services"
                className="max-w-full max-h-full object-contain rounded-xl shadow-lg"
              />
            </div>
          </div>

        </div>
      </section>
      <div className="h-6 bg-white"></div>

      <section className="bg-white pt-10 sm:pt-12 md:pt-16 pb-16 sm:pb-20 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="mb-12 max-w-4xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Our Amazon Advertising Solutions
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
              Performance-driven Amazon advertising solutions designed to scale
              visibility, conversions, and long-term profitability.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {amazonServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group flex flex-col justify-between
            bg-white border border-blue-100 rounded-2xl p-6 md:p-8
            transition-all duration-500
            hover:bg-teal-700 hover:shadow-xl hover:-translate-y-1"
                >
                  <div>
                    <div
                      className="w-12 h-12 rounded-full bg-gray-100
                flex items-center justify-center mb-5
                group-hover:bg-white/20 transition"
                    >
                      <Icon className="w-6 h-6 text-teal-700 group-hover:text-white" />
                    </div>

                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 group-hover:text-white">
                      {service.title}
                    </h3>

                    <p className="text-sm text-gray-600 leading-relaxed mb-4 group-hover:text-white/90">
                      {service.desc}
                    </p>

                    <ul className="space-y-2 text-sm text-gray-600 group-hover:text-white/90">
                      {service.points.map((point, i) => (
                        <li key={i}>• {point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-blue-50 pt-20 sm:pt-24 md:pt-28 pb-36 sm:pb-40 md:pb-44">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="mb-12 max-w-4xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Our Strategic Approach
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
              A structured, data-driven framework designed to scale Amazon
              advertising efficiently and profitably.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {strategicApproach.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="
              bg-white border border-blue-100 rounded-2xl
              p-6 md:p-8
              transition-all duration-300
              hover:-translate-y-1 hover:shadow-lg
            "
                >
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-blue-700" />
                  </div>

                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <div className="bg-gray-50 h-6"></div>

      <section className="bg-gray-50 pt-12 sm:pt-16 md:pt-20 pb-20 sm:pb-24 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="mb-12 max-w-4xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us for Amazon Advertising?
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              A strategic, performance-led approach designed to scale your
              Amazon revenue efficiently.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {whyChooseAmazon.map((item, index) => (
              <div
                key={index}
                className="
            group flex items-start gap-4
            bg-white rounded-2xl p-6
            border border-gray-200
            transition-all duration-300
            hover:-translate-y-1 hover:shadow-lg hover:border-blue-200
          "
              >
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 shrink-0 group-hover:text-blue-600" />
                <p className="text-gray-800 font-medium leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* Closing Statement */}
          <div className="border-l-4 border-blue-700 pl-6 max-w-4xl">
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              <span className="font-semibold text-gray-900">
                Adkryoss managed by Clink Consultancy Services Private Limited
              </span>{" "}
              does not treat Amazon as just an ad channel — we treat it as a{" "}
              <span className="font-semibold text-blue-700">
                full-scale revenue ecosystem.
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Makes Our Framework Different?
            </h2>

            <p className="text-lg text-gray-700">Most agencies optimize ads.</p>

            <p className="text-xl font-semibold text-gray-900">
              We optimize revenue systems.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Advertising Performance",
                desc: "Campaign-level profitability tracking and ROAS scaling.",
                img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
              },
              {
                title: "Listing Conversion Strategy",
                desc: "Optimized product listings built for maximum conversion.",
                img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
              },
              {
                title: "Pricing Intelligence",
                desc: "Dynamic pricing insights aligned with competition.",
                img: "https://images.unsplash.com/photo-1589758438368-0ad531db3366",
              },
              {
                title: "Inventory Planning Alignment",
                desc: "Advertising aligned with stock forecasting systems.",
                img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
              },
              {
                title: "Funnel-Based Segmentation",
                desc: "Audience targeting structured by buying stage.",
                img: "https://images.unsplash.com/photo-1552664730-d307ca884978",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-40 object-fit"
                />

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-gray-700 text-lg max-w-4xl">
            This ensures long-term brand equity and sustained profitability.
          </p>
        </div>
      </section>

      <section className="bg-blue-50 pt-20 sm:pt-24 md:pt-28 pb-32 sm:pb-36 md:pb-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-16">
            Frequently Asked Questions
          </h2>

          <div className="space-y-0">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-black">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center py-7 sm:py-8 text-left"
                >
                  <span className="text-base sm:text-lg font-semibold text-gray-900 pr-6">
                    {faq.question}
                  </span>

                  <span className="shrink-0">
                    {openIndex === index ? (
                      <X className="w-5 h-5 text-black" />
                    ) : (
                      <Plus className="w-5 h-5 text-black" />
                    )}
                  </span>
                </button>

                {openIndex === index && (
                  <div className="pb-8 text-gray-700 text-sm sm:text-base leading-relaxed max-w-4xl">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>
      <section className="bg-linear-to-r from-blue-700 to-blue-900 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center text-white">
          <h2 className="text-white md:text-4xl font-bold mb-6">
            Ready to Dominate Amazon?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-3xl mx-auto">
            If you want structured growth, optimized spending, and measurable
            revenue impact — it’s time to build your Amazon advertising engine
            with experts who understand both performance marketing and
            marketplace psychology.
          </p>

          <p className="text-white font-semibold mb-10">
            Let’s turn your Amazon store into a scalable profit channel.
          </p>

          <div>
            <button
              className="
              bg-white text-blue-700 font-semibold
              px-8 py-4 rounded-full
              hover:bg-blue-100
              transition-all duration-300
              hover:shadow-xl
            "
            >
              Speak to an Amazon Advertising Expert →
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AmazonAdvertising;