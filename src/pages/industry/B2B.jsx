import React from 'react';
import { useNavigate } from "react-router-dom";
import B2BImage from "../../assets/B2B.jpeg";
import B2BMarketingIsDifferentImage from "../../assets/B2BMarketingIsDifferent.png"
import WhyB2BBrandsChooseUsImage from "../../assets/WhyB2BBrandsChooseUs.png"

const B2B = () => {
  const navigate = useNavigate();
    return (
        <>
         






{/* <section
  className="bg-cover bg-center bg-no-repeat py-20 min-h-[500px] md:h-120 flex items-center relative text-white"
  style={{
    backgroundImage:
      "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')"
  }}
>
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 w-full relative z-10">

    
    <div className="text-left text-white">
        <h2 className="text-4xl md:text-4xl font-bold leading-tight text-white">
        B2B Digital Marketing Services
      </h2>

      <h3 className="text-2xl md:text-xl font-semibold leading-snug">
        Growth That Converts Conversations Into Contracts
      </h3>

      <p className="text-white md:text-md leading-relaxed max-w-[600px]">
        In B2B, decisions are not emotional — they are strategic, data-driven, and value-focused. Your buyers are decision-makers, procurement heads, CXOs, and business influencers who demand proof before partnership.
        <br />
        <span className='font-bold text-white'>
          Adkryoss managed by Clink Consultancy Services Private Limited
        </span> builds intelligent B2B marketing ecosystems that generate qualified leads, shorten sales cycles, and drive measurable revenue growth.
      </p>
    </div>

   
    <div className="flex justify-center md:justify-end">
      <div className="w-full max-w-[400px] h-[260px] sm:h-[300px] md:h-[320px] flex items-center justify-center">
        <img
          src={B2BImage}
          alt="Section Image"
          className="max-w-full max-h-full object-contain rounded-xl shadow-lg"
        />
      </div>
    </div>

  </div>
</section> */}




<section
  className="relative bg-cover bg-center bg-no-repeat py-24 min-h-[660px] flex items-center text-white overflow-hidden"
  style={{
    backgroundImage:
      "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')"
  }}
>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-black/80 to-indigo-950/90"></div>

  {/* Animated Glow Effects */}
  <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]"></div>
  <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-orange-500/30 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite]"></div>

  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 w-full relative z-10">

    {/* LEFT CONTENT */}
    <div className="text-left opacity-0 animate-[fadeUp_0.8s_ease-out_forwards]">

      <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
        <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
          B2B Digital Marketing Services
        </span>
      </h2>

      <h3 className="text-xl md:text-2xl font-semibold leading-snug mb-6 text-blue-100">
        Growth That Converts Conversations Into Contracts
      </h3>

      <p className="text-gray-200 text-md leading-relaxed max-w-[600px]">
        In B2B, decisions are not emotional — they are strategic, data-driven, and value-focused. Your buyers are decision-makers, procurement heads, CXOs, and business influencers who demand proof before partnership.
        <br /><br />
        <span className="font-bold text-white">
          Adkryoss managed by Clink Consultancy Services Private Limited
        </span>{" "}
        builds intelligent B2B marketing ecosystems that generate qualified leads, shorten sales cycles, and drive measurable revenue growth.
      </p>

    </div>

    {/* RIGHT IMAGE */}
    <div className="flex justify-center md:justify-end opacity-0 animate-[fadeUp_1.2s_ease-out_forwards]">

      <div className="relative group w-full max-w-[420px] h-[260px] sm:h-[300px] md:h-[340px] flex items-center justify-center">

        {/* Image Glow */}
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-500"></div>

        <img
          src={B2BImage}
          alt="B2B Digital Marketing Services"
          className="relative max-w-full max-h-full object-contain rounded-xl shadow-2xl 
                     transform group-hover:-translate-y-2 transition duration-500"
        />

      </div>

    </div>

  </div>

  {/* Custom Animations */}
  <style>
    {`
      @keyframes fadeUp {
        from {
          opacity: 0;
          transform: translateY(40px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes float {
        0%, 100% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(30px);
        }
      }
    `}
  </style>

</section>







<section className="bg-gray-50 py-16 sm:py-20 px-4 sm:px-6">
  <div className="max-w-6xl mx-auto">

    {/* TOP CENTER CONTENT */}
    <div className="text-center max-w-4xl mx-auto mb-14 space-y-6">

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
        B2B Marketing Is Different. Your Strategy Should Be Too.
      </h2>

      <p className="text-gray-800 text-lg sm:text-xl font-medium">
        B2B marketing is not about impressions — it’s about influence.
      </p>

      <p className="text-gray-800 text-lg sm:text-xl font-medium">
        It’s not about traffic — it’s about pipeline.
      </p>

      <p className="text-gray-800 text-lg sm:text-xl font-medium">
        It’s not about followers — it’s about long-term business relationships.
      </p>

      <p className="text-gray-700 text-base sm:text-lg leading-relaxed pt-4">
        At Adkryoss managed by Clink Consultancy Services Private Limited, we design performance-led B2B frameworks powered by:
      </p>

    </div>

    {/* BOTTOM GRID */}
    <div className="grid md:grid-cols-2 gap-12 items-center">

      {/* LEFT SIDE POINTS */}
      <div>
        <ul className="space-y-5 text-gray-700 text-base sm:text-lg">

          {[
            "Account-Based Marketing (ABM)",
            "Intent-driven targeting",
            "Data-backed SEO",
            "LinkedIn & Performance Campaigns",
            "Conversion-centric content",
            "Marketing automation workflows",
            "CRM-integrated lead nurturing"
          ].map((point, index) => (
            <li key={index} className="flex items-start gap-3">
              <svg
                className="w-6 h-6 text-blue-700 mt-1 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>{point}</span>
            </li>
          ))}

        </ul>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="flex justify-center">
        <img
          src={B2BMarketingIsDifferentImage}
             alt="B2B Marketing"
          className="rounded-2xl shadow-lg w-full max-w-md"
        />
      </div>

    </div>

    {/* CLOSING LINE */}
    <div className="text-center mt-16 max-w-4xl mx-auto">
      <p className="text-gray-900 text-base sm:text-lg leading-relaxed font-medium">
        We align marketing with sales to ensure every campaign contributes to revenue — not just visibility.
      </p>
    </div>

  </div>
</section>



{/* <section className="bg-white py-16 sm:py-20 px-4 sm:px-6">
  <div className="max-w-6xl mx-auto">

    
    <div className="text-center mb-14">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
        Our B2B Digital Marketing Framework
      </h2>
    </div>

    
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

    
      <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
        <svg className="w-10 h-10 text-blue-700 mb-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8v4l3 3" />
        </svg>
        <h3 className="font-semibold text-gray-900 mb-3">
          Deep Market & Buyer Intelligence
        </h3>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          We identify high-value accounts, analyze industry gaps, map buyer personas, and understand decision-making journeys across complex sales funnels.
        </p>
      </div>

      <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
        <svg className="w-10 h-10 text-blue-700 mb-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M4 20V10M10 20V4M16 20v-6M22 20V14" />
        </svg>
        <h3 className="font-semibold text-gray-900 mb-3">
          Precision Targeting & Channel Strategy
        </h3>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          From LinkedIn ads to search intent campaigns, we choose platforms based on where your decision-makers research and engage.
        </p>
      </div>

    
      <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
        <svg className="w-10 h-10 text-blue-700 mb-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 20h9" />
          <path d="M12 4h9" />
          <path d="M4 9h16" />
          <path d="M4 15h16" />
        </svg>
        <h3 className="font-semibold text-gray-900 mb-3">
          High-Authority Content & Thought Leadership
        </h3>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          Whitepapers, case studies, landing pages, solution pages, blogs, and LinkedIn authority content — designed to build credibility and trust.
        </p>
      </div>

     
      <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 ml-60 w-80">
        <svg className="w-10 h-10 text-blue-700 mb-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M5 12l5 5L20 7" />
        </svg>
        <h3 className="font-semibold text-gray-900 mb-3">
          Multi-Touch Lead Nurturing
        </h3>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          Email automation, retargeting campaigns, CRM workflows, and performance analytics ensure prospects move from awareness to conversion.
        </p>
      </div>

     
      <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 ml-60 w-80 ">
        <svg className="w-10 h-10 text-blue-700 mb-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M3 3h18v18H3z" />
          <path d="M7 13l3 3 7-7" />
        </svg>
        <h3 className="font-semibold text-gray-900 mb-3">
          Revenue-Driven Optimization
        </h3>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          We continuously optimize based on CPL, CAC, pipeline value, and ROI — not vanity metrics.
        </p>
      </div>

    </div>

  </div>
</section> */}


<section className="bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 overflow-hidden">
  <div className="max-w-6xl mx-auto">

    {/* HEADER */}
    <div className="text-center mb-10 sm:mb-14">
      <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-900">
        Our B2B Digital Marketing Framework
      </h2>
    </div>

    {/* FRAMEWORK GRID */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

      {/* CARD */}
      <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-700 mb-4 sm:mb-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8v4l3 3" />
        </svg>
        <h3 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">
          Deep Market & Buyer Intelligence
        </h3>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          We identify high-value accounts, analyze industry gaps, map buyer personas, and understand decision-making journeys across complex sales funnels.
        </p>
      </div>

      {/* CARD */}
      <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-700 mb-4 sm:mb-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M4 20V10M10 20V4M16 20v-6M22 20V14" />
        </svg>
        <h3 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">
          Precision Targeting & Channel Strategy
        </h3>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          From LinkedIn ads to search intent campaigns, we choose platforms based on where your decision-makers research and engage.
        </p>
      </div>

      {/* CARD */}
      <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-700 mb-4 sm:mb-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 20h9" />
          <path d="M12 4h9" />
          <path d="M4 9h16" />
          <path d="M4 15h16" />
        </svg>
        <h3 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">
          High-Authority Content & Thought Leadership
        </h3>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          Whitepapers, case studies, landing pages, solution pages, blogs, and LinkedIn authority content — designed to build credibility and trust.
        </p>
      </div>

      {/* CARD */}
      <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-700 mb-4 sm:mb-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M5 12l5 5L20 7" />
        </svg>
        <h3 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">
          Multi-Touch Lead Nurturing
        </h3>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          Email automation, retargeting campaigns, CRM workflows, and performance analytics ensure prospects move from awareness to conversion.
        </p>
      </div>

      {/* CARD */}
      <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-700 mb-4 sm:mb-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M3 3h18v18H3z" />
          <path d="M7 13l3 3 7-7" />
        </svg>
        <h3 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">
          Revenue-Driven Optimization
        </h3>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          We continuously optimize based on CPL, CAC, pipeline value, and ROI — not vanity metrics.
        </p>
      </div>

    </div>
  </div>
</section>


<section className="bg-gray-50 py-16 sm:py-20 px-4 sm:px-6">
  <div className="max-w-6xl mx-auto">

    {/* HEADER */}
    <div className="text-center mb-14">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
        Our Core B2B Digital Marketing Services
      </h2>
    </div>

    {/* SERVICES GRID */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* SEO */}
      <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300">
        <svg className="w-10 h-10 text-blue-700 mb-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.3-4.3" />
        </svg>
        <h3 className="font-semibold text-gray-900 mb-3">
          B2B SEO & Search Visibility
        </h3>
        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
          We help you rank for high-intent commercial and solution-based keywords that decision-makers actively search. From technical SEO to content clusters and industry authority building — we focus on long-term organic growth.
        </p>
      </div>

      {/* ABM */}
      <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300">
        <svg className="w-10 h-10 text-blue-700 mb-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 12c2.7 0 5-2.3 5-5S14.7 2 12 2 7 4.3 7 7s2.3 5 5 5z" />
          <path d="M2 22c0-4 4-7 10-7s10 3 10 7" />
        </svg>
        <h3 className="font-semibold text-gray-900 mb-3">
          Account-Based Marketing (ABM)
        </h3>
        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
          Hyper-targeted campaigns crafted for key accounts using personalized messaging, intent signals, and multi-channel outreach.
        </p>
      </div>

      {/* LinkedIn Ads */}
      <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300">
        <svg className="w-10 h-10 text-blue-700 mb-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="2" />
          <path d="M8 11v5M8 8v.01M12 16v-3a2 2 0 1 1 4 0v3" />
        </svg>
        <h3 className="font-semibold text-gray-900 mb-3">
          LinkedIn & B2B Performance Ads
        </h3>
        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
          Campaigns built specifically for B2B lead generation using advanced targeting filters like job roles, industries, company size, and decision-maker levels.
        </p>
      </div>

      {/* Content Marketing */}
      <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300">
        <svg className="w-10 h-10 text-blue-700 mb-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M4 4h16v16H4z" />
          <path d="M8 8h8M8 12h6M8 16h4" />
        </svg>
        <h3 className="font-semibold text-gray-900 mb-3">
          B2B Content Marketing
        </h3>
        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
          Strategic content that educates, nurtures, and converts — including case studies, industry reports, thought-leadership articles, and conversion-focused landing pages.
        </p>
      </div>

      {/* Automation */}
      <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300">
        <svg className="w-10 h-10 text-blue-700 mb-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 6v6l4 2" />
          <circle cx="12" cy="12" r="10" />
        </svg>
        <h3 className="font-semibold text-gray-900 mb-3">
          Marketing Automation & CRM Integration
        </h3>
        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
          We integrate tools that align marketing with sales pipelines, automate follow-ups, and provide transparent reporting dashboards.
        </p>
      </div>

      {/* CRO */}
      <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300">
        <svg className="w-10 h-10 text-blue-700 mb-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M3 17l6-6 4 4 8-8" />
          <path d="M14 7h7v7" />
        </svg>
        <h3 className="font-semibold text-gray-900 mb-3">
          Conversion Rate Optimization (CRO)
        </h3>
        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
          Landing page audits, A/B testing, CTA optimization, UX refinement, and funnel improvements to increase lead-to-opportunity ratios.
        </p>
      </div>

    </div>

  </div>
</section>



<section className="bg-white py-16 sm:py-20 px-4 sm:px-6">
  <div className="max-w-6xl mx-auto">

    {/* HEADER */}
    <div className="text-center mb-14">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
        Industries We Empower in B2B
      </h2>
    </div>

    {/* INDUSTRY GRID */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* SaaS */}
      <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 text-center">
        <svg className="w-10 h-10 text-blue-700 mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="3" y="4" width="18" height="12" rx="2" />
          <path d="M8 20h8" />
        </svg>
        <h3 className="font-semibold text-gray-900">
          SaaS & Technology Companies
        </h3>
      </div>

      {/* IT Consulting */}
      <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 text-center">
        <svg className="w-10 h-10 text-blue-700 mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M9 17v-6a3 3 0 0 1 6 0v6" />
          <rect x="4" y="4" width="16" height="16" rx="2" />
        </svg>
        <h3 className="font-semibold text-gray-900">
          IT & Consulting Firms
        </h3>
      </div>

      {/* Manufacturing */}
      <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 text-center">
        <svg className="w-10 h-10 text-blue-700 mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M3 21h18" />
          <path d="M5 21V9l7-4 7 4v12" />
        </svg>
        <h3 className="font-semibold text-gray-900">
          Manufacturing & Industrial Businesses
        </h3>
      </div>

      {/* Healthcare */}
      <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 text-center">
        <svg className="w-10 h-10 text-blue-700 mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 21s-6-4.35-9-8.5S6 3 12 8c6-5 9 1 9 4.5S12 21 12 21z" />
        </svg>
        <h3 className="font-semibold text-gray-900">
          Healthcare & Medical Enterprises
        </h3>
      </div>

      {/* Education */}
      <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 text-center">
        <svg className="w-10 h-10 text-blue-700 mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 3l9 4-9 4-9-4 9-4z" />
          <path d="M3 10l9 4 9-4" />
          <path d="M3 17l9 4 9-4" />
        </svg>
        <h3 className="font-semibold text-gray-900">
          Education & EdTech Platforms
        </h3>
      </div>

      {/* Finance */}
      <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 text-center">
        <svg className="w-10 h-10 text-blue-700 mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8v8M8 12h8" />
        </svg>
        <h3 className="font-semibold text-gray-900">
          Financial & Professional Services
        </h3>
      </div>

    </div>

    {/* BRAND STATEMENT */}
    <div className="mt-16 text-center max-w-3xl mx-auto">
      <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
        <span className="font-semibold text-gray-900">
          Adkryoss managed by Clink Consultancy Services Private Limited
        </span> creates customized B2B strategies tailored to each industry’s buying behavior and competitive landscape.
      </p>
    </div>

  </div>
</section>




<section className="bg-gray-50 py-16 sm:py-20 px-4 sm:px-6">
  <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

    {/* LEFT CONTENT */}
    <div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8">
        Why B2B Brands Choose Us
      </h2>

      <div className="space-y-6">

        <div className="flex items-start gap-4">
          <svg className="w-6 h-6 text-blue-700 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M3 17l6-6 4 4 8-8" />
            <path d="M14 7h7v7" />
          </svg>
          <p className="text-gray-700">Data-first strategy, not guesswork</p>
        </div>

        <div className="flex items-start gap-4">
          <svg className="w-6 h-6 text-blue-700 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 8v8M8 12h8" />
          </svg>
          <p className="text-gray-700">Revenue-focused campaigns</p>
        </div>

        <div className="flex items-start gap-4">
          <svg className="w-6 h-6 text-blue-700 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M8 17l4 4 4-4M8 7l4-4 4 4" />
          </svg>
          <p className="text-gray-700">Integrated marketing & sales alignment</p>
        </div>

        <div className="flex items-start gap-4">
          <svg className="w-6 h-6 text-blue-700 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M4 20V10M10 20V4M16 20v-6M22 20V14" />
          </svg>
          <p className="text-gray-700">Advanced analytics & reporting</p>
        </div>

        <div className="flex items-start gap-4">
          <svg className="w-6 h-6 text-blue-700 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M3 3h18v18H3z" />
            <path d="M7 13l3 3 7-7" />
          </svg>
          <p className="text-gray-700">Scalable multi-channel growth framework</p>
        </div>

        <div className="flex items-start gap-4">
          <svg className="w-6 h-6 text-blue-700 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />
          </svg>
          <p className="text-gray-700">Long-term authority building approach</p>
        </div>

      </div>

      {/* Closing Statement */}
      <div className="mt-10">
        <p className="text-lg font-semibold text-gray-900">
          We don’t just generate leads — we build predictable revenue systems.
        </p>
      </div>
    </div>

    {/* RIGHT IMAGE */}
    <div className="relative">
      <img 
        src={WhyB2BBrandsChooseUsImage}
        alt="B2B Revenue Growth Strategy" 
        className="rounded-2xl shadow-lg w-full object-cover"
      />
    </div>

  </div>
</section>



{/* <section className="bg-white py-16 sm:py-20 px-4 sm:px-6">
  <div className="max-w-6xl mx-auto">

    
    <div className="text-center mb-14">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
        Our Technology-Driven Advantage
      </h2>
      <p className="text-gray-600 mt-4 text-base sm:text-lg">
        We leverage:
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      
      <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
        <svg className="w-10 h-10 text-blue-700 mb-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 2v4M12 18v4M4 12H2M22 12h-2M5 5l-1.5-1.5M20.5 20.5L19 19M5 19l-1.5 1.5M20.5 3.5L19 5" />
          <circle cx="12" cy="12" r="4" />
        </svg>
        <h3 className="font-semibold text-gray-900">
          AI-Powered Keyword & Competitor Intelligence
        </h3>
      </div>

      <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
        <svg className="w-10 h-10 text-blue-700 mb-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 3" />
        </svg>
        <h3 className="font-semibold text-gray-900">
          Intent Data Platforms
        </h3>
      </div>

      
      <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
        <svg className="w-10 h-10 text-blue-700 mb-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M7 8h10M7 12h6" />
        </svg>
        <h3 className="font-semibold text-gray-900">
          CRM-Based Performance Tracking
        </h3>
      </div>

     
      <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 ml-50 w-80">
        <svg className="w-10 h-10 text-blue-700 mb-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 6v6l4 2" />
          <circle cx="12" cy="12" r="10" />
        </svg>
        <h3 className="font-semibold text-gray-900">
          Automation-Driven Nurturing Systems
        </h3>
      </div>

      <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 ml-50 w-80">
        <svg className="w-10 h-10 text-blue-700 mb-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M4 20V10M10 20V4M16 20v-6M22 20V14" />
        </svg>
        <h3 className="font-semibold text-gray-900">
          Real-Time Campaign Dashboards
        </h3>
      </div>

    </div>

   
    <div className="mt-16 text-center max-w-4xl mx-auto">
      <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
        Modern B2B marketing requires precision, speed, and adaptability. Our approach ensures your brand stays ahead of evolving industry trends and digital transformation shifts.
      </p>
    </div>

  </div>
</section> */}



<section className="bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 overflow-hidden">
  <div className="max-w-6xl mx-auto">

    {/* HEADER */}
    <div className="text-center mb-10 sm:mb-14">
      <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-900">
        Our Technology-Driven Advantage
      </h2>
      <p className="text-gray-600 mt-3 sm:mt-4 text-sm sm:text-base md:text-lg">
        We leverage:
      </p>
    </div>

    {/* TECHNOLOGY GRID */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
    

      {/* CARD */}
      <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-700 mb-4 sm:mb-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 2v4M12 18v4M4 12H2M22 12h-2M5 5l-1.5-1.5M20.5 20.5L19 19M5 19l-1.5 1.5M20.5 3.5L19 5" />
          <circle cx="12" cy="12" r="4" />
        </svg>
        <h3 className="font-semibold text-gray-900 text-base sm:text-lg">
          AI-Powered Keyword & Competitor Intelligence
        </h3>
      </div>

      {/* CARD */}
      <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-700 mb-4 sm:mb-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 3" />
        </svg>
        <h3 className="font-semibold text-gray-900 text-base sm:text-lg">
          Intent Data Platforms
        </h3>
      </div>

      {/* CARD */}
      <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-700 mb-4 sm:mb-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M7 8h10M7 12h6" />
        </svg>
        <h3 className="font-semibold text-gray-900 text-base sm:text-lg">
          CRM-Based Performance Tracking
        </h3>
      </div>

      {/* CARD */}
      <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300  ">
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-700 mb-4 sm:mb-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 6v6l4 2" />
          <circle cx="12" cy="12" r="10" />
        </svg>
        <h3 className="font-semibold text-gray-900 text-base sm:text-lg">
          Automation-Driven Nurturing Systems
        </h3>
      </div>

      {/* CARD */}
      <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 ">
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-700 mb-4 sm:mb-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M4 20V10M10 20V4M16 20v-6M22 20V14" />
        </svg>
        <h3 className="font-semibold text-gray-900 text-base sm:text-lg">
          Real-Time Campaign Dashboards
        </h3>
      </div>

    </div>

    {/* CLOSING PARAGRAPH */}
    <div className="mt-12 sm:mt-16 text-center max-w-3xl mx-auto">
      <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
        Modern B2B marketing requires precision, speed, and adaptability. Our approach ensures your brand stays ahead of evolving industry trends and digital transformation shifts.
      </p>
    </div>

  </div>
</section>


<section className="bg-gradient-to-r from-blue-900 to-blue-700 py-20 px-4 sm:px-6 text-white">
  <div className="max-w-4xl mx-auto text-center">

    {/* HEADING */}
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-8 text-white">
      Ready to Accelerate Your B2B Growth?
    </h2>

    {/* STRATEGIC LINES */}
    <div className="space-y-4 text-lg sm:text-xl text-white mb-10">
      <p className='text-white'>Complex sales require smarter marketing.</p>
      <p className='text-white'>High-value deals demand strategic visibility.</p>
      <p className='text-white'>Sustainable growth needs performance architecture.</p>
    </div>

    {/* BRAND STATEMENT */}
    <p className="text-base sm:text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed mb-12">
      Partner with <span className="font-semibold text-white">
        Adkryoss managed by Clink Consultancy Services Private Limited
      </span> to transform your B2B marketing into a measurable revenue engine.
    </p>

    {/* CTA BUTTON */}
    <div>
      <button
      onClick={() => navigate("/contact?service=b2b")}
      className="bg-white text-blue-800 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-blue-100 transition duration-300">
        Let’s Build Your Growth Strategy
      </button>
    </div>

    {/* FINAL LINE */}
    <div className="mt-10">
      <p className="text-blue-200 text-sm sm:text-base">
        Let’s build your next growth milestone.
      </p>
    </div>

  </div>
</section>

        
        </>
    );
};

export default B2B;
