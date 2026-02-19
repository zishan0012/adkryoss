import React from 'react';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import YoutubeImage from "../../../assets/Youtube.png";

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
     



 <section
  className="bg-cover bg-center bg-no-repeat py-16 h-120 md:py-20"
  style={{
    backgroundImage:
      "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')",
  }}
>
  <div className="max-w-8xl mx-auto px-6  grid md:grid-cols-2 items-center gap-12">

    {/* LEFT CONTENT */}
    <div className="text-left text-white space-y-6 mt-[-15px] ml-20">

      {/* H2 Heading */}
      <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white w-200">
       YouTube Video Marketing Services 
      </h2>

      {/* H3 Subheading */}
      <h3 className="text-2xl md:text-3xl font-semibold leading-snug">
        Turn Views into Revenue. Subscribers into Brand Advocates. 
      </h3>

      {/* Paragraph */}
      <p className="text-white md:text-md leading-relaxed">
     Video isn’t the future. It’s the present. <br />
If your business isn’t dominating YouTube, you’re leaving attention—and money—on the table. <br />

At Adkryoss managed by Clink Consultancy Services Private Limited, we build performance-driven YouTube marketing strategies that go beyond views. We engineer discoverability, engagement, and conversions through data-backed video SEO, intelligent advertising, and creative storytelling. 
      </p>

    </div>

    {/* RIGHT IMAGE */}
    <div className="flex justify-center md:justify-end hide-below-790">
      <img
        src={YoutubeImage}
        alt="About Adkryoss"
        className="w-56 md:w-80 rounded-xl shadow-lg mr-10"
      />
    </div>

  </div>
</section>

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
        src="data:image/png;base64,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"
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
          
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWc1o7aCF5T2MfaACLgyN2_22CR4R1zj8pGg&s"
        },
        {
          title: "EdTech platforms building authority",
       
          img: "data:image/jpeg;base64,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"
        },
        {
          title: "SaaS startups generating inbound leads ",
        
          img: "data:image/jpeg;base64,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"
        },
        {
          title: "Healthcare & service brands creating trust",
         
          img: "data:image/png;base64,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"
        },
        {
          title: "Personal brands building thought leadership ",
          
          img: "data:image/jpeg;base64,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"
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
          src="data:image/png;base64,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"
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
          // src="data:image/png;base64,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"
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
