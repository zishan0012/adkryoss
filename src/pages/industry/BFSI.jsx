import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BFSIImage from "../../assets/BFSI.jpeg";
import WhyChooseUsforBFSIMarketingImage from "../../assets/WhyChooseUsforBFSIMarketing.png";
import ConversionRateOptimizationImage from "../../assets/ConversionRateOptimization.png";
import SocialMediaBrandAuthorityImage from "../../assets/SocialMediaBrandAuthority.png";
import ContentMarketingThatBuildsTrustImage from "../../assets/ContentMarketingThatBuildsTrust.png";
import SEOforBFSIBrandsImage from "../../assets/SEOforBFSIBrands.png";
import WhyBFSINeedsSpecializedDigitalMarketingImage from "../../assets/WhyBFSINeedsSpecializedDigitalMarketing.png";

const BFSI = () => {
  const navigate = useNavigate();
  const [visibleSections, setVisibleSections] = useState({});

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.dataset.section]: true,
            }));
          } else {
            // Reset when out of view for re-animation on scroll up
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.dataset.section]: false,
            }));
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px", // Adjust trigger point
      }
    );

    // Observe all sections with data-section attribute
    document.querySelectorAll("[data-section]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section
        data-section="hero"
        className={`relative bg-cover bg-center bg-no-repeat py-24 min-h-[660px] flex items-center text-white overflow-hidden transition-all duration-700 ease-out ${visibleSections.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        style={{
          backgroundImage:
            "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-black/80 to-indigo-950/90"></div>

        {/* Animated Glow Effects */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-orange-500/30 rounded-full blur-3xl animate-float-slower"></div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 w-full relative z-10">

          {/* LEFT CONTENT */}
          <div className="text-left max-w-[600px] space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
                BFSI Digital Marketing Services
              </span>
            </h2>

            <h3 className="text-xl md:text-2xl font-semibold leading-snug mb-6 text-blue-100 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Accelerate Growth. Strengthen Trust. Lead the Digital-First Financial Era.
            </h3>

            <p className="text-gray-200 text-md leading-relaxed max-w-[600px] animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              The BFSI sector is evolving faster than ever. Customers expect seamless digital journeys, instant responses, data security, and personalized financial experiences.
              <br /><br />
              <span className="font-bold text-white">
                Adkryoss managed by Clink Consultancy Services Private Limited
              </span>{" "}
              helps banks, NBFCs, fintech brands, insurance providers, and investment firms scale with performance-driven, compliance-ready digital marketing strategies.
              <br /><br />
              We don't just generate traffic — we build credibility, qualified leads, and long-term customer value.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center md:justify-end animate-float" style={{ animationDelay: "0.4s" }}>
            <div className="relative group w-full max-w-[420px] h-[260px] sm:h-[300px] md:h-[340px] flex items-center justify-center">
              {/* Image Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-500"></div>

              <img
                src={BFSIImage}
                alt="BFSI Digital Marketing"
                loading="lazy"
                className="relative max-w-full max-h-full object-contain rounded-xl shadow-2xl 
                           transform group-hover:-translate-y-2 transition duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY BFSI NEEDS SPECIALIZED DIGITAL MARKETING */}
      <section
        data-section="why-special"
        className={`bg-gradient-to-r from-gray-50 to-blue-50 py-20 px-6 transition-all duration-700 ease-out ${visibleSections["why-special"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-fade-in-right">
              Why BFSI Needs Specialized Digital Marketing
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 animate-fade-in-right" style={{ animationDelay: "0.1s" }}>
              Financial services marketing is not like any other industry. It demands:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "High-trust communication",
                "Regulatory compliance awareness",
                "Data-driven personalization",
                "Precision targeting",
                "Long conversion journey nurturing",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start text-gray-700 animate-fade-in-right" style={{ animationDelay: `${0.2 + idx * 0.1}s` }}>
                  <span className="text-blue-600 font-bold mr-3">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-gray-700 leading-relaxed animate-fade-in-right" style={{ animationDelay: "0.7s" }}>
              At <span className="font-semibold text-blue-700">
                Adkryoss managed by Clink Consultancy Services Private Limited
              </span>, we design digital ecosystems tailored specifically for BFSI brands —
              combining performance marketing, automation, analytics, and brand storytelling
              into one measurable growth engine.
            </p>
          </div>
          <div className="animate-float" style={{ animationDelay: "0.3s" }}>
            <img
              src={WhyBFSINeedsSpecializedDigitalMarketingImage}
              alt="BFSI Digital Marketing Strategy"
              loading="lazy"
              className="rounded-2xl shadow-xl w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* OUR BFSI DIGITAL MARKETING SOLUTIONS */}
      <section
        data-section="solutions"
        className={`bg-gray-50 py-20 px-6 md:px-20 transition-all duration-700 ease-out ${visibleSections.solutions ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a2540] animate-fade-in-up">
              Our BFSI Digital Marketing Solutions
            </h2>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Performance Marketing for Financial Lead Generation
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-xl font-semibold text-[#0a2540] mb-6 text-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              We Build ROI-Focused Campaigns For:
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                "Home Loans",
                "Personal Loans",
                "Credit Cards",
                "Insurance Policies",
                "Investment Products",
                "Mutual Funds",
                "Fintech Apps",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group relative bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden animate-fade-in-up"
                  style={{ animationDelay: `${0.3 + idx * 0.1}s` }}
                >
                  <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-600 to-orange-500"></div>
                  <div className="absolute bottom-0 left-0 h-1 w-full bg-blue-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
                  <p className="relative font-semibold text-gray-700 text-center">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-xl font-semibold text-[#0a2540] mb-6 text-center animate-fade-in-up" style={{ animationDelay: "1s" }}>
              Our Strategic Approach Includes:
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                "Advanced audience segmentation",
                "Funnel-based campaign structuring",
                "AI-driven bidding strategies",
                "Landing page optimization",
                "Conversion rate optimization (CRO)",
                "Real-time campaign tracking",
              ].map((point, idx) => (
                <div
                  key={idx}
                  className="group relative flex items-start bg-white rounded-xl p-6 shadow-md overflow-hidden transition-all duration-500 animate-fade-in-up"
                  style={{ animationDelay: `${1.1 + idx * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
                  <div className="absolute bottom-0 left-0 h-1 w-full bg-blue-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
                  <span className="relative text-blue-600 font-bold mr-4 text-lg">✓</span>
                  <p className="relative text-gray-700">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#0a2540] text-white text-center py-6 rounded-2xl shadow-lg animate-fade-in-up" style={{ animationDelay: "1.8s" }}>
            <p className="text-lg font-medium text-white">
              Every campaign is optimized for quality leads — not just clicks.
            </p>
          </div>
        </div>
      </section>

      {/* SEO FOR BFSI BRANDS */}
      <section
        data-section="seo"
        className={`bg-white py-20 px-6 transition-all duration-700 ease-out ${visibleSections.seo ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-float" style={{ animationDelay: "0.2s" }}>
            <img
              src={SEOforBFSIBrandsImage}
              alt="SEO for BFSI Brands"
              loading="lazy"
              className="rounded-2xl shadow-xl w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-fade-in-left">
              SEO for BFSI Brands
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 animate-fade-in-left" style={{ animationDelay: "0.1s" }}>
              Search visibility is critical in finance. Customers research extensively before making decisions.
            </p>
            <p className="text-gray-700 mb-4 font-medium animate-fade-in-left" style={{ animationDelay: "0.2s" }}>
              Our BFSI SEO strategy focuses on:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "High-intent keyword targeting",
                "Authority-driven content marketing",
                "E-E-A-T optimization (Experience, Expertise, Authority, Trust)",
                "Technical SEO for secure and fast websites",
                "Structured data for financial products",
                "Local SEO for branch-based businesses",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start text-gray-700 animate-fade-in-left" style={{ animationDelay: `${0.3 + idx * 0.1}s` }}>
                  <span className="text-blue-600 font-bold mr-3">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-gray-800 leading-relaxed animate-fade-in-left" style={{ animationDelay: "0.9s" }}>
              At <span className="font-semibold text-blue-700">
                Adkryoss managed by Clink Consultancy Services Private Limited
              </span>, we ensure your brand ranks not just higher — but smarter.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT MARKETING THAT BUILDS TRUST */}
      <section
        data-section="content"
        className={`bg-gray-50 py-20 px-6 transition-all duration-700 ease-out ${visibleSections.content ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
              Content Marketing That Builds Trust
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Financial decisions require confidence.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                "Educational blogs",
                "Explainer guides",
                "Financial calculators content",
                "Case studies",
                "Whitepapers",
                "Investor-focused content",
                "Email nurture sequences",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
                >
                  <p className="font-medium text-gray-800">{item}</p>
                </div>
              ))}
            </div>
            <div className="animate-float" style={{ animationDelay: "0.9s" }}>
              <img
                src={ContentMarketingThatBuildsTrustImage}
                alt="Financial Content Marketing"
                loading="lazy"
                className="rounded-2xl shadow-xl w-full object-cover"
              />
            </div>
          </div>
          <div className="text-center max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: "1s" }}>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our content framework focuses on
              <span className="font-semibold text-blue-700"> clarity</span>,
              <span className="font-semibold text-blue-700"> compliance</span>, and
              <span className="font-semibold text-blue-700"> conversion</span>.
            </p>
          </div>
        </div>
      </section>

      {/* SOCIAL MEDIA & BRAND AUTHORITY */}
      <section
        data-section="social"
        className={`bg-gradient-to-r from-blue-50 to-white py-20 px-6 transition-all duration-700 ease-out ${visibleSections.social ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-fade-in-right">
              Social Media & Brand Authority
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 animate-fade-in-right" style={{ animationDelay: "0.1s" }}>
              BFSI brands need credibility and transparency on social platforms.
            </p>
            <p className="text-gray-800 font-medium mb-4 animate-fade-in-right" style={{ animationDelay: "0.2s" }}>
              We help you:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Build thought leadership",
                "Run performance ads on Meta, LinkedIn & Google",
                "Create fintech-focused content campaigns",
                "Launch awareness and lead gen campaigns",
                "Execute reputation management strategies",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start text-gray-700 animate-fade-in-right" style={{ animationDelay: `${0.3 + idx * 0.1}s` }}>
                  <span className="text-blue-600 font-bold mr-3">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-lg font-semibold text-blue-700 animate-fade-in-right" style={{ animationDelay: "0.8s" }}>
              Trust-building storytelling meets performance marketing.
            </p>
          </div>
          <div className="relative flex justify-center items-center animate-float" style={{ animationDelay: "0.3s" }}>
            <img
              src={SocialMediaBrandAuthorityImage}
              alt="Social Media Brand Authority"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* MARKETING AUTOMATION & LEAD NURTURING */}
      <section
        data-section="automation"
        className={`bg-white py-20 px-6 transition-all duration-700 ease-out ${visibleSections.automation ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              Marketing Automation & Lead Nurturing
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              The BFSI sales cycle is long. Strategic automation ensures prospects
              are nurtured with the right message at the right time.
            </p>
            <p className="text-gray-800 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              At <span className="font-semibold text-blue-700">
                Adkryoss managed by Clink Consultancy Services Private Limited
              </span>, we turn cold leads into loyal customers through strategic automation.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { title: "CRM Integration", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h10" /> },
              { title: "Email Automation Funnels", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l9 6 9-6M21 8v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8" /> },
              { title: "WhatsApp Marketing Flows", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 12a9 9 0 11-4-7.5L21 3l-1.5 4A8.96 8.96 0 0121 12z" /> },
              { title: "AI-Powered Chatbots", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6M9 16h4M4 6h16v12H4z" /> },
              { title: "Behavioral Retargeting", icon: <><circle cx="12" cy="12" r="9" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3" /></> },
              { title: "Lead Scoring Systems", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 17l-4-4 4-4M15 7l4 4-4 4" /> },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300 text-center animate-fade-in-up"
                style={{ animationDelay: `${0.3 + idx * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    {item.icon}
                  </svg>
                </div>
                <p className="text-gray-800 font-semibold">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONVERSION RATE OPTIMIZATION */}
      <section
        data-section="cro"
        className={`bg-blue-50 py-20 px-6 transition-all duration-700 ease-out ${visibleSections.cro ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-fade-in-right">
              Conversion Rate Optimization (CRO)
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 animate-fade-in-right" style={{ animationDelay: "0.1s" }}>
              Financial products demand clarity. We optimize:
            </p>
            <ul className="space-y-4 mb-6">
              {[
                "Landing page structures",
                "Call-to-action placement",
                "Form UX",
                "Mobile-first performance",
                "Trust badges & compliance signals",
                "A/B testing frameworks",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start text-gray-700 animate-fade-in-right" style={{ animationDelay: `${0.2 + idx * 0.1}s` }}>
                  <span className="text-blue-600 font-bold mr-3">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-lg font-semibold text-blue-700 animate-fade-in-right" style={{ animationDelay: "0.8s" }}>
              Because in BFSI, even a 1% increase in conversion can mean massive revenue growth.
            </p>
          </div>
          <div className="flex justify-center animate-float" style={{ animationDelay: "0.3s" }}>
            <img
              src={ConversionRateOptimizationImage}
              alt="Conversion rate optimization dashboard and analytics"
              loading="lazy"
              className="rounded-2xl shadow-xl w-full max-w-md"
            />
          </div>
        </div>
      </section>

      {/* OUR STRATEGIC APPROACH */}
      <section
        data-section="process"
        className={`bg-white py-20 px-6 transition-all duration-700 ease-out ${visibleSections.process ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
              Our Strategic Approach
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              We follow a structured yet agile growth model:
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-14">
            {[
              "Market & Compliance Research",
              "Audience & Persona Mapping",
              "Channel Strategy & Funnel Planning",
              "Creative & Content Deployment",
              "Performance Optimization",
              "Analytics & Revenue Tracking",
            ].map((step, idx) => (
              <div
                key={idx}
                className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 relative animate-fade-in-up"
                style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
              >
                <div className="absolute -top-4 left-6 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold shadow-md">
                  {idx + 1}
                </div>
                <p className="text-gray-800 font-medium mt-6">{step}</p>
              </div>
            ))}
          </div>
          <div className="text-center max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
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

      {/* INDUSTRIES WE SERVE IN BFSI */}
      <section
        data-section="industries"
        className={`bg-gray-50 py-20 px-6 transition-all duration-700 ease-out ${visibleSections.industries ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
              Industries We Serve in BFSI
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Delivering growth-focused digital strategies across the entire financial ecosystem.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 mb-14">
            {[
              { title: "Retail Banking", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 10l9-7 9 7v9a2 2 0 01-2 2h-4v-6H9v6H5a2 2 0 01-2-2z" /> },
              { title: "Corporate Banking", icon: <><rect x="3" y="7" width="18" height="13" rx="2" /><path strokeLinecap="round" strokeLinejoin="round" d="M16 3v4M8 3v4" /></> },
              { title: "Non Banking Financial Company", icon: <><circle cx="12" cy="12" r="9" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3" /></> },
              { title: "Insurance Providers", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z" /> },
              { title: "Fintech Startups", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /> },
              { title: "Investment & Wealth Management Firms", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 8-8" /> },
              { title: "Microfinance Institutions", icon: <><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-3 0-5 1.5-5 4s2 4 5 4 5-1.5 5-4-2-4-5-4z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2 12h2M20 12h2" /></> },
            ].map((industry, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-sm hover:bg-blue-100 max-w-70 hover:shadow-xl hover:-translate-y-1 transition duration-300 text-center animate-fade-in-up"
                style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    {industry.icon}
                  </svg>
                </div>
                <p className="text-gray-800 font-semibold text-lg">{industry.title}</p>
              </div>
            ))}
          </div>
          <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.9s" }}>
            <p className="text-blue-700 font-semibold text-lg">
              Shaping the future of finance through digital excellence.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US FOR BFSI MARKETING */}
      <section
        data-section="why-choose"
        className={`bg-gradient-to-b from-white to-blue-50 py-20 px-6 transition-all duration-700 ease-out ${visibleSections["why-choose"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-fade-in-right">
              Why Choose Us for BFSI Marketing?
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8 animate-fade-in-right" style={{ animationDelay: "0.1s" }}>
              At <span className="font-semibold text-blue-700">
                Adkryoss managed by Clink Consultancy Services Private Limited
              </span>, we combine deep industry insight with cutting-edge digital tools
              to create scalable growth systems for financial brands.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Performance-First Strategy",
                "Compliance-Conscious Campaigns",
                "Data-Driven Decision Making",
                "Transparent Reporting",
                "Dedicated Account Management",
                "ROI-Focused Execution",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start text-gray-800 animate-fade-in-right" style={{ animationDelay: `${0.2 + idx * 0.1}s` }}>
                  <span className="text-blue-600 font-bold mr-3">✓</span>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-blue-700 font-semibold text-lg animate-fade-in-right" style={{ animationDelay: "0.8s" }}>
              Shaping performance-driven growth for the future of finance.
            </p>
          </div>
          <div className="flex justify-center animate-float" style={{ animationDelay: "0.3s" }}>
            <img
              src={WhyChooseUsforBFSIMarketingImage}
              alt="Financial marketing strategy and analytics dashboard"
              loading="lazy"
              className="rounded-2xl shadow-xl w-full max-w-md"
            />
          </div>
        </div>
      </section>

      {/* THE FUTURE OF BFSI MARKETING IS DIGITAL */}
      <section
        data-section="future"
        className={`bg-gray-900 py-24 px-6 text-center transition-all duration-700 ease-out ${visibleSections.future ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight animate-fade-in-up">
            The Future of BFSI Marketing Is
            <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
              {" "}Digital
            </span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Open banking, AI-driven underwriting, fintech disruption, and hyper-personalization
            are redefining financial services. The brands that win are the ones that adapt faster.
          </p>
          <p className="text-white text-xl md:text-2xl font-semibold mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Your customers are online. Your growth should be too.
          </p>
          <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <button
              onClick={() => navigate("/contact")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition duration-300 shadow-lg hover:scale-105"
            >
              Book a Strategy Consultation
            </button>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        data-section="cta"
        className={`bg-gradient-to-r from-blue-800 to-indigo-800 py-16 px-6 text-white text-center transition-all duration-700 ease-out ${visibleSections.cta ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-white animate-fade-in-up">
            Let's Build a High-Performance Financial Growth Engine
          </h2>
          <p className="text-lg md:text-xl leading-relaxed mb-6 text-white animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Partner with
            <span className="font-bold"> Adkryoss managed by Clink Consultancy Services Private Limited </span>
            and transform your BFSI marketing into a measurable, scalable,
            and future-ready digital system.
          </p>
          <p className="text-lg md:text-xl font-semibold mb-8 text-white animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Ready to scale your financial brand? Let's start today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => navigate("/contact?service=bfsi")}
              className="bg-white text-blue-800 px-8 py-3 rounded-full font-semibold hover:scale-105 transition duration-300 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              Schedule a Strategy Call
            </button>
            <button
              onClick={() => navigate("/contact?service=bfsi")}
              className="border border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-800 transition duration-300 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              Request a Proposal
            </button>
          </div>
        </div>
      </section>

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(30px);
          }
        }

        @keyframes float-slower {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(40px);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in-left {
          animation: fadeInLeft 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in-right {
          animation: fadeInRight 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }

        .animate-scale-in {
          animation: scaleIn 0.4s ease-out forwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }

        .animate-float-slower {
          animation: float-slower 10s ease-in-out infinite;
        }

        /* Ensure animations play on scroll up by re-triggering */
        [data-section] {
          will-change: transform, opacity;
        }
      `}</style>
    </>
  );
};

export default BFSI;