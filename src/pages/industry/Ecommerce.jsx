import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EcommerceImage from "../../assets/Ecommerce.png";
import TheEcommerceGrowthChallengeImage from "../../assets/TheEcommerceGrowthChallenge.png";
import WhyChooseAdkryossImage from "../../assets/WhyChooseAdkryoss.png";
import FashionApparelImage from "../../assets/FashionApparel.png";
import BeautyCosmeticsImage from "../../assets/BeautyCosmetics.png";
import ElectronicsGadgetsImage from "../../assets/ElectronicsGadgets.png";
import FMCGGroceryImage from "../../assets/FMCGGrocery.png";
import HomeFurnitureImage from "../../assets/HomeFurniture.png";
import LuxuryLifestyleBrandsImage from "../../assets/LuxuryLifestyleBrands.png";
import ShopifyImage from "../../assets/Shopify.png";
import WooImage from "../../assets/Woo.png";
import BigImage from "../../assets/Big.png";
import FlipkartImage from "../../assets/Flipkart.png";
import AmazonImage from "../../assets/Amazon.png";
import MazentoImage from "../../assets/Mazento.png";
import IncreasedOrganicRevenueImage from "../../assets/IncreasedOrganicRevenue.png";
import HigherROASImage from "../../assets/HigherROAS.png";
import ReducedAcquisitionCostImage from "../../assets/ReducedAcquisitionCost.png";
import ImprovedConversionRatesImage from "../../assets/ImprovedConversionRates.png";
import EnhancedCustomerLifetimeValueImage from "../../assets/EnhancedCustomerLifetimeValue.png";
import HealthcareWellnessImage from "../../assets/HealthcareWellness.png";

const Ecommerce = () => {
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
        className={`relative bg-cover bg-center bg-no-repeat py-24 min-h-[660px] flex items-center text-white overflow-hidden transition-all duration-700 ease-out ${
          visibleSections.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
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
                Ecommerce Digital Marketing Services
              </span>
            </h2>

            <h3 className="text-xl md:text-2xl font-semibold leading-snug mb-6 text-blue-100 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Drive Sales. Scale Faster. Dominate Marketplaces.
            </h3>

            <p className="text-gray-200 text-md leading-relaxed max-w-[600px] animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              The ecommerce landscape is evolving at lightning speed. Competition is fierce, customer journeys are fragmented, and performance marketing costs are rising.
              <br /><br />
              <span className="font-bold text-white">
                At Adkryoss managed by Clink Consultancy Services Private Limited
              </span>{" "}
              we build high-performance ecommerce marketing ecosystems that increase visibility, improve conversion rates, and maximize customer lifetime value. From SEO and paid media to CRO and retention automation — we engineer growth that compounds.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center md:justify-end">
            <div className="relative group w-full max-w-[420px] h-[260px] sm:h-[300px] md:h-[340px] flex items-center justify-center animate-float" style={{ animationDelay: "0.4s" }}>
              {/* Image Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-500"></div>

              <img
                src={EcommerceImage}
                alt="Ecommerce Digital Marketing Services"
                loading="lazy"
                className="relative max-w-full max-h-full object-contain rounded-xl shadow-2xl 
                           transform group-hover:-translate-y-2 transition duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* THE ECOMMERCE GROWTH CHALLENGE */}
      <section
        data-section="challenge"
        className={`bg-white py-16 sm:py-20 px-4 sm:px-6 transition-all duration-700 ease-out ${
          visibleSections.challenge ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-gray-900 mb-8 animate-fade-in-right">
              The Ecommerce Growth Challenge
            </h2>
            <p className="text-gray-600 mb-8 text-base sm:text-lg animate-fade-in-right" style={{ animationDelay: "0.1s" }}>
              Ecommerce brands today struggle with:
            </p>
            <div className="space-y-6">
              {[
                { text: "Rising CAC (Customer Acquisition Cost)", icon: <><path d="M3 17l6-6 4 4 8-8" /><path d="M14 7h7v7" /></> },
                { text: "Low conversion rates", icon: <><circle cx="12" cy="12" r="9" /><path d="M12 8v8M8 12h8" /></> },
                { text: "Cart abandonment", icon: <><path d="M6 6h15l-1.5 9h-13z" /><circle cx="9" cy="20" r="1" /><circle cx="18" cy="20" r="1" /></> },
                { text: "Marketplace dependency", icon: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M8 12h8" /></> },
                { text: "Poor repeat purchase rates", icon: <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" /> },
                { text: "Ineffective attribution tracking", icon: <path d="M4 20V10M10 20V4M16 20v-6M22 20V14" /> },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 animate-fade-in-right" style={{ animationDelay: `${0.2 + idx * 0.1}s` }}>
                  <svg className="w-6 h-6 text-red-600 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    {item.icon}
                  </svg>
                  <p className="text-gray-700">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 space-y-6">
              <p className="text-lg font-semibold text-gray-900 animate-fade-in-right" style={{ animationDelay: "0.8s" }}>
                Random campaigns don't scale ecommerce businesses. Data-driven ecosystems do.
              </p>
              <p className="text-gray-700 leading-relaxed animate-fade-in-right" style={{ animationDelay: "0.9s" }}>
                That's where <span className="font-semibold text-gray-900">
                  Adkryoss managed by Clink Consultancy Services Private Limited
                </span> steps in — combining strategy, creativity, automation, and performance analytics into one integrated growth engine.
              </p>
            </div>
          </div>
          <div className="relative animate-float" style={{ animationDelay: "0.3s" }}>
            <img
              src={TheEcommerceGrowthChallengeImage}
              alt="Ecommerce Growth Strategy"
              loading="lazy"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* OUR ECOMMERCE DIGITAL MARKETING SOLUTIONS */}
      <section
        data-section="solutions"
        className={`bg-gray-50 py-16 sm:py-20 px-4 sm:px-6 transition-all duration-700 ease-out ${
          visibleSections.solutions ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              Our Ecommerce Digital Marketing Solutions
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              We create performance-led strategies tailored for D2C brands, marketplaces, omnichannel retailers, and global ecommerce businesses.
            </p>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Ecommerce SEO Services",
                desc1: "Search is still the most profitable long-term acquisition channel.",
                items: ["Product pages", "Category pages", "Technical SEO", "Core Web Vitals", "Structured data & schema", "Marketplace SEO (Amazon, Flipkart, etc.)"],
                desc2: "Our SEO framework ensures higher rankings, improved organic revenue, and scalable traffic growth.",
                icon: <><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.3-4.3" /></>,
              },
              {
                title: "Performance Marketing (Paid Media)",
                desc1: "Growth requires precision targeting and smart bidding.",
                items: ["Google Shopping & Performance Max", "Meta (Facebook & Instagram) Ads", "YouTube Commerce Ads", "Marketplace Advertising", "Retargeting & Dynamic Product Ads"],
                desc2: "Our data-backed paid strategies focus on ROAS optimization, audience segmentation, and full-funnel targeting.",
                icon: <><path d="M3 17l6-6 4 4 8-8" /><path d="M14 7h7v7" /></>,
              },
              {
                title: "Conversion Rate Optimization (CRO)",
                desc1: "Traffic without conversions is wasted potential.",
                items: ["Product page UX", "Checkout optimization", "Heatmap & behavior analysis", "A/B testing", "Mobile-first experiences"],
                desc2: "By analyzing user behavior and removing friction points, we boost conversions and average order value.",
                icon: <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />,
              },
              {
                title: "Marketplace Growth & Optimization",
                desc1: "Marketplaces are competitive battlegrounds.",
                items: ["Product listing optimization", "Keyword-rich content creation", "Pricing strategy", "Ad campaign management", "Inventory & reputation optimization"],
                desc2: "Our marketplace experts ensure better visibility and higher conversion performance.",
                icon: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M8 12h8" /></>,
              },
              {
                title: "Ecommerce Content & Creative Strategy",
                desc1: "Modern ecommerce thrives on storytelling.",
                items: ["High-converting product descriptions", "Performance ad creatives", "Video commerce strategy", "Influencer & UGC campaigns", "SEO-optimized blogs"],
                desc2: "Content is not just creative — it's revenue-driven.",
                icon: <><path d="M4 4h16v16H4z" /><path d="M8 8h8M8 12h6M8 16h4" /></>,
              },
              {
                title: "Marketing Automation & Retention",
                desc1: "Retention is the new growth multiplier.",
                items: ["Email marketing funnels", "SMS & WhatsApp automation", "Abandoned cart workflows", "Loyalty campaigns", "Customer lifecycle marketing"],
                desc2: "At Adkryoss managed by Clink Consultancy Services Private Limited, we focus on maximizing lifetime value, not just first purchases.",
                icon: <><path d="M12 6v6l4 2" /><circle cx="12" cy="12" r="10" /></>,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 animate-fade-in-up"
                style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
              >
                <svg className="w-10 h-10 text-blue-700 mb-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  {item.icon}
                </svg>
                <h3 className="font-semibold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.desc1}</p>
                <ul className="text-gray-700 space-y-1 text-sm sm:text-base mb-4">
                  {item.items.map((li, i) => <li key={i}>{li}</li>)}
                </ul>
                <p className="text-gray-700 mt-4 font-medium">{item.desc2}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR ECOMMERCE GROWTH FRAMEWORK */}
      <section
        data-section="framework"
        className={`bg-gray-50 py-16 sm:py-20 px-4 sm:px-6 transition-all duration-700 ease-out ${
          visibleSections.framework ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              Our Ecommerce Growth Framework
            </h2>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Research & Market Intelligence", desc: "We analyze competitors, customer behavior, search intent, and marketplace trends.", icon: <><path d="M21 21l-4.35-4.35" /><circle cx="10" cy="10" r="7" /></> },
              { title: "Strategy Blueprint", desc: "A customized ecommerce roadmap combining SEO, paid media, content, and automation.", icon: <path d="M3 7h18M3 12h18M3 17h18" /> },
              { title: "Execution & Optimization", desc: "Campaign launches with continuous A/B testing and bid optimization.", icon: <path d="M5 12h14M12 5l7 7-7 7" /> },
              { title: "Analytics & Scaling", desc: "Real-time dashboards, ROI tracking, and performance refinement for exponential growth.", icon: <><path d="M3 3v18h18" /><path d="M18 9l-5 5-3-3" /></> },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 animate-fade-in-up"
                style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
              >
                <svg className="w-10 h-10 text-blue-600 mb-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  {item.icon}
                </svg>
                <h3 className="font-semibold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-700 text-sm sm:text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE ADKRYOSS */}
      <section
        data-section="why-choose"
        className={`py-16 sm:py-20 px-4 sm:px-6 bg-gray-50 transition-all duration-700 ease-out ${
          visibleSections["why-choose"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 animate-fade-in-up">
              Why Choose Adkryoss?
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-4">
              {[
                "Data-first decision making",
                "ROI-driven strategies",
                "AI-powered performance tracking",
                "Dedicated ecommerce specialists",
                "Omnichannel marketing expertise",
                "Transparent reporting dashboards",
              ].map((point, idx) => (
                <p key={idx} className="text-gray-700 animate-fade-in-left" style={{ animationDelay: `${0.1 + idx * 0.1}s` }}>
                  ✔ {point}
                </p>
              ))}
              <p className="text-gray-700 mt-4 animate-fade-in-left" style={{ animationDelay: "0.7s" }}>
                Adkryoss managed by Clink Consultancy Services Private Limited does not believe in isolated campaigns. We create integrated growth systems that align acquisition, conversion, and retention.
              </p>
            </div>
            <div className="lg:w-1/2 animate-float" style={{ animationDelay: "0.3s" }}>
              <img
                src={WhyChooseAdkryossImage}
                alt="Ecommerce growth illustration"
                loading="lazy"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES WE SERVE IN ECOMMERCE */}
      <section
        data-section="industries"
        className={`py-16 sm:py-20 px-4 sm:px-6 bg-white transition-all duration-700 ease-out ${
          visibleSections.industries ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 animate-fade-in-up">
            Industries We Serve in Ecommerce
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: FashionApparelImage, title: "Fashion & Apparel" },
              { img: BeautyCosmeticsImage, title: "Beauty & Cosmetics" },
              { img: ElectronicsGadgetsImage, title: "Electronics & Gadgets" },
              { img: FMCGGroceryImage, title: "FMCG & Grocery" },
              { img: HealthcareWellnessImage, title: "Healthcare & Wellness" },
              { img: HomeFurnitureImage, title: "Home & Furniture" },
              { img: LuxuryLifestyleBrandsImage, title: "Luxury & Lifestyle Brands" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition animate-fade-in-up"
                style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
              >
                <img src={item.img} alt={item.title} className="mb-4" loading="lazy" />
                <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY PLATFORMS WE WORK WITH */}
      <section
        data-section="technology"
        className={`py-16 sm:py-20 px-4 sm:px-6 bg-gray-50 transition-all duration-700 ease-out ${
          visibleSections.technology ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 animate-fade-in-up">
            Technology Platforms We Work With
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: ShopifyImage, title: "Shopify" },
              { img: WooImage, title: "WooCommerce" },
              { img: MazentoImage, title: "Magento" },
              { img: BigImage, title: "BigCommerce" },
              { img: AmazonImage, title: "Amazon Seller Central" },
              { img: FlipkartImage, title: "Flipkart Seller Hub" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center bg-white p-6 rounded-xl shadow hover:shadow-lg transition h-50 animate-fade-in-up"
                style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
              >
                <img src={item.img} alt={item.title} className="mb-4 h-30" loading="lazy" />
                <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
              </div>
            ))}
          </div>
          <p className="mt-12 text-gray-700 text-lg max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
            Our team adapts strategies based on platform architecture and algorithm updates.
          </p>
        </div>
      </section>

      {/* RESULTS THAT MATTER */}
      <section
        data-section="results"
        className={`py-16 sm:py-20 px-4 sm:px-6 bg-gray-50 overflow-hidden transition-all duration-700 ease-out ${
          visibleSections.results ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 animate-fade-in-up">
            Results That Matter
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: IncreasedOrganicRevenueImage, title: "Increased Organic Revenue" },
              { img: HigherROASImage, title: "Higher ROAS" },
              { img: ReducedAcquisitionCostImage, title: "Reduced Acquisition Cost" },
              { img: ImprovedConversionRatesImage, title: "Improved Conversion Rates" },
              { img: EnhancedCustomerLifetimeValueImage, title: "Enhanced Customer Lifetime Value" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center bg-white p-6 rounded-xl shadow hover:shadow-lg transition animate-fade-in-up"
                style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
              >
                <img src={item.img} alt={item.title} className="mb-4" loading="lazy" />
                <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
              </div>
            ))}
          </div>
          <p className="mt-12 text-gray-700 text-lg max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
            Growth isn't about short-term spikes — it's about sustainable scalability.
          </p>
        </div>
      </section>

      {/* CTA SECTION */}
      <section
        data-section="cta"
        className={`py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white transition-all duration-700 ease-out ${
          visibleSections.cta ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white animate-fade-in-up">
            Ready to Scale Your Ecommerce Business?
          </h2>
          <p className="text-lg sm:text-xl mb-6 text-white animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            If you want measurable growth, stronger brand positioning, and consistent revenue acceleration, it's time to work with experts who understand the modern ecommerce ecosystem.
          </p>
          <p className="text-lg sm:text-xl mb-6 text-white font-bold animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Partner with Adkryoss managed by Clink Consultancy Services Private Limited and build a future-ready ecommerce growth engine.
          </p>
          <p className="text-lg sm:text-xl mb-10 font-medium text-white animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            Let's transform clicks into customers — and customers into loyal advocates.
          </p>
          <button
            onClick={() => navigate("/contact?service=ecommerce")}
            className="inline-block bg-white text-blue-700 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            Explore Opportunities
          </button>
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

export default Ecommerce;