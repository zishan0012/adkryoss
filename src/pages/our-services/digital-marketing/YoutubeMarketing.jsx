import React from 'react';
import { useState } from "react";
import { motion } from 'framer-motion'; 
import { useNavigate } from 'react-router-dom';
import YoutubeImage from "../../../assets/Youtube.png";
import WhyYouTubeMarketingisNonNegotiableImage from "../../../assets/WhyYouTubeMarketingisNonNegotiable.png"
import OurProcessFromIdeatoImpactImage from "../../../assets/OurProcessFromIdeatoImpact.png"
import EcommercebrandsscalingproductdiscoveryImage from "../../../assets/Ecommercebrandsscalingproductdiscovery.png"
import EdTechplatformsbuildingauthorityImage from "../../../assets/EdTechplatformsbuildingauthority.png"
import HealthcareservicebrandscreatingtrustImage from "../../../assets/Healthcareservicebrandscreatingtrust.png"
import PersonalbrandsbuildingthoughtleadershipImage from "../../../assets/Personalbrandsbuildingthoughtleadership.png"
import SaaSstartupsgeneratinginboundleadsImage from "../../../assets/SaaSstartupsgeneratinginboundleads.png"

const YoutubeMarketing = () => {
  const navigate = useNavigate();

 const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How long does it take to see results?",
      answer:
        "Organic YouTube SEO typically shows measurable traction within 3–4 months. Paid campaigns can generate visibility instantly with optimized targeting.",
    },
    {
      question: "Is YouTube marketing suitable for B2B?",
      answer:
        "Absolutely. Decision-makers consume video content before purchasing. Educational and value-driven videos perform exceptionally well in B2B.",
    },
    {
      question: "Can YouTube generate direct leads?",
      answer:
        "Yes. With proper CTA placement, landing page integration, and retargeting funnels, YouTube becomes a powerful lead generation channel.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


    return (
        <>

 




{/* <section
  className="bg-cover bg-center bg-no-repeat py-20 min-h-[500px] md:h-120 flex items-center relative text-white"
  style={{
    backgroundImage:
      "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')",
  }}
>
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 w-full relative z-10">

    <div className="text-left text-white space-y-6">

      <h2 className="text-4xl md:text-4xl font-bold leading-tight text-white">
        YouTube Video Marketing Services
      </h2>

      <h3 className="text-2xl md:text-3xl font-semibold leading-snug">
        Turn Views into Revenue. Subscribers into Brand Advocates.
      </h3>

      <p className="text-white md:text-md leading-relaxed max-w-[600px]">
        Video isn’t the future. It’s the present.
        <br />
        If your business isn’t dominating YouTube, you’re leaving attention—and money—on the table.
        <br />
        At Adkryoss managed by Clink Consultancy Services Private Limited, we build performance-driven YouTube marketing strategies that go beyond views. We engineer discoverability, engagement, and conversions through data-backed video SEO, intelligent advertising, and creative storytelling.
      </p>



       <div className="flex flex-col sm:flex-row gap-4 mt-2">
                            <a
                                href="/contact"
                                className="bg-white text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-center"
                            >
                                Speak to Our Expert →
                            </a>
                            <a
                                href="#services"
                                className="border-2 border-blue-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:text-black hover:-translate-y-1 hover:shadow-xl text-center"
                            >
                                Our Services →
                            </a>
                        </div>

    </div>

    <div className="flex justify-center md:justify-end">
      <div className="w-full max-w-[400px] h-[260px] sm:h-[300px] md:h-[320px] flex items-center justify-center">
        <img
          src={YoutubeImage}
          alt="Section Image"
          className="max-w-full max-h-full object-contain rounded-xl shadow-lg"
        />
      </div>
    </div>

  </div>
</section> */}



<motion.section
  className="relative bg-cover bg-center bg-no-repeat py-24 min-h-[660px] flex items-center text-white overflow-hidden"
  style={{
    backgroundImage:
      "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')"
  }}
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1 }}
>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-black/80 to-indigo-950/90"></div>

  {/* Animated Glow Effects */}
  <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]"></div>
  <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-orange-500/30 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite]"></div>

  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 w-full relative z-10">

    {/* LEFT CONTENT */}
    <div className="text-left max-w-[600px] space-y-6">

      <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
        <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
          YouTube Video Marketing Services
        </span>
      </h2>

      <h3 className="text-xl md:text-2xl font-semibold mb-6 text-blue-100">
        Turn Views into Revenue. Subscribers into Brand Advocates.
      </h3>

      <p className="text-gray-200 text-md md:text-lg leading-relaxed font-medium">
        Video isn’t the future. It’s the present.
        <br />
        If your business isn’t dominating YouTube, you’re leaving attention—and money—on the table.
      </p>

      <p className="text-gray-200 text-md md:text-lg leading-relaxed font-medium">
        At <span className="font-semibold text-white">Adkryoss managed by Clink Consultancy Services Private Limited</span>, we build performance-driven YouTube marketing strategies that go beyond views. We engineer discoverability, engagement, and conversions through data-backed video SEO, intelligent advertising, and creative storytelling.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 pt-2">
        <a
          href="/contact"
          className="inline-flex items-center justify-center bg-white text-black font-semibold px-8 py-4 rounded-full 
                     transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          Speak to Our Expert →
        </a>

        <a
          href="#services"
          className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold 
                     transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 hover:shadow-xl"
        >
          Our Services →
        </a>
      </div>

    </div>

    {/* RIGHT IMAGE */}
    <div className="flex justify-center md:justify-end relative z-10">
      <div className="relative group w-full max-w-[420px] h-[260px] sm:h-[300px] md:h-[340px] flex items-center justify-center">

        {/* Image Glow */}
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-500"></div>

        <img
          src={YoutubeImage}
          alt="YouTube Marketing"
          className="relative max-w-full max-h-full object-contain rounded-xl shadow-2xl 
                     transform group-hover:-translate-y-2 transition duration-500"
        />

      </div>
    </div>

  </div>

  {/* Floating Animation */}
  <style>
    {`
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(30px); }
      }
    `}
  </style>
</motion.section>



<section className="bg-blue-50 py-12 px-6 md:px-16 lg:px-4 rounded-xl my-12 mx-4 md:mx-10 lg:mx-20">

  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

    {/* LEFT CONTENT */}
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
        Why YouTube Marketing is Non-Negotiable in 2026
      </h2>

      <div className="space-y-4 text-gray-800 text-lg">
        <div className="flex items-start gap-3">
          <span className="text-2xl font-bold text-black">✔</span>
          <p>2+ Billion logged-in monthly users</p>
        </div>

        <div className="flex items-start gap-3">
          <span className="text-2xl font-bold text-black">✔</span>
          <p>Second largest search engine after Google</p>
        </div>

        <div className="flex items-start gap-3">
          <span className="text-2xl font-bold text-black">✔</span>
          <p>70% of watch time driven by algorithmic recommendations</p>
        </div>

        <div className="flex items-start gap-3">
          <span className="text-2xl font-bold text-black">✔</span>
          <p>High-intent users actively searching for solutions</p>
        </div>
      </div>

      <p className="mt-6 text-gray-700 leading-relaxed">
        YouTube is not just a social platform—it’s a search engine, discovery engine, 
        and conversion engine combined.
      </p>

      <p className="mt-3 font-semibold text-gray-900">
        The brands that win here don’t just upload videos. They optimize, scale, 
        and retarget strategically.
      </p>





    </div>

    {/* RIGHT IMAGE */}
    <div className="flex justify-center">
      <img
        src={WhyYouTubeMarketingisNonNegotiableImage}   
         alt="YouTube Marketing"
        className="w-full max-w-md object-contain"
      />
    </div>

  </div>
</section>


<section className="bg-white py-6 px-6 md:px-16 lg:px-4 mx-4 md:mx-10 lg:mx-20 rounded-xl my-16">

  <div className="max-w-7xl mx-auto">

    {/* Heading LEFT aligned */}
    <div className="mb-14">
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
        Our YouTube Marketing Framework
      </h2>
      <p className="text-gray-600 text-lg">
        We don’t believe in random uploads. We believe in systems.
      </p>
    </div>

    {/* Grid Layout */}
    <div className="grid md:grid-cols-3 gap-8">

      {/* 1 */}
      <div className="bg-blue-50 p-8 rounded-xl shadow-sm hover:shadow-md transition">
        <svg className="w-12 h-12 mb-6 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M3 3v18h18" />
          <path d="M7 14l4-4 4 4 5-5" />
        </svg>

        <h3 className="text-xl font-semibold mb-3">
          Strategy & Channel Architecture
        </h3>

        <p className="text-gray-700">
          Deep competitor benchmarking, niche gap analysis, and audience intent mapping.
          From content pillars to publishing calendar—we build your channel for long-term authority.
        </p>
      </div>

      {/* 2 */}
      <div className="bg-blue-50 p-8 rounded-xl shadow-sm hover:shadow-md transition">
        <svg className="w-12 h-12 mb-6 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.3-4.3" />
        </svg>

        <h3 className="text-xl font-semibold mb-3">
          YouTube SEO & Discoverability
        </h3>

        <ul className="text-gray-700 space-y-2">
          <li>• Keyword clustering</li>
          <li>• SEO titles & tags</li>
          <li>• Thumbnail CTR optimization</li>
          <li>• Video schema & indexing</li>
          <li>• Playlist structuring</li>
        </ul>
      </div>

      {/* 3 */}
      <div className="bg-blue-50 p-8 rounded-xl shadow-sm hover:shadow-md transition">
        <svg className="w-12 h-12 mb-6 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M10 9l5 3-5 3V9z" />
        </svg>

        <h3 className="text-xl font-semibold mb-3">
          Performance Video Advertising
        </h3>

        <ul className="text-gray-700 space-y-2">
          <li>• In-Stream Ads</li>
          <li>• Skippable & Non-Skippable</li>
          <li>• Discovery Ads</li>
          <li>• Bumper Ads</li>
          <li>• Retargeting Campaigns</li>
        </ul>
      </div>

    </div>

    {/* Second Row - 2 Cards */}
    <div className="grid md:grid-cols-2 gap-8 mt-8">

      {/* 4 */}
      <div className="bg-blue-50 p-8 rounded-xl shadow-sm hover:shadow-md transition">
        <svg className="w-12 h-12 mb-6 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 2l3 7h7l-5.5 4.5L18 22l-6-4-6 4 1.5-8.5L2 9h7z" />
        </svg>

        <h3 className="text-xl font-semibold mb-3">
          Creative & Production Guidance
        </h3>

        <ul className="text-gray-700 space-y-2">
          <li>• Script frameworks</li>
          <li>• Hook-first storytelling</li>
          <li>• Conversion CTAs</li>
          <li>• Thumbnail design</li>
          <li>• A/B testing creatives</li>
        </ul>
      </div>

      {/* 5 */}
      <div className="bg-blue-50 p-8 rounded-xl shadow-sm hover:shadow-md transition">
        <svg className="w-12 h-12 mb-6 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M3 3v18h18" />
          <path d="M7 13v4M12 9v8M17 5v12" />
        </svg>

        <h3 className="text-xl font-semibold mb-3">
          Analytics, Optimization & Scaling
        </h3>

        <ul className="text-gray-700 space-y-2">
          <li>• Retention graph</li>
          <li>• Watch time velocity</li>
          <li>• Subscriber cost</li>
          <li>• Engagement depth</li>
          <li>• Conversion attribution</li>
        </ul>
      </div>

    </div>

  </div>
</section>


<section className="bg-white py-6 px-6 md:px-16 lg:px-4 mx-4 md:mx-10 lg:mx-20 rounded-xl my-16">

  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <div className="mb-14">
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
        Our YouTube Marketing Services
      </h2>
      <p className="text-gray-600 text-lg">
        Comprehensive YouTube growth solutions designed to scale authority, visibility, and conversions.
      </p>
    </div>

    {/* Grid */}
    <div className="grid md:grid-cols-3 gap-8">

      {/* 1 */}
      <div className="bg-blue-50 p-8 rounded-xl shadow-sm hover:shadow-md transition">
        <svg className="w-12 h-12 mb-6 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M8 2v4M16 2v4" />
        </svg>

        <h3 className="text-xl font-semibold mb-3">
          Channel Setup & Optimization
        </h3>

        <p className="text-gray-700">
          Complete channel branding, keyword positioning, and technical SEO alignment to build a strong foundation.
        </p>
      </div>

      {/* 2 */}
      <div className="bg-blue-50 p-8 rounded-xl shadow-sm hover:shadow-md transition">
        <svg className="w-12 h-12 mb-6 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.3-4.3" />
        </svg>

        <h3 className="text-xl font-semibold mb-3">
          Video SEO & Ranking
        </h3>

        <p className="text-gray-700">
          Search-driven optimization to appear in YouTube search, suggested videos, and Google results.
        </p>
      </div>

      {/* 3 */}
      <div className="bg-blue-50 p-8 rounded-xl shadow-sm hover:shadow-md transition">
        <svg className="w-12 h-12 mb-6 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M10 9l5 3-5 3V9z" />
        </svg>

        <h3 className="text-xl font-semibold mb-3">
          YouTube Ads Management
        </h3>

        <p className="text-gray-700">
          Full-funnel campaign planning from awareness to remarketing with performance-focused execution.
        </p>
      </div>

      {/* 4 */}
      <div className="bg-blue-50 p-8 rounded-xl shadow-sm hover:shadow-md transition">
        <svg className="w-12 h-12 mb-6 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M17 8a5 5 0 00-10 0v1H5v11h14V9h-2V8z" />
        </svg>

        <h3 className="text-xl font-semibold mb-3">
          Influencer & Creator Collaboration
        </h3>

        <p className="text-gray-700">
          Strategic partnerships to expand audience reach authentically and build brand trust.
        </p>
      </div>

      {/* 5 */}
      <div className="bg-blue-50 p-8 rounded-xl shadow-sm hover:shadow-md transition">
        <svg className="w-12 h-12 mb-6 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M3 3h18v4H3z" />
          <path d="M3 11h18v4H3z" />
          <path d="M3 19h18v2H3z" />
        </svg>

        <h3 className="text-xl font-semibold mb-3">
          Content Strategy & Calendar Planning
        </h3>

        <p className="text-gray-700">
          High-intent content mapped strategically to buyer journey stages for consistent growth.
        </p>
      </div>

      {/* 6 */}
      <div className="bg-blue-50 p-8 rounded-xl shadow-sm hover:shadow-md transition">
        <svg className="w-12 h-12 mb-6 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="2" y="7" width="20" height="10" rx="3" />
          <path d="M10 9l5 3-5 3V9z" />
        </svg>

        <h3 className="text-xl font-semibold mb-3">
          YouTube Shorts Growth Strategy
        </h3>

        <p className="text-gray-700">
          Short-form content frameworks aligned with algorithm momentum to accelerate reach and engagement.
        </p>
      </div>

    </div>

  </div>
</section>



<section className="bg-white py-6 px-6 md:px-16 lg:px-4 mx-4 md:mx-10 lg:mx-20 rounded-xl my-16">

  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <div className="mb-14">
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
        Who We Work With
      </h2>
      <p className="text-gray-600 text-lg">
        No matter the industry, attention is currency—and YouTube is where attention compounds.
      </p>
    </div>

    {/* Grid */}
    <div className="grid md:grid-cols-3 gap-8">

      {/* CARD */}
      {[
        {
          title: "E-commerce brands scaling product discovery",
          
          img: EcommercebrandsscalingproductdiscoveryImage
        },
        {
          title: "EdTech platforms building authority",
       
          img: EdTechplatformsbuildingauthorityImage
        },
        {
          title: "SaaS startups generating inbound leads ",
        
          img: SaaSstartupsgeneratinginboundleadsImage
         },
        {
          title: "Healthcare & service brands creating trust",
         
          img: HealthcareservicebrandscreatingtrustImage 
          },
        {
          title: "Personal brands building thought leadership ",
          
          img: PersonalbrandsbuildingthoughtleadershipImage
         }
      ].map((item, index) => (
        <div
          key={index}
          className="bg-blue-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition flex flex-col h-full"
        >
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-44 object-cover"
          />

          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-semibold mb-2">
              {item.title}
            </h3>

            
          </div>
        </div>
      ))}

    </div>

  </div>
</section>



<section className="bg-white py-6 px-6 md:px-16 lg:px-4 mx-4 md:mx-10 lg:mx-20 rounded-xl my-16">

  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <div className="mb-12">
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
        What Makes Our Approach Different?
      </h2>

      <p className="text-xl font-semibold text-gray-900 mb-2">
        Most agencies chase views.
      </p>

      <p className="text-xl font-semibold text-gray-900 mb-6">
        We chase impact.
      </p>

      <p className="text-gray-700 text-lg">
        Adkryoss managed by Clink Consultancy Services Private Limited integrates YouTube marketing with broader SEO, paid media, and conversion strategies—so your videos don’t just entertain, they convert.
      </p>
    </div>

    {/* Points */}
    <div className="space-y-4 text-lg text-gray-800 font-bold">
      <p>• Search Intelligence</p>
      <p>• Behavioral Targeting</p>
      <p>• Performance Creatives</p>
      <p>• AI-driven Optimization</p>
      <p>• Conversion Tracking Systems</p>
    </div>

    {/* Closing Line */}
    <div className="mt-10">
      <p className="text-lg font-medium text-gray-900">
        This integrated model ensures YouTube becomes a growth engine—not just a content channel.
      </p>
    </div>

  </div>
</section>



<section className="bg-white py-6 px-6 md:px-16 lg:px-4 mx-4 md:mx-10 lg:mx-20 rounded-xl my-16">

  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <div className="mb-14">
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
        Our Process: From Idea to Impact
      </h2>
    </div>

    {/* Content Row */}
    <div className="grid md:grid-cols-2 gap-12 items-center">

      {/* Left Side - Timeline */}
      <div className="relative border-l-2 border-blue-200 pl-8 space-y-10">

        <div className="relative">
          <div className="absolute -left-[11px] top-1 w-5 h-5 bg-blue-600 rounded-full"></div>
          <h3 className="text-xl font-semibold text-gray-900 ml-5">
            Discovery & Audit
          </h3>
        </div>

        <div className="relative">
          <div className="absolute -left-[11px] top-1 w-5 h-5 bg-blue-600 rounded-full"></div>
          <h3 className="text-xl font-semibold text-gray-900 ml-5">
            Strategy Blueprint
          </h3>
        </div>

        <div className="relative">
          <div className="absolute -left-[11px] top-1 w-5 h-5 bg-blue-600 rounded-full"></div>
          <h3 className="text-xl font-semibold text-gray-900 ml-5">
            Content & Campaign Launch
          </h3>
        </div>

        <div className="relative">
          <div className="absolute -left-[11px] top-1 w-5 h-5 bg-blue-600 rounded-full"></div>
          <h3 className="text-xl font-semibold text-gray-900 ml-5">
            Data Monitoring & CRO
          </h3>
        </div>

        <div className="relative">
          <div className="absolute -left-[11px] top-1 w-5 h-5 bg-blue-600 rounded-full"></div>
          <h3 className="text-xl font-semibold text-gray-900 ml-5">
            Scale & Expand
          </h3>
        </div>

      </div>

      {/* Right Side - Image */}
      <div className="flex justify-center md:justify-end">
        <img
          src={OurProcessFromIdeatoImpactImage}
            alt="Process Illustration"
          className="max-w-full h-80 mr-40 rounded-xl shadow-md"
          />
      </div>

    </div>

    {/* Closing Line */}
    <div className="mt-5">
      <p className="text-lg font-medium text-gray-900">
        Every phase is measurable. Every action is ROI-focused.
      </p>
    </div>



    

          </div>
</section>



<section className="bg-white py-6 px-6 md:px-16 lg:px-4 mx-4 md:mx-10 lg:mx-20 rounded-xl my-16">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg transition duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left p-6 hover:bg-blue-50 transition duration-300"
              >
                <span className="font-bold text-black text-lg">
                  {faq.question}
                </span>

                <span className="text-2xl font-bold text-black">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-600 text-base leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>



   <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-10 px-6 md:px-16 lg:px-4 mx-4 md:mx-10 lg:mx-20 rounded-xl my-16 text-white">

  <div className="max-w-7xl mx-auto">
    
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      
      {/* LEFT CONTENT */}
      <div>
        <h2 className="text-3xl md:text-5xl font-bold mb-8 ">
          Ready to Dominate YouTube?
        </h2>

        <div className="space-y-6 text-lg md:text-xl leading-relaxed max-w-2xl">
          <p className='text-white'>
            Attention is limited. Competition is increasing.
            The brands that build video authority today will own the market tomorrow.
          </p>

          <p className='text-white'>
            Partner with Adkryoss managed by Clink Consultancy Services Private Limited 
            and transform your YouTube presence into a scalable growth asset.
          </p>

          <p className="font-semibold text-white">
            Let’s build videos that don’t just get watched—
            <br />
            Let’s build videos that win.
          </p>
        </div>

        <div className="mt-10">
          <button 
          onClick={()=>navigate("/contact?service=youtube")}
          className="bg-white text-blue-700 font-semibold px-8 py-4 rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
            Get Started Today
          </button>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex justify-center lg:justify-end">
        <img
          // src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAW0AAACKCAMAAABW6eueAAABBVBMVEX+/v7sHiT////+///qAAD98vL5ubvwSk/tKi/98PHsGCDvSkD97ursEBr5v7r2pKX3qqz5s7QAAAD39/cZGRn6ycvt7e3Ix8frAAzm5uYXFxfz8/OqqakeHh6HhobY19f0kYni4eG3t7daWFhmZGR3dXVubGx7eXmhoKAkIyMtLCxSUFCysbHLyspGRESXlpZAPj3xW1+Rj4/729Q1NDTpV0zxa2HvvbH6z8j4s6n3ppv85+HxW1TuQDvzenLqa13vT0f0iX7wVlD71M72ppv4ubD2mZHwgHHoZFTobF3mNCzvp5jsV0juQT3ziYPvSUrzcHLuOCntMTbyYWX61db2mJjyfn1qk+XcAAAXg0lEQVR4nO2dCXuiyNaAsYhfO0YzfS0HgiCEHYOKjcZojHbSJqbbXuZ2z/T9/z/lO6fcswhJJHc6l5MniFALvBxOnVrluFRSSSWVVFJJJZVUUkkllVT+GUIIeaWZvZyQuUQHpDJ9QtrLPLbmfifE/ZnFutB/sBDNQGlwUXdBZLUZ0odC3Y9BNAwJDhPJMMR7oxJZNJYirEIQwWla+p0YmJAWcZ3/aCFqCaVmihFaQxq1Ukd4IAyRNU24c5BapVJI4EnYpZJ77+MkWg1zr1RwK67T9iute2jXWYK/rhC1Uuu0OuVKa36zSyXFndkXtiWC3VEpHtoMMzMV9XI5WFmNRdricbUjEaJ3yh2NcBuWZf5N9yHzWg0vodUgq+OCX27qaynNzxjVSvCL067WBU2tlX3UJcJRSmdqiDvwT5aHBE1mX7j5YWBA56eoUikHaGjX4qNyu+VKwBGvUlbx0eE5NCgYbRYUEpUkzS8f1+GTZTfLmNHWuHlSy0RfA+0yGBFqo3KCRVAs0/TAYBDN8r26ZToNWjd9G/ROdkxXJoZv1iGM3UAlF13TdAxKZLtVrXV8TAeimIG8wK0dl5sSBZoNSJEajmmqoOsk9NFw1X3fYHps4nlUdNOHHATHdynS9hzTMthTYhFBGeBleQ200SpXfUokq1SBvybcPNzYMVrUjsm2OhFaJV8moMQdPHAMpiGY2dyQyNZxrXbcMcDalNAE+9rcKnGQel0pV8AEQSnLztXqhDiVKmD0SpU6M1FAG80YGPGKKc/yEfxqDa6kUoZwNGQROyK7KO810Kad6rGMX8zAqlZMgYidas0N/Gq16gTNKtyk0Kwg7XINDjerpYBonWozCDtlAC8r5WooUBKUIb5dq9hz7YYwZd8vt4A+8aoQ3D1Ge+yUa0gbnsQm7eMy0m4Cc6BdNT2nVm1hlmUfI8JFNTqvgzYHtoBqLQQjszdb7OCtQ+lnyWgu3SXtqkWJWKu4lEqSBPHLqH/1CpaSOgMrW0t/ApW7VquEqNpWpSaCJYdiYkG7tI12GUpN2aqWNMGqgFpzNj5VoK28EtrHMkIE+xlUqh7SRqyVMhzRauu04YBwXLEpGOLQdf0qo818EvBBWq7rNqs1bWm5O9VqB02u0Cw3AbpRgfh2DN1mPklQrnh6q9qxWT7iq6EtgbNGgS36x2gWttOWkDboKdrt2kq3xWqtOrPl2tJ3c6uYAmTQKvtQsmrwbixob9XtCtDmDPBp8HmxRMEh1zql+q9PG269Wra5hW6Xo3QbaXNitWyJNFyzJGKtbEmCIEirmg4JqvgEgfZd3d5uSZhuQ4EB5s3XZUgVygVOFh6szv4Kgv423KrRKoNx1JtoLYWF3d5OG92TgMjugnZIMP5xnRItlJZIlrRlCxHLdhnstluueeCj3LYkUAtqSrMCA2jD9UhmtSIKEBF8UsnTwD3RGvKvTtsJ7Vq1osJ7DgB81SyjIxat2/VKtaVatSp6c6CyTbVBwkr12FabJXvJZEGb1XFaqlNDnfXmMW/Rps1yzVKb4I3IMvgkzdCqok8CoeGwX2KOUukX90lKM+uryliUOdhkUTGZv11C2qUS0q6W7IW/XQKtJlKtZHPgLIBLfFwGAGAnYF8BTWfxO8oq/aAya9oAXS6zcwZWYyBYuVMuKczG+KUaazYgAfjYpeMa+tvNUq0GoY/R32aHK8cBxXYS51dWblJ3bJBAm9WRZcO1bYXVJV0bbk9zbAXo2A6QVG3w5ETbBriC63jwbDwIK7q2h6Wfatv4qovwGeirFi5i2PasYJufEzgsMkOICWeYSsuh7c6aUTjIXRUDJ6Ry6ASQsiuyumQDgodYe4V42i8MeymErD5mG/a/2NsMuxZnEXbxQbj7YqxlsdysmpyWMZYZ82Q90KIp66GEfyW51ZC/1r53Z3v7wIo3d/dzleB9++sxNw6T1QPhN4Onkkoqt4RPZbeyFXW23Tv4v1R2Iwe9dvYh4HD44PIis5fK7iTz4ah3L2+e63WLxf3R5F//bZV4NfJ20h0WM+973B3cfHYyLXb7A5qa7t0JRwf98+KwT/nbsEfFfTi6zayn8lhB4oWzYfEyu4GVz97sddsp6gSEJ+OLvaN1Y8LTo8NuIWWdjPDti2J/DTd/mhu2U9hJCd/+Mewt8fK0W+ynsJMTMjkcLZWbP8iPsint5IQvXOTGS9rdzEEKO0khV8WjeWMhX8hcDFLaSQrfnn6YO91873B02/+OmchKZsPK1z37VFbCZ7uZuULz13uTu5XL2+HXoa6N2c9mswWQ3wZMcLeQzeKI0M2g/+OPgOeO9uZOH/927+1WDgCZo0B1MGiPe6en1/2rydHl5dHR5c3NaDR6D/JxJZ8+vf90M7q5gQCXN5eTyef+6Wmv1y4MCr9lWbPAi9zeP0343/fmxSTs/WtbOyyhg97p1dHo48nJyT7IdJrLzCQ/2+bzmZXgF/hfHMrlpkOI8wXifrqcXAP2+LxfvBMqudkz5O3eHzFo83x2/Pn9cPodoTLJbMCNlvxSMkD+5Oi0QOLyfmHchCpBQj3n8Wjz3Pjyaz7/SMDbyGemn04jSwl2gZ77srQJF7jaQxN4npt2HNo8vd7fFekV8ekkTpsMCRwyn0i3Nh9mubPok18bZUDWOtw3Di2+L3vxycbe4rvc1NcjEbKe/yrfO7FjmKA4tHnu+uuOWTPe06sYuBltmbKRkrghhMqyJOGIJIHidyqxLRtIKVBCcIYMg7FxiE3MmX/HBGbza2Q6S4nIGAliyJJAtVYDx04uImEmAsufsM0iR44Ka7FxJNcy62fRJuOT4u5hI+5+tDFB2rKthoETKGrgeJSIlhqolk4kX1UNIrluYHmc5giE6JZGRDdwVYENSTUlQiRT4+pO4IZwyNRxEk2DKKYbomEmdTMMVBuONuxQdXXSMF1V1INO6AnUswPbk4kOmdRlRw09JzDUAMddSSpch0I4wwoC1ZnHdiCvhhOo7lYbFIM2n71JQLMZ7pN2pH1ktE1bJuKxKxOtphED5ySpNpUqCuiTq8JR06CWSIhnUd3UCLVVNozKNAgRfSqCZZBVl3ItpN0UiddpzEyBcgyRQodKOFspsCELHMRGmxImJRHZ8YheDSjkb+EsD9joLY1TLXiSkFa9ZMB1qCxJGlqc1oRHqIbbCvUYtMn1NCHamcxRpHIz2ohS8utAoiMSwyE4jFKSWqjOOLGPKDbxVI5aClFtTdODJnvB6w7lLA+PghHoaKS5oO3M3ndQchwh2JI8s6FpRkvH58Ixuy10cJZZw5f0DmQi43MTfA9teoNrwMOgvkjqHZkQxeI8C69HpYGpaZrSkZ5Fm89+Sgx2PrplZklbMFe0ceKGJrXgbg0Th2CKvqybkg77tqMoiqcws6w3G3pTRzCgb83GfbTBWIO6uhaLJIuonXPayB0e5Rptc0abcGIQhC2g3ZrRDm2WGoWsPfjbZkpi0G4PE6OdyZxGmZIo2r6EtE2ZAmaVEidYc1msoA6RfYPN23lIt4G2qs4cjBi0/QbxTEPXzBXtwGYeDHXVlZfyZNrkNEHYmcuoFvV7aFv4/vsCo019nDgahoTULQt2PRMOyhJLFOgBphkFMLQcsCRS67Zuiy1ZZD6fsEZbNhWCScp3aSPwmSWZ0SYGziDRVGp0cAaytPVmomjz2UmCtPMnUabklt2Gck2shXqjqRCpg25X3RSFkHkbTR/p266mOcEsqmA2BXRLPEnEab2eo2l2RcTCdE67poKWgllXLQ08DTqnjaWp5iuSAf6LVkPa/prdhhykhloziDK32/A4dc3CofiOprvBNh8wmnYhKY+E0Z4OIkwJMTxCcU6LHKBOqeCTOHVVBXdEYNMVOENVQ3ztOYXNJJA9cNnmd0xClU3lCFW1ge41+IZ18P1Eb6nbBgsMdXVX9QSioZ8I/gVudVVVNXT38BEGONA+wJnbkJUUQCSvQRo4g1gMIAJmidUi+PS2rpESTXvwMVHap9thLyp/3HIz80nurVly69+RvC0ugyxPLSIu7PaqErm+JMQi0j2bjWTWaprrWT+VNmlfJGm3M/0o2ncuyLDiNtEF9tZJMETxX3i+XbRuj/eTpJ3/HKttav2KtbjTbYNgm+8LKTW8x2X9bIn2SQ6Sq9uAFI8e3TsXu/E5qo3o5ZfiiqLNc/1kaUe6gM+/xZ2Fe/aziab9eRqP29OeSX70pKFwm62qt87cKq3keElx8sqILwrKW1nQtfNr5eJ6qRqRVxTt7CQmtmH+KQ2FxfdPoU2owda8INrtThaiQyW8Dv/G4gBrLNqSlGRQ5ljI5nKZLiLjEmpEb+CXxnK9B3Gx1BehDUXBWhUVFRQRq6R1xYjsg4imfRkP2+HP04sn9DjkPz5l5CH43RY6xZIv3qYtiaJx7IniYqW4SNoipCRLm7QFtq82WT1SXNK25x0SkusaBs6FFcxQFDEvSMUTg8ipqdG0R/EQHr4lg7Ovj1bv/JdxNO07nSXcrB7Phe76S73sfGlpa0eRNmF9oGvRF4YCD1BwKp0Z7aUxCKHeSC2o5RPN1OedNkB7nmiIVR4JKqHCLA7O1cbJynUrQrt3SZsn4+7hI3kD7Whrh28p3pIGO4sloeqOTETESg2ljjooYgOJiBovsJWLdLAGoOlA2zAUNkMaQhqzbh0dv4tQQQczIohUdJueDrQbSn3moJO6i+2tOIlbsbDGqNQhsOhqmD+RWAWf8ywqzBUfm3wx4zuv2mNpx61KAm0sU0/Pi48yJzE6FEDzFNF1ZaK0VNFY3J/sBJwVwK3jzHOrQXRsWdIZhxltA5f6M5pEa1mG6IYQ0vEagcm6dRpgI7RjlRDPJo2WoIemKMiW6TXCWRMKNnoTz0Ujo0IeqioqTZGIHcjfrxPdZ4lQaanbssNaDbAb43m024+hzfF8ob//GN75i16UrZOw0Y1zPaKwBVjceSOH2AywvQ9pQPWSSj7S9tdoYxeM4QM4kcz6XHD9RQcrNAR7euq+L3OqASoszC2JOmuQxQCQhGzVJVMTIHMD7RVsED4YaHlGG82LYFqq66qSbBlIm1Od7V5iNO2Tx9BG3u3R9/i48/tRLdyAAx0EwyUKLryjLJpLqVrFhmu/wV5h6WHaaLep5elNF9wHBx8WGPyQqIqlCWCUGW2Lzuy2bNZnPchOoPk65yo6vAUh9lCEDkWfBMy1vk67jqvucHPa9Nm0x18eRxvHQxx0D+Pyzg+jaZuMto20uSVtXIALjfSskdTXt9LmiB1onboGwtqfUUMdSVE0SHqDtuDPl89QHMWmYI7rkJ0aYkSd+SQAWJvTFjRuYUmo4+3GkpzGbJRa0eZ4ku0PY5qT/PQ6irbWRNp19zZtvSUvdBt7KX3pHtriXLdl02Pt44uGQskMVU5zwDzNLcmmbuMLZSnokGCvQjjvDxLx3QLdZt1l8H443LKUrDs7KSXJwX48JV2jjeZkcJmLxTs//RxFWzYNXHXHuJ+2B94Y9Vy4cXBbjM6KdgO3AdptANZo6cRD/8yYr+viduqEmmjSGW1zQXuh21yTGSAb1xTV4BkSDUpJ/FTAFwpsCY8aKw9QMhvYzr29zTEG7dOYTYAbtNGc9EZxKjvRtEG5bdXDgSSKukkbe9ZxZRwFx4KANfACZ+aTsC1VbSU0TdBtJ/Ac7PfBA/as1kOUY4iiAmhGW7cCbUO3wfQw78RrCizPIICnLfqqF+AqSwLk6dke1m7UeV1Sc0J2GRG3EkX7OmYf8C3aoN70LJY5uYr2twUwm1gmYYevoC+OUm3+0dDYSCW9oUk6exTabCSUhgcI1SWtoTN/Gw4Ii44GDdPV2VHQZKkhcToqpr4IIOksGPLjwdPXJDYkSmuw5dGpDkligQh5apAqu0Z2Gc+k3X8ibbzIwVF0+2G0bq/VJReb+dHlSbLcWWtIWnWxrAdYj7y+IbeSv7WGz2bfzGZb1O5apYB2LNj30Eb9Hp9HRvz8PzRwPkHdZlWdr1Hxclcp7dX5p+s2+t3RhjuOJXk1EqOUfBptqFN2izGaqHLRpeTrkYR8ktkSEXHiTVO7vXb+4Cn+Np+9/hCvayGGv/2KJJmae3sUt6EkP+2ntJfC9x7bKgW19sk0dp9CfhjVThJfkl6x6Plza3fd4srzWfAZd9niGlv49sFLyHNWcNl1bwLXGz1qrEN0b0Jc4cfD4kvI197Tce+0pwyMyNH0kT1lMfolYwnPTQ4fk/GTZbnoxRMkknbhEb3A2f4jWbN+yd14gDx3lMjEtzuSKO34fe78QffxA6byFzFGOMSRV0I75mD54rejx059R0l1e+MmskdxL+NJc7OL73e03s9DtGez82f/q73F9bLVEfLLRSiWCx9sfnk52jTuqMunyc4WDnuAdnH67l2umHv3NZ+fvjvPFDMf3uTzX9/lMpncmz8zmTd/5t68e/eGWcCv70B+/AmbKUQAefODbV+SNvc54RHFT1td6Z4LvY92ftQeFMb759mzw1G7MOidfx8Mzvd+z3bz+fPCQXHYPr0YZAeF3ge4xzN+MBj8u00HhXb3opAdDHo3Wdhe5zbvP0naHJfgTGC89m9J6nY+1x6cj+jknDuDvYtR4fr7gPT33nLdYnFBu3Cd+8b1Ie4Vd/7jR649/vMi2/5Cr2F/lL3K/fhx+4qTpM33kp0JcpWobud6hW7mw9d33Nlf4I8XP42mA1ro/k7Xaff3zukBxD3jLv96l2v3ioeF9kn24K+/hu/p9bu/XpR20rOcHj3v5gF5wJJcjAvj0SHQ/jf59uPgj7Pp4LrX62/QLvwxKIyQNsn+Nh62s3+MC6MvWa5QuOxytDC47QEnq9uDmA0lT5TIGXwx5YFSMpfpHvCjc3r2b+4o18+2p4N+t1BY0P6BtAdvf37AoGcc6lW7cE0P8h9oP58pfqKTu2kmSzvh2al/76gz4X67vd97m/lA+mC3h4Ne5nsbaRf7BGjn9wfjzMXgGi3JrAJ8xuECQ+1e/izbvaD9YhFp792pHCdLO5tkrSH/JWoucFx5QLdBnQfZ0Tl3dTih7XYWSsnr4kUWSslMZsL9PSiA99Gfx7tiuj0Yf//AHZzT7N9/H9xwhb//fpvbTDFZn4RcJ0n7ZlfrfT9gt4vnP3+eF7/+7OaLH37CNvdtlC+OfuLKTXhqv/jjqDvX3u5PLBC//SeT//bzy8+fP38/Ytv/3EoyWdr8OEkXMMZaR/HkwbpkEWxBHu0B28uw/5l5WJ2ah2Qwi+w8a1ydbV+WdiG5ie75YfRSRzHlVbSTYJCz5C59dwt+vxraia3ikB8e7K5T8pXQ5rjThNY6yh/tbtr1q6HN07MnzqveKvnMza7cP+4V0YaCMsbQ4MdKPvNpZ0UkXiN3tpd/CTmcJEwbxz6dZB7b5bgVdT6/PynsdNwOPxjtv4SMntHZtEn7wdvnufbnm+H6I34a4oVMP07GO2r8W7vGwkvIcy4bGC9o9/d+fzghHu7l4Goyen8ynA6nuVzuFr7tgoEhTm46HA6/vB8dfb5uZ3dVrVm/xn/6WCluslxb/nTvchsBnid8tjBo93q90/7nz1dHl6Pux5OTj7jW/MnFxew1+wo4h1/n79wFnvkIAc67o8ujyefP/WuIPG4P/leX8uezo8PF7ya0i90oh4w9Wza/hKfZLPsNhQL8D9rt8RgewkqAaq8Nwn6xYrD4yQo2OeXZ+vHrCl/4Mp23C/Hc/o/YBQB/z2tL1n7/gycbv8Py/FfwVQh/kOkuZ1FNipOUSILCc6Picvw03x6mP+aUpPDj3P4KMD85vNm9p5DKXHiuW/x95WPzg/PDqxR3QoKDcDcWiON709x1ijsR4elV8WLDC+H5g1xu8oifWUolpuDI9vz01jh7nj/9fnjS4+96b6k8Rwh3erG3f3dSA2mP8ofn/d7gt2wqu5HCoHd1cpi5uc/f47O90fQwM/zzTSq7kT+H+cPhqHd/PR2sdvvq0/4wl8pu5MfF6F9t7sHCEAwNtoL8lsouBJuI+O2Ox3+7WHllsg11KqmkkkoqqaSSSiqppJJKKqmk8g+T/wdSzaPC7eSa1wAAAABJRU5ErkJggg=="
          alt="YouTube Growth"
          className="w-full max-w-md lg:max-w-lg object-contain"
        />
      </div>

    </div>
  </div>

</section>

        </>
    );


};

export default YoutubeMarketing;
