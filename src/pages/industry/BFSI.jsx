import React from 'react';
import { useNavigate } from "react-router-dom";
import BFSIImage from "../../assets/BFSI.jpeg";
import WhyChooseUsforBFSIMarketingImage from "../../assets/WhyChooseUsforBFSIMarketing.png"
import ConversionRateOptimizationImage from "../../assets/ConversionRateOptimization.png"
import SocialMediaBrandAuthorityImage from "../../assets/SocialMediaBrandAuthority.png"
import ContentMarketingThatBuildsTrustImage from "../../assets/ContentMarketingThatBuildsTrust.png"
import SEOforBFSIBrandsImage from "../../assets/SEOforBFSIBrands.png"

const BFSI = () => {
  const navigate = useNavigate();
    return (
        <>
       



{/* <section
  className="relative flex items-center min-h-[70vh] bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')",
  }}
>
  <div className="relative z-10 container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4">

   
      <div className="text-left lg:text-left text-white space-y-6 mx-auto lg:mx-0">

      <h2 className="text-4xl md:text-4xl font-bold leading-tight text-white">
        BFSI Digital Marketing Services
      </h2>

      <h3 className="text-2xl md:text-xl font-semibold leading-snug">
        Accelerate Growth. Strengthen Trust. Lead the Digital-First Financial Era.
      </h3>

      <p className="text-white md:text-md leading-relaxed max-w-[600px]">
        The BFSI sector is evolving faster than ever. Customers expect seamless digital journeys, instant responses, data security, and personalized financial experiences.
        <br />
        <span className='text-white font-bold'>
          Adkryoss managed by Clink Consultancy Services Private Limited
        </span> helps banks, NBFCs, fintech brands, insurance providers, and investment firms scale with performance-driven, compliance-ready digital marketing strategies.
        <br />
        We don’t just generate traffic — we build credibility, qualified leads, and long-term customer value.
      </p>

    </div>

  


     <div className="flex justify-center lg:justify-end mt-10 lg:mt-0">
        <div className="w-full max-w-[400px] h-[260px] sm:h-[300px] md:h-[320px] flex items-center justify-center">
        <img
          src={BFSIImage}
          alt="Section Image"
          className="max-w-full max-h-full object-contain rounded-xl shadow-lg"
        />
      </div>
    </div>

  </div>
</section> */}



<section
  className="bg-cover bg-center bg-no-repeat py-20 min-h-[500px] md:h-120 flex items-center relative text-white"
  style={{
    backgroundImage:
      "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')"
  }}
>
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 w-full relative z-10">

    {/* LEFT CONTENT */}
    <div className="text-left text-white">
        <h2 className="text-4xl md:text-4xl font-bold leading-tight text-white">
        BFSI Digital Marketing Services
      </h2>

      <h3 className="text-2xl md:text-xl font-semibold leading-snug">
        Accelerate Growth. Strengthen Trust. Lead the Digital-First Financial Era.
      </h3>

      <p className="text-white md:text-md leading-relaxed max-w-[600px]">
        The BFSI sector is evolving faster than ever. Customers expect seamless digital journeys, instant responses, data security, and personalized financial experiences.
        <br />
        <span className='text-white font-bold'>
          Adkryoss managed by Clink Consultancy Services Private Limited
        </span> helps banks, NBFCs, fintech brands, insurance providers, and investment firms scale with performance-driven, compliance-ready digital marketing strategies.
        <br />
        We don’t just generate traffic — we build credibility, qualified leads, and long-term customer value.
      </p>
    </div>

    {/* RIGHT IMAGE */}
    <div className="flex justify-center md:justify-end">
       <div className="w-full max-w-[400px] h-[260px] sm:h-[300px] md:h-[320px] flex items-center justify-center">
        <img
          src={BFSIImage}
          alt="Section Image"
          className="max-w-full max-h-full object-contain rounded-xl shadow-lg"
        />
      </div>
    </div>

  </div>
</section>

        

<section className="bg-gradient-to-r from-gray-50 to-blue-50 py-20 px-6">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT CONTENT */}
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        Why BFSI Needs Specialized Digital Marketing
      </h2>

      <p className="text-gray-600 leading-relaxed mb-6">
        Financial services marketing is not like any other industry. It demands:
      </p>

      <ul className="space-y-3 mb-6">
        {[
          "High-trust communication",
          "Regulatory compliance awareness",
          "Data-driven personalization",
          "Precision targeting",
          "Long conversion journey nurturing"
        ].map((item, index) => (
          <li key={index} className="flex items-start text-gray-700">
            <span className="text-blue-600 font-bold mr-3">✓</span>
            {item}
          </li>
        ))}
      </ul>

      <p className="text-gray-700 leading-relaxed">
        At <span className="font-semibold text-blue-700">
          Adkryoss managed by Clink Consultancy Services Private Limited
        </span>, we design digital ecosystems tailored specifically for BFSI brands — 
        combining performance marketing, automation, analytics, and brand storytelling 
        into one measurable growth engine.
      </p>
    </div>

    {/* RIGHT IMAGE */}
    <div>
      <img
        src="https://images.unsplash.com/photo-1554224155-6726b3ff858f"
        alt="BFSI Digital Marketing Strategy"
        className="rounded-2xl shadow-xl w-full object-cover"
      />
    </div>

  </div>
</section>


<section className="bg-gray-50 py-20 px-6 md:px-20">
  <div className="max-w-7xl mx-auto">

    {/* SECTION HEADING */}
    <div className="text-center mb-14">
      <h2 className="text-3xl md:text-4xl font-bold text-[#0a2540]">
        Our BFSI Digital Marketing Solutions
      </h2>
      <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
        Performance Marketing for Financial Lead Generation
      </p>
    </div>

    {/* FINANCIAL PRODUCTS GRID */}
    <div className="mb-16">
      <h3 className="text-xl font-semibold text-[#0a2540] mb-6 text-center">
        We Build ROI-Focused Campaigns For:
      </h3>

      {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {[
          "Home Loans",
          "Personal Loans",
          "Credit Cards",
          "Insurance Policies",
          "Investment Products",
          "Mutual Funds",
          "Fintech Apps",
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition"
          >
            <p className="font-medium text-gray-700">{item}</p>
          </div>
        ))}
      </div> */}



<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
  {[
    "Home Loans",
    "Personal Loans",
    "Credit Cards",
    "Insurance Policies",
    "Investment Products",
    "Mutual Funds",
    "Fintech Apps",
  ].map((item, index) => (
    <div
      key={index}
      className="group relative bg-white rounded-xl p-8 
                 shadow-md hover:shadow-xl
                 transition-all duration-500
                 overflow-hidden"
    >

      {/* LEFT BORDER (Normal State) */}
      <div className="absolute left-0 top-0 h-full w-1 
                      bg-gradient-to-b from-blue-600 to-orange-500"></div>

      {/* SLIDING BOTTOM BORDER (Hover) */}
      <div className="absolute bottom-0 left-0 h-1 w-full 
                      bg-blue-600
                      scale-x-0 group-hover:scale-x-100
                      origin-left
                      transition-transform duration-500"></div>

      <p className="relative font-semibold text-gray-700 text-center">
        {item}
      </p>

    </div>
  ))}
</div>


    </div>

    {/* OUR APPROACH */}
    <div className="mb-16">
      <h3 className="text-xl font-semibold text-[#0a2540] mb-6 text-center">
        Our Strategic Approach Includes:
      </h3>

      {/* <div className="grid md:grid-cols-2 gap-6">
        {[
          "Advanced audience segmentation",
          "Funnel-based campaign structuring",
          "AI-driven bidding strategies",
          "Landing page optimization",
          "Conversion rate optimization (CRO)",
          "Real-time campaign tracking",
        ].map((point, index) => (
          <div
            key={index}
            className="flex items-start bg-white rounded-xl p-5 shadow-sm"
          >
            <span className="text-blue-600 font-bold mr-3">✓</span>
            <p className="text-gray-700">{point}</p>
          </div>
        ))}
      </div> */}


<div className="grid md:grid-cols-2 gap-8">
  {[
    "Advanced audience segmentation",
    "Funnel-based campaign structuring",
    "AI-driven bidding strategies",
    "Landing page optimization",
    "Conversion rate optimization (CRO)",
    "Real-time campaign tracking",
  ].map((point, index) => (
    <div
      key={index}
      className="group relative flex items-start 
                 bg-white rounded-xl p-6 
                 shadow-md overflow-hidden
                 transition-all duration-500"
    >

      {/* Sliding Blue Background */}
      <div className="absolute inset-0 
                      bg-gradient-to-r from-transparent via-blue-100 to-transparent
                      translate-x-[-100%] 
                      group-hover:translate-x-[100%]
                      transition-transform duration-700 ease-out "></div>


       <div className="absolute bottom-0 left-0 h-1 w-full 
                      bg-blue-600
                      scale-x-0 group-hover:scale-x-100
                      origin-left
                      transition-transform duration-500"></div>               

      <span className="relative text-blue-600 font-bold mr-4 text-lg">
        ✓
      </span>

      <p className="relative text-gray-700">
        {point}
      </p>

    </div>
  ))}
</div>



    </div>

    {/* STRONG STATEMENT */}
    <div className="bg-[#0a2540] text-white text-center py-6 rounded-2xl shadow-lg">
      <p className="text-lg font-medium text-white">
        Every campaign is optimized for quality leads — not just clicks.
      </p>
    </div>

  </div>
</section>









<section className="bg-white py-20 px-6">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT IMAGE */}
    <div>
      <img
        src={SEOforBFSIBrandsImage}
        alt="SEO for BFSI Brands"
        className="rounded-2xl shadow-xl w-full object-cover"
      />
    </div>

    {/* RIGHT CONTENT */}
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        SEO for BFSI Brands
      </h2>

      <p className="text-gray-600 leading-relaxed mb-6">
        Search visibility is critical in finance. Customers research extensively 
        before making decisions.
      </p>

      <p className="text-gray-700 mb-4 font-medium">
        Our BFSI SEO strategy focuses on:
      </p>

      <ul className="space-y-3 mb-6">
        {[
          "High-intent keyword targeting",
          "Authority-driven content marketing",
          "E-E-A-T optimization (Experience, Expertise, Authority, Trust)",
          "Technical SEO for secure and fast websites",
          "Structured data for financial products",
          "Local SEO for branch-based businesses"
        ].map((item, index) => (
          <li key={index} className="flex items-start text-gray-700">
            <span className="text-blue-600 font-bold mr-3">✓</span>
            {item}
          </li>
        ))}
      </ul>

      <p className="text-gray-800 leading-relaxed">
        At <span className="font-semibold text-blue-700">
          Adkryoss managed by Clink Consultancy Services Private Limited
        </span>, we ensure your brand ranks not just higher — but smarter.
      </p>
    </div>

  </div>
</section>


<section className="bg-gray-50 py-20 px-6">
  <div className="max-w-6xl mx-auto">

    {/* SECTION HEADING */}
    <div className="text-center mb-14">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Content Marketing That Builds Trust
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto">
        Financial decisions require confidence.
      </p>
    </div>

    {/* CONTENT + IMAGE */}
    <div className="grid md:grid-cols-2 gap-12 items-center mb-12">

      {/* LEFT – CONTENT TYPES */}
      <div className="grid sm:grid-cols-2 gap-6">
        {[
          "Educational blogs",
          "Explainer guides",
          "Financial calculators content",
          "Case studies",
          "Whitepapers",
          "Investor-focused content",
          "Email nurture sequences"
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
          >
            <p className="font-medium text-gray-800">{item}</p>
          </div>
        ))}
      </div>

      {/* RIGHT – IMAGE */}
      <div>
        <img
          src={ContentMarketingThatBuildsTrustImage}
          alt="Financial Content Marketing"
          className="rounded-2xl shadow-xl w-full object-cover"
        />
      </div>

    </div>

    {/* BOTTOM PARAGRAPH */}
    <div className="text-center max-w-4xl mx-auto">
      <p className="text-gray-700 text-lg leading-relaxed">
        Our content framework focuses on 
        <span className="font-semibold text-blue-700"> clarity</span>, 
        <span className="font-semibold text-blue-700"> compliance</span>, and 
        <span className="font-semibold text-blue-700"> conversion</span>.
      </p>
    </div>

  </div>
</section>

<section className="bg-gradient-to-r from-blue-50 to-white py-20 px-6">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT CONTENT */}
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        Social Media & Brand Authority
      </h2>

      <p className="text-gray-600 leading-relaxed mb-6">
        BFSI brands need credibility and transparency on social platforms.
      </p>

      <p className="text-gray-800 font-medium mb-4">
        We help you:
      </p>

      <ul className="space-y-3 mb-6">
        {[
          "Build thought leadership",
          "Run performance ads on Meta, LinkedIn & Google",
          "Create fintech-focused content campaigns",
          "Launch awareness and lead gen campaigns",
          "Execute reputation management strategies"
        ].map((item, index) => (
          <li key={index} className="flex items-start text-gray-700">
            <span className="text-blue-600 font-bold mr-3">✓</span>
            {item}
          </li>
        ))}
      </ul>

      <p className="text-lg font-semibold text-blue-700">
        Trust-building storytelling meets performance marketing.
      </p>
    </div>

    {/* RIGHT SIDE – SVG VISUAL */}
    <div className="relative flex justify-center items-center">

     

        {/* Center Circle */}
        <img src={SocialMediaBrandAuthorityImage} alt="" />

      

    </div>

  </div>
</section>


<section className="bg-white py-20 px-6">
  <div className="max-w-6xl mx-auto">

    {/* TOP CONTENT */}
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        Marketing Automation & Lead Nurturing
      </h2>

      <p className="text-gray-600 leading-relaxed mb-6">
        The BFSI sales cycle is long. Strategic automation ensures prospects 
        are nurtured with the right message at the right time.
      </p>

      <p className="text-gray-800 leading-relaxed">
        At <span className="font-semibold text-blue-700">
          Adkryoss managed by Clink Consultancy Services Private Limited
        </span>, we turn cold leads into loyal customers through strategic automation.
      </p>
    </div>

    {/* AUTOMATION CARDS */}
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
      {[
        {
          title: "CRM Integration",
          icon: (
            <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h10" />
            </svg>
          )
        },
        {
          title: "Email Automation Funnels",
          icon: (
            <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l9 6 9-6M21 8v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8" />
            </svg>
          )
        },
        {
          title: "WhatsApp Marketing Flows",
          icon: (
            <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 12a9 9 0 11-4-7.5L21 3l-1.5 4A8.96 8.96 0 0121 12z" />
            </svg>
          )
        },
        {
          title: "AI-Powered Chatbots",
          icon: (
            <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6M9 16h4M4 6h16v12H4z" />
            </svg>
          )
        },
        {
          title: "Behavioral Retargeting",
          icon: (
            <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="9" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3" />
            </svg>
          )
        },
        {
          title: "Lead Scoring Systems",
          icon: (
            <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 17l-4-4 4-4M15 7l4 4-4 4" />
            </svg>
          )
        }
      ].map((item, index) => (
        <div
          key={index}
          className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300 text-center"
        >
          <div className="flex justify-center mb-4">
            {item.icon}
          </div>
          <p className="text-gray-800 font-semibold">
            {item.title}
          </p>
        </div>
      ))}
    </div>

  </div>
</section>


<section className="bg-blue-50 py-20 px-6">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT CONTENT */}
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        Conversion Rate Optimization (CRO)
      </h2>

      <p className="text-gray-600 leading-relaxed mb-6">
        Financial products demand clarity. We optimize:
      </p>

      <ul className="space-y-4 mb-6">
        {[
          "Landing page structures",
          "Call-to-action placement",
          "Form UX",
          "Mobile-first performance",
          "Trust badges & compliance signals",
          "A/B testing frameworks"
        ].map((item, index) => (
          <li key={index} className="flex items-start text-gray-700">
            <span className="text-blue-600 font-bold mr-3">✓</span>
            {item}
          </li>
        ))}
      </ul>

      <p className="text-lg font-semibold text-blue-700">
        Because in BFSI, even a 1% increase in conversion can mean massive revenue growth.
      </p>
    </div>

    {/* RIGHT – CRO IMAGE */}
    <div className="flex justify-center">
      <img
        src={ConversionRateOptimizationImage}
           alt="Conversion rate optimization dashboard and analytics"
        className="rounded-2xl shadow-xl w-full max-w-md"
      />
    </div>

  </div>
</section>


<section className="bg-white py-20 px-6">
  <div className="max-w-6xl mx-auto">

    {/* HEADING */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Our Strategic Approach
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto">
        We follow a structured yet agile growth model:
      </p>
    </div>

    {/* PROCESS GRID */}
    <div className="grid md:grid-cols-3 gap-8 mb-14">
      {[
        "Market & Compliance Research",
        "Audience & Persona Mapping",
        "Channel Strategy & Funnel Planning",
        "Creative & Content Deployment",
        "Performance Optimization",
        "Analytics & Revenue Tracking"
      ].map((step, index) => (
        <div
          key={index}
          className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 relative"
        >
          <div className="absolute -top-4 left-6 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold shadow-md">
            {index + 1}
          </div>

          <p className="text-gray-800 font-medium mt-6">
            {step}
          </p>
        </div>
      ))}
    </div>

    {/* CLOSING STATEMENT */}
    <div className="text-center max-w-4xl mx-auto">
      <p className="text-lg text-gray-800 font-medium leading-relaxed">
        Every strategy is backed by 
        <span className="text-blue-700 font-semibold"> data</span>, 
        powered by 
        <span className="text-blue-700 font-semibold"> creativity</span>, 
        and aligned with 
        <span className="text-blue-700 font-semibold"> measurable business goals</span>.
      </p>
    </div>

  </div>
</section>



<section className="bg-gray-50 py-20 px-6">
  <div className="max-w-6xl mx-auto">

    {/* HEADING */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Industries We Serve in BFSI
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto">
        Delivering growth-focused digital strategies across the entire financial ecosystem.
      </p>
    </div>

    {/* INDUSTRY GRID */}
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-14">
      {[
        {
          title: "Retail Banking",
          icon: (
            <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 10l9-7 9 7v9a2 2 0 01-2 2h-4v-6H9v6H5a2 2 0 01-2-2z" />
            </svg>
          )
        },
        {
          title: "Corporate Banking",
          icon: (
            <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <rect x="3" y="7" width="18" height="13" rx="2" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 3v4M8 3v4" />
            </svg>
          )
        },
        {
          title: "NBFCs",
          icon: (
            <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="9" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3" />
            </svg>
          )
        },
        {
          title: "Insurance Providers",
          icon: (
            <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z" />
            </svg>
          )
        },
        {
          title: "Fintech Startups",
          icon: (
            <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          )
        },
        {
          title: "Investment & Wealth Management Firms",
          icon: (
            <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 8-8" />
            </svg>
          )
        },
        {
          title: "Microfinance Institutions",
          icon: (
            <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-3 0-5 1.5-5 4s2 4 5 4 5-1.5 5-4-2-4-5-4z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h2M20 12h2" />
            </svg>
          )
        }
      ].map((industry, index) => (
        <div
          key={index}
          className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 text-center"
        >
          <div className="flex justify-center mb-4">
            {industry.icon}
          </div>

          <p className="text-gray-800 font-semibold text-lg">
            {industry.title}
          </p>
        </div>
      ))}
    </div>

    {/* TAGLINE */}
    <div className="text-center">
      <p className="text-blue-700 font-semibold text-lg">
        Shaping the future of finance through digital excellence.
      </p>
    </div>

  </div>
</section>


<section className="bg-gradient-to-b from-white to-blue-50 py-20 px-6">
  <div className="max-w-6xl mx-auto">

    <div className="grid md:grid-cols-2 gap-12 items-center">

      {/* LEFT – CONTENT + SIMPLE POINTS */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Why Choose Us for BFSI Marketing?
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          At <span className="font-semibold text-blue-700">
            Adkryoss managed by Clink Consultancy Services Private Limited
          </span>, we combine deep industry insight with cutting-edge digital tools 
          to create scalable growth systems for financial brands.
        </p>

        {/* SIMPLE CHECKLIST */}
        <ul className="space-y-4 mb-8">
          {[
            "Performance-First Strategy",
            "Compliance-Conscious Campaigns",
            "Data-Driven Decision Making",
            "Transparent Reporting",
            "Dedicated Account Management",
            "ROI-Focused Execution"
          ].map((item, index) => (
            <li key={index} className="flex items-start text-gray-800">
              <span className="text-blue-600 font-bold mr-3">✓</span>
              <span className="font-medium">{item}</span>
            </li>
          ))}
        </ul>

        <p className="text-blue-700 font-semibold text-lg">
          Shaping performance-driven growth for the future of finance.
        </p>
      </div>

      {/* RIGHT – IMAGE */}
      <div className="flex justify-center">
        <img
          src={WhyChooseUsforBFSIMarketingImage}
             alt="Financial marketing strategy and analytics dashboard"
          className="rounded-2xl shadow-xl w-full max-w-md"
        />
      </div>

    </div>

  </div>
</section>



<section className="bg-gray-900 py-24 px-6 text-center">
  <div className="max-w-4xl mx-auto">

    {/* HEADING */}
    <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
      The Future of BFSI Marketing Is 
      <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
        {" "}Digital
      </span>
    </h2>

    {/* CONTENT */}
    <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
      Open banking, AI-driven underwriting, fintech disruption, and hyper-personalization 
      are redefining financial services. The brands that win are the ones that adapt faster.
    </p>

    <p className="text-white text-xl md:text-2xl font-semibold mb-10">
      Your customers are online. Your growth should be too.
    </p>

    {/* CTA BUTTON */}
    {/* <div>
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition duration-300 shadow-lg">
        Book a Strategy Consultation
      </button>
    </div> */}


    <div>
  <button
    onClick={() => navigate("/contact")}
    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition duration-300 shadow-lg"
  >
    Book a Strategy Consultation
  </button>
</div>

  </div>
</section>



<section className="bg-gradient-to-r from-blue-800 to-indigo-800 py-16 px-6 text-white text-center">
  <div className="max-w-4xl mx-auto">

    {/* HEADLINE */}
    <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-white">
      Let’s Build a High-Performance Financial Growth Engine
    </h2>

    {/* DESCRIPTION */}
    <p className="text-lg md:text-xl leading-relaxed mb-6 text-white">
      Partner with 
      <span className="font-bold"> Adkryoss managed by Clink Consultancy Services Private Limited </span> 
      and transform your BFSI marketing into a measurable, scalable, 
      and future-ready digital system.
    </p>

    {/* CLOSING LINE */}
    <p className="text-lg md:text-xl font-semibold mb-8 text-white">
      Ready to scale your financial brand? Let’s start today.
    </p>

    {/* CTA BUTTONS */}
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <button 
      onClick={() => navigate("/contact?service=bfsi")}
      className="bg-white text-blue-800 px-8 py-3 rounded-full font-semibold hover:scale-105 transition duration-300">
        Schedule a Strategy Call
      </button>

      <button 
      onClick={() => navigate("/contact?service=bfsi")}
      className="border border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-800 transition duration-300">
        Request a Proposal
      </button>
    </div>

  </div>
</section>

        </>
    );
};

export default BFSI;
