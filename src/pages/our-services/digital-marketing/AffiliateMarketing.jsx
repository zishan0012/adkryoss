import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import AffiliateImage from "../../../assets/Affiliate.png";

const AffiliateMarketing = () => {
  const navigate = useNavigate();

  const data = [
    {
      title: "Strategy & Program Architecture",
      desc: "We define your commission structure, partner types, target markets, competitive positioning, and revenue objectives. Every affiliate program is customized based on margins, lifetime value (LTV), and acquisition cost benchmarks.",
      icon: (
        <svg className="w-16 h-16 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 3h18v2H3V3zm2 4h14v14H5V7zm2 2v10h10V9H7z" />
        </svg>
      ),
    },
    {
      title: "Platform Selection & Technical Setup",
      desc: "From network-based programs to in-house tracking solutions, we help you choose and integrate the right affiliate platform with accurate tracking, attribution, and fraud prevention.",
      icon: (
        <svg className="w-16 h-16 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4 4h16v16H4V4zm3 3v10h10V7H7z" />
        </svg>
      ),
    },
    {
      title: "Affiliate Recruitment & Onboarding",
      desc: "We identify high-quality publishers, influencers, niche content creators, media houses, and comparison portals relevant to your industry. Quality > Quantity.",
      icon: (
        <svg className="w-16 h-16 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.7 0 5-2.3 5-5S14.7 2 12 2 7 4.3 7 7s2.3 5 5 5zm-7 9v-2c0-2.7 5-4 7-4s7 1.3 7 4v2H5z" />
        </svg>
      ),
    },
    {
      title: "Campaign Activation & Optimization",
      desc: "We continuously monitor traffic quality, conversion rates, ROI, and commission efficiency. Data drives every decision.",
      icon: (
        <svg className="w-16 h-16 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 17h4v4H3v-4zm7-7h4v11h-4V10zm7-7h4v18h-4V3z" />
        </svg>
      ),
    },
    {
      title: "Reporting & Performance Scaling",
      desc: "Real-time dashboards, revenue insights, partner performance analysis, and optimization loops ensure scalable growth.",
      icon: (
        <svg className="w-16 h-16 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 3h18v2H3V3zm2 4h14v14H5V7zm3 3h8v2H8v-2zm0 4h5v2H8v-2z" />
        </svg>
      ),
    },
  ];

  const features = [
    {
      title: "Performance-First Model",
      desc: "Affiliate marketing is a performance channel — and we treat it like one. Every strategy is aligned with measurable outcomes: leads, sales, subscriptions, or app installs.",
      icon: (
        <svg
          className="w-16 h-16 transition duration-300"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M3 17h4v4H3v-4zm7-7h4v11h-4V10zm7-7h4v18h-4V3z" />
        </svg>
      ),
    },
    {
      title: "Data-Led Optimization",
      desc: "Using advanced analytics, attribution models, and cohort performance tracking, Adkryoss managed by Clink Consultancy Services Private Limited ensures that only high-performing affiliates receive scaling budgets.",
      icon: (
        <svg
          className="w-16 h-16 transition duration-300"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l4 7h-8l4-7zm0 9a7 7 0 110 14 7 7 0 010-14z" />
        </svg>
      ),
    },
    {
      title: "Fraud & Compliance Monitoring",
      desc: "We implement tracking validation, click fraud checks, brand safety filters, and policy compliance systems to protect your brand reputation.",
      icon: (
        <svg
          className="w-16 h-16 transition duration-300"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l8 4v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6l8-4z" />
        </svg>
      ),
    },
    {
      title: "Integrated Marketing Synergy",
      desc: "Affiliate marketing works best when aligned with SEO, Paid Media, Content Marketing, and Social campaigns. Our cross-channel approach ensures unified growth.",
      icon: (
        <svg
          className="w-16 h-16 transition duration-300"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M4 4h6v6H4V4zm10 0h6v6h-6V4zM4 14h6v6H4v-6zm10 3h6v3h-6v-3z" />
        </svg>
      ),
    },
  ];


  const services = [
    {
      title: "Affiliate Program Development",
      desc: "End-to-end program creation including commission structures, creative assets, landing page strategy, and partner activation.",
      icon: (
        <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 3h18v2H3V3zm2 4h14v14H5V7zm2 2v10h10V9H7z" />
        </svg>
      ),
    },
    {
      title: "Affiliate Network Management",
      desc: "Complete affiliate lifecycle management — recruitment, relationship management, commission optimization, and dispute handling.",
      icon: (
        <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.7 0 5-2.3 5-5S14.7 2 12 2 7 4.3 7 7s2.3 5 5 5zm-7 9v-2c0-2.7 5-4 7-4s7 1.3 7 4v2H5z" />
        </svg>
      ),
    },
    {
      title: "Influencer & Content Publisher Partnerships",
      desc: "Connecting your brand with high-impact creators and performance-based influencers across YouTube, Instagram, blogs, and niche communities.",
      icon: (
        <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 8V7l-3 2-2-2-5 5-3-3-5 5v3h18v-9z" />
        </svg>
      ),
    },
    {
      title: "Coupon & Cashback Partnerships",
      desc: "Strategic collaborations with deal platforms and cashback networks to drive transactional volume without harming brand value.",
      icon: (
        <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 1l3 6 6 .9-4.5 4.3 1 6L12 16l-5.5 2.2 1-6L3 7.9 9 7l3-6z" />
        </svg>
      ),
    },
    {
      title: "B2B Affiliate & SaaS Partnerships",
      desc: "Partner ecosystem development for lead-based or subscription-based models.",
      icon: (
        <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4 4h6v6H4V4zm10 0h6v6h-6V4zM4 14h6v6H4v-6zm10 0h6v6h-6v-6z" />
        </svg>
      ),
    },
    {
      title: "International Affiliate Expansion",
      desc: "Scale your affiliate network across global markets with geo-specific publishers and localized commission models.",
      icon: (
        <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 17.9V18h-2v1.9A8 8 0 014 13h2v-2H4a8 8 0 017-6.9V6h2V4.1A8 8 0 0120 11h-2v2h2a8 8 0 01-7 6.9z" />
        </svg>
      ),
    },
  ];



  const industries = [
    {
      title: "E-Commerce & D2C Brands",
      icon: (
        <svg className="w-12 h-12 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7 4h-2l-1 2H1v2h2l3.6 7.6-1.35 2.45A2 2 0 007 21h12v-2H7.42a.25.25 0 01-.22-.37L8.1 17h7.45a2 2 0 001.8-1.1L21 8H6.21l-.94-2z" />
        </svg>
      ),
    },
    {
      title: "Fintech & Banking",
      icon: (
        <svg className="w-12 h-12 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7v2h20V7L12 2zm-7 9h2v7H5v-7zm4 0h2v7H9v-7zm4 0h2v7h-2v-7zm4 0h2v7h-2v-7z" />
        </svg>
      ),
    },
    {
      title: "EdTech & Online Learning Platforms",
      icon: (
        <svg className="w-12 h-12 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 13L3.74 10 12 5.5 20.26 10 12 16z" />
        </svg>
      ),
    },
    {
      title: "SaaS & Technology Companies",
      icon: (
        <svg className="w-12 h-12 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4 4h6v6H4V4zm10 0h6v6h-6V4zM4 14h6v6H4v-6zm10 0h6v6h-6v-6z" />
        </svg>
      ),
    },
    {
      title: "Healthcare & Wellness",
      icon: (
        <svg className="w-12 h-12 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 21s-6-4.35-9-8.5C.5 9.5 2.5 5 6.5 5c2.1 0 3.5 1.5 3.5 1.5S11.4 5 13.5 5C17.5 5 19.5 9.5 21 12.5 18 16.65 12 21 12 21z" />
        </svg>
      ),
    },
    {
      title: "Real Estate",
      icon: (
        <svg className="w-12 h-12 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3l9 8h-3v9h-4v-6H10v6H6v-9H3l9-8z" />
        </svg>
      ),
    },
    {
      title: "Travel & Hospitality",
      icon: (
        <svg className="w-12 h-12 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M2.5 19l19-7-19-7v5l13 2-13 2v5z" />
        </svg>
      ),
    },
  ];



  const steps = [
    "Discover",
    "Strategize",
    "Build",
    "Launch",
    "Optimize",
    "Scale",
  ];


  const points = [
    "ROI-focused execution",
    "Transparent reporting",
    "Dedicated affiliate managers",
    "AI-assisted performance tracking",
    "Continuous partner relationship development",
    "Revenue-first mindset",
  ];


  const trends = [
    {
      title: "Creator-led Commerce",
      icon: (
        <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path d="M15 8h.01M12 12l3 3m0 0l3-3m-3 3V3M4 21h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Micro-influencer Partnerships",
      icon: (
        <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path d="M17 20h5V4H2v16h5m10 0v-4a4 4 0 00-8 0v4m8 0H9" />
        </svg>
      ),
    },
    {
      title: "AI-driven Partner Discovery",
      icon: (
        <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path d="M12 2v4m0 12v4m8-8h-4M4 12H0m15.364-6.364l-2.828 2.828M6.464 17.536l-2.828 2.828m12.728 0l-2.828-2.828M6.464 6.464L3.636 3.636" />
        </svg>
      ),
    },
    {
      title: "First-party Data Tracking",
      icon: (
        <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path d="M9 17v-6h6v6m-9 4h12a2 2 0 002-2V7l-8-4-8 4v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Cookieless Attribution Models",
      icon: (
        <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
        </svg>
      ),
    },
    {
      title: "Performance-based Influencer Marketing",
      icon: (
        <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path d="M3 17l6-6 4 4 8-8M14 7h7v7" />
        </svg>
      ),
    },
  ];

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

      <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
        Affiliate Marketing Services
      </h2>

      <h3 className="text-2xl md:text-3xl font-semibold leading-snug">
        Performance-Driven Growth. Revenue That Scales.
      </h3>

      <p className="text-white md:text-md leading-relaxed max-w-[600px]">
        Turn partnerships into predictable profit.
        <br />
        We build, launch, and scale high-performing affiliate programs that drive measurable revenue — not just traffic.
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

   

     <div className="flex justify-center lg:justify-end mt-10 lg:mt-0">
        <div className="w-full max-w-[400px] h-[260px] sm:h-[300px] md:h-[320px] flex items-center justify-center">
        <img
          src={AffiliateImage}
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
            "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 w-full relative z-10">

          <div className="text-left text-white space-y-6">

            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
              Affiliate Marketing Services
            </h2>

            <h3 className="text-2xl md:text-3xl font-semibold leading-snug">
              Performance-Driven Growth. Revenue That Scales.
            </h3>

            <p className="text-white md:text-md leading-relaxed max-w-[600px]">
              Turn partnerships into predictable profit.
              <br />
              We build, launch, and scale high-performing affiliate programs that drive measurable revenue — not just traffic.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Link
                to="/contact"
                className="bg-white text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-center"
              >
                Speak to Our Expert →
              </Link>
              <Link
                to="#services"
                className="border-2 border-blue-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:text-black hover:-translate-y-1 hover:shadow-xl text-center"
              >
                Our Services →
              </Link>
            </div>



          </div>

          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-[400px] h-[260px] sm:h-[300px] md:h-[320px] flex items-center justify-center">
              <img
                src={AffiliateImage}
                alt="Section Image"
                className="max-w-full max-h-full object-contain rounded-xl shadow-lg"
              />
            </div>
          </div>

        </div>
      </section>


      <section id="services" className="w-full bg-gray-50 py-24 px-6 md:px-16 lg:px-24">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Why Affiliate Marketing Is a Growth Multiplier
            </h2>

            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Affiliate marketing is no longer just about bloggers and coupon sites.
                Today, it’s a full-funnel, performance-led ecosystem powered by creators,
                publishers, influencers, comparison portals, and niche communities.
              </p>

              <p>
                When structured correctly, affiliate marketing becomes:
              </p>
            </div>

            {/* Benefits */}
            <div className="mt-8 space-y-4">

              <div className="flex items-start gap-4">
                <div className="bg-[#198754] text-white p-2 rounded-full">
                  ✓
                </div>
                <p className="text-gray-800 font-medium">
                  A low-risk acquisition channel
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#198754] text-white p-2 rounded-full">
                  ✓
                </div>
                <p className="text-gray-800 font-medium">
                  A cost-efficient revenue driver
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#198754] text-white p-2 rounded-full">
                  ✓
                </div>
                <p className="text-gray-800 font-medium">
                  A scalable performance engine
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#198754] text-white p-2 rounded-full">
                  ✓
                </div>
                <p className="text-gray-800 font-medium">
                  A data-backed brand expansion strategy
                </p>
              </div>

            </div>

            <p className="mt-8 text-gray-600 leading-relaxed">
              At <span className="font-semibold text-gray-900">Adkryoss Clink Consultancy Services Private Limited,</span> managed by
              we design affiliate ecosystems
              that align with your business goals — whether you’re an e-commerce brand,
              fintech startup, SaaS company, education platform, or enterprise business.
            </p>
          </div>

          {/* RIGHT IMAGE / SVG */}
          <div className="flex justify-center">
            <img
              src="data:image/jpeg;base64,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"
              alt="Affiliate Marketing Ecosystem"
              className="w-full max-w-lg"
            />
          </div>

        </div>

      </section>



      <section className="px-8 md:px-16 lg:px-24 py-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Our Approach to Affiliate Marketing
        </h2>

        <p className="text-lg mb-12">
          We don’t just onboard affiliates. <br />
          We build a performance framework.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <div
              key={index}
              className={`bg-blue-50 p-8 rounded-2xl shadow-sm ${index >= 3 ? "md:col-span-1" : ""
                }`}
            >
              {item.icon}
              <h3 className="text-xl font-semibold mt-6">{item.title}</h3>
              <p className="text-gray-600 mt-4 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>


      <section className="px-8 md:px-16 lg:px-24 py-20 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          What Makes Our Affiliate Marketing Different?
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex gap-6 p-8 rounded-2xl bg-blue-50 hover:bg-emerald-600 transition duration-300 group"
            >
              <div className="flex-shrink-0">
                {/* <div className="group-hover:text-white transition duration-300">
                {item.icon}
              </div> */}

                <div className="text-emerald-600 group-hover:text-white transition duration-300">
                  {item.icon}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 group-hover:text-white transition duration-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>



      <section className="px-8 md:px-16 lg:px-24 py-10 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold mb-14">
          Our Affiliate Marketing Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-white shadow-sm hover:bg-emerald-600 transition duration-300"
            >
              {/* ICON */}
              <div className="text-emerald-600 group-hover:text-white transition duration-300">
                {item.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-semibold mt-6 group-hover:text-white transition duration-300">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-600 mt-4 leading-relaxed group-hover:text-white transition duration-300">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>



      <section className="px-8 md:px-16 lg:px-24 py-10 bg-white">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Industries We Serve
        </h2>

        <p className="text-lg mb-12">
          We design affiliate growth systems for:
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {industries.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-6 border border-gray-200 rounded-xl"
            >
              {item.icon}
              <h3 className="text-lg font-medium">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        <p className="mt-14 text-gray-600 leading-relaxed max-w-4xl">
          Each industry demands a different commission logic, attribution model,
          and partner ecosystem — and we build accordingly.
        </p>
      </section>







      {/* <section className="px-8 md:px-16 lg:px-24 py-10 bg-gray-300">

   
      <h2 className="text-3xl md:text-5xl font-bold mb-12">
        Our Process Framework
      </h2>

      
      <div className="flex flex-wrap items-center gap-4 text-lg md:text-xl font-semibold mb-4 ml-70 ">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <span className="text-gray-800">{step}</span>
            {index !== steps.length - 1 && (
              <span className="text-emerald-600 text-2xl font-bold">→</span>
            )}
          </React.Fragment>
        ))}
      </div>

      
      <div className="w-full mb-14">
        <img
          src="data:image/jpeg;base64,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"
          alt="Process Framework"
          className="w-1000 h-100 rounded-xl shadow-md"
        />
      </div>

      
      <div className="max-w-4xl text-black space-y-6 leading-relaxed text-lg">
        <p className='text-black'>
          We begin with market intelligence and competitor analysis.
          Then we structure your affiliate model around profitability and sustainability.
        </p>

        <p className='text-black'>
          After launch, we optimize weekly, analyze monthly, and scale quarterly.
        </p>

        <p className="font-medium text-gray-900">
          Affiliate marketing isn’t a one-time setup. It’s a long-term revenue channel.
        </p>
      </div>

    </section> */}



      <section className="px-4 sm:px-8 md:px-16 lg:px-24 py-8 sm:py-10 bg-gray-300 overflow-hidden">

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-8 sm:mb-12 text-center md:text-left">
          Our Process Framework
        </h2>

        {/* Steps Row */}
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 sm:gap-4 
                  text-sm sm:text-base md:text-xl font-semibold mb-6">

          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <span className="text-gray-800 break-words">{step}</span>
              {index !== steps.length - 1 && (
                <span className="text-emerald-600 text-lg sm:text-xl md:text-2xl font-bold">
                  →
                </span>
              )}
            </React.Fragment>
          ))}

        </div>

        {/* Image */}
        <div className="w-full mb-8 sm:mb-14 flex justify-center">
          <img
            src="data:image/jpeg;base64,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"
            alt="Process Framework"
            className="w-full max-w-5xl h-auto rounded-xl shadow-md"
          />
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto md:mx-0 text-black space-y-4 sm:space-y-6 
                  leading-relaxed text-sm sm:text-base md:text-lg">

          <p className='text-black'>
            We begin with market intelligence and competitor analysis.
            Then we structure your affiliate model around profitability and sustainability.
          </p>

          <p className='text-black'>
            After launch, we optimize weekly, analyze monthly, and scale quarterly.
          </p>

          <p className="font-medium text-gray-900">
            Affiliate marketing isn’t a one-time setup. It’s a long-term revenue channel.
          </p>

        </div>

      </section>


      <section className="px-8 md:px-16 lg:px-24 py-14 bg-gray-50">

        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Why Choose Us?
        </h2>

        {/* Intro */}
        <p className="text-lg text-gray-700 max-w-4xl mb-14 leading-relaxed">
          At Adkryoss managed by Clink Consultancy Services Private Limited,
          affiliate marketing is treated as a strategic performance channel —
          not a side activity.
        </p>

        {/* Points Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-14">
          {points.map((point, index) => (
            <div key={index} className="flex items-start gap-4">
              {/* Check Icon */}
              <div className="flex-shrink-0 mt-1">
                <svg
                  className="w-6 h-6 text-emerald-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 16.2l-3.5-3.5L4 14.2l5 5 11-11-1.5-1.5z" />
                </svg>
              </div>

              <p className="text-lg font-medium text-gray-800">
                {point}
              </p>
            </div>
          ))}
        </div>

        {/* Closing Statement */}
        <div className="max-w-3xl">
          <p className="text-xl font-semibold text-gray-900">
            We don’t chase vanity metrics. We focus on revenue growth.
          </p>
        </div>

      </section>



      <section className="px-8 md:px-16 lg:px-24 py-14 bg-white">

        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Future-Ready Affiliate Marketing
        </h2>

        {/* Intro */}
        <p className="text-lg text-gray-700 mb-14 max-w-3xl">
          The affiliate landscape is evolving:
        </p>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {trends.map((trend, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition duration-300"
            >
              <div className="mb-6">{trend.icon}</div>

              <h3 className="text-lg font-semibold text-gray-900 leading-snug">
                {trend.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Closing Statement */}
        <div className="max-w-3xl">
          <p className="text-lg text-gray-700 leading-relaxed">
            Our strategies are built to adapt to these changes, ensuring long-term scalability.
          </p>
        </div>

      </section>


      <section className="px-8 md:px-16 lg:px-24 py-24 bg-blue-600 text-white text-center rounded-t-3xl">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-snug">
          Let’s Build a Revenue Engine
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-6 leading-relaxed text-emerald-50">
          Affiliate marketing can become your most profitable channel — when executed strategically.
        </p>

        <p className="text-lg max-w-3xl mx-auto mb-12 leading-relaxed text-emerald-100">
          If you're ready to turn partnerships into predictable growth,
          Adkryoss managed by Clink Consultancy Services Private Limited is ready to lead the way.
        </p>

        {/* CTA Button */}
        <button
          onClick={() => navigate("/contact?service=affiliate")}
          className="bg-white text-black font-semibold px-10 py-4 rounded-full text-lg hover:bg-gray-100 transition duration-300 shadow-md">
          Start Scaling with Performance Partnerships Today
        </button>

      </section>

    </>
  );
};

export default AffiliateMarketing;
