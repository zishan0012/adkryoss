import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import mobile from "../../../assets/mobile.jpg";
// import mobile1 from "../../../assets/mobile1.jpg";
// import mobile2 from "../../../assets/mobile3.png";
// import ecommerce1 from "../../../assets/e-commerce.png";
// import real from "../../../assets/realestate.png";
// import education from "../../../assets/education.png";
// import health from "../../../assets/healthcare.png";
// import saas from "../../../assets/saas.png";
// import finance from "../../../assets/finance.png";
import WhyMobileAdvertisingisNonNegotiableImage from "../../../assets/WhyMobileAdvertisingisNonNegotiable.png"
import OurApproachStrategyImage from "../../../assets/OurApproachStrategy.png"
import  RealEstate1Image from "../../../assets/RealEstate1.png"
import Ecommerce1Image from "../../../assets/Ecommerce1.png"
import Education2Image from "../../../assets/Education2.png"
import Finance1Image from "../../../assets/Finance1.png"
import Healthcare1Image from "../../../assets/Healthcare1.png"
import SaaSTechImage from "../../../assets/SaaSTech.png"

import {
  Smartphone,
  Search,
  Share2,
  Monitor,
  AppWindow,
  CheckCircle,
  Target,
  TrendingUp,
  Sliders,
  BarChart3,
  Facebook,
  Network,
  Link2,
  Database,
  Plus,
  X,
} from "lucide-react";
const mobileServices = [
  {
    title: "In-App Advertising Campaigns",
    desc: "Target users inside high-engagement apps with native placements, banners, and interactive formats optimized for installs, purchases, and repeat engagement.",
    points: [
      "Native & banner placements",
      "Interactive ad formats",
      "Install & purchase optimization",
      "Subscription & retention focus",
    ],
    bestFor: "E-commerce, FinTech, EdTech, Gaming, D2C Brands",
    icon: Smartphone,
  },
  {
    title: "Mobile Search Ads",
    desc: "Capture high-intent users actively searching for your products or services using smart bidding and keyword intent mapping.",
    points: [
      "Transactional keyword targeting",
      "Location-based mobile optimization",
      "AI-based bidding strategies",
      "Conversion rate enhancement",
    ],
    icon: Search,
  },
  {
    title: "Social Media Mobile Ads",
    desc: "We design scroll-stopping creatives optimized for vertical screens and fast mobile decision cycles.",
    points: [
      "Instagram & Facebook",
      "YouTube Shorts",
      "LinkedIn Mobile Ads",
      "Emerging short-video platforms",
    ],
    note: "We align creative psychology with performance data.",
    icon: Share2,
  },
  {
    title: "Mobile Display & Programmatic Ads",
    desc: "Reach hyper-targeted audiences using programmatic buying powered by real-time bidding.",
    points: [
      "Contextual targeting",
      "Geo-fencing campaigns",
      "Device-based segmentation",
      "Retargeting & sequential messaging",
    ],
    icon: Monitor,
  },
  {
    title: "App Install & App Re-Engagement Campaigns",
    desc: "Scale apps through precision targeting and retention-focused remarketing funnels.",
    points: [
      "CPI optimization",
      "Deep-link retargeting",
      "In-app event tracking",
      "Cohort performance analysis",
    ],
    icon: AppWindow,
  },
];
const industries = [
  {
    title: "E-commerce",
    image: Ecommerce1Image,
  },
  {
    title: "Real Estate",
    image: RealEstate1Image,
  },
  {
    title: "Education",
    image: Education2Image,
  },
  {
    title: "Healthcare",
    image: Healthcare1Image,
  },
  {
    title: "SaaS & Tech",
    image: SaaSTechImage,
  },
  {
    title: "Finance",
    image: Finance1Image,
  },
];

const differentiators = [
  {
    title: "Revenue-Focused Strategy",
    description:
      "Every campaign is aligned with real business KPIs — revenue, qualified leads, and ROI, not impressions.",
  },
  {
    title: "AI + Human Optimization",
    description:
      "We combine automation intelligence with strategic oversight for smarter scaling decisions.",
  },
  {
    title: "Conversion Architecture",
    description:
      "From ad to landing page to funnel — we engineer full performance ecosystems.",
  },
  {
    title: "Transparent Reporting",
    description:
      "Clear dashboards, real metrics, and performance clarity without inflated numbers.",
  },
];

const platforms = [
  {
    icon: Smartphone,
    title: "Google Ads (Mobile Network)",
    description:
      "Leverage Google’s mobile ad network to reach high-intent users across search, display, YouTube, and in-app placements.",
  },
  {
    icon: Facebook,
    title: "Meta Ads Manager",
    description:
      "Run mobile-first campaigns across Facebook and Instagram with advanced audience targeting and conversion optimization.",
  },
  {
    icon: Network,
    title: "Programmatic DSP Platforms",
    description:
      "Execute large-scale mobile display and video campaigns using real-time bidding and data-driven audience segmentation.",
  },
  {
    icon: BarChart3,
    title: "Firebase & Mobile Analytics Tools",
    description:
      "Track app installs, in-app events, user journeys, and retention metrics to optimize mobile campaign performance.",
  },
  {
    icon: Link2,
    title: "Conversion Tracking APIs",
    description:
      "Implement server-side and event-based tracking to accurately measure conversions and attribution across devices.",
  },
  {
    icon: Database,
    title: "CRM Integration for Retargeting",
    description:
      "Sync CRM and first-party data to build high-value retargeting audiences and improve lifetime value.",
  },
];
const faqs = [
  {
    question: "How much budget is required for mobile advertising?",
    answer:
      "Budget depends on industry, competition, and campaign objective. We recommend performance-based scaling instead of fixed assumptions, allowing spend to grow in line with results.",
  },
  {
    question: "How long before I see results?",
    answer:
      "Initial traction typically appears within 2–4 weeks. Optimization cycles and data learning continue to improve ROI over time.",
  },
  {
    question: "Is mobile advertising suitable for B2B brands?",
    answer:
      "Absolutely. With intent-based targeting, remarketing funnels, and mobile-optimized landing experiences, mobile advertising works effectively for B2B lead generation.",
  },
];
const MobileAdvertising = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      
 
         

       
         

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

  {/* Floating Glow Effects */}
  <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]"></div>
  <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-orange-500/30 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite]"></div>

  <div className="max-w-8xl mx-auto px-6 sm:px-10 lg:px-20 xl:px-28 grid md:grid-cols-2 items-center gap-12 w-full relative z-10">

    {/* LEFT CONTENT */}
    <div className="text-left max-w-[600px] space-y-6">

      <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
        <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
          Mobile Advertising Services That Convert
        </span>
      </h2>

      <h3 className="text-xl md:text-2xl font-semibold mb-6 text-blue-100">
        Reach. Engage. Convert — On Every Screen.
      </h3>

      <p className="text-gray-200 text-md md:text-lg leading-relaxed">
        Your audience lives on mobile. Your growth should too. Drive real business impact with performance-focused mobile advertising strategies designed to convert micro-moments into measurable revenue.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-5 pt-2">
        <Link to="/contact">
          <button className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            Speak to a Mobile Ads Expert →
          </button>
        </Link>

        <button
          className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-white/10 hover:text-blue-300 hover:-translate-y-1 hover:shadow-xl"
        >
          Our Mobile Advertising Services →
        </button>
      </div>

    </div>

    {/* RIGHT IMAGE */}
    <div className="flex justify-center md:justify-end relative z-10">
      <div className="relative group w-full max-w-[450px] h-[260px] sm:h-[320px] md:h-[360px] flex items-center justify-center">

        {/* Image Glow */}
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-500"></div>

        <img
          src={mobile}
          alt="Mobile Advertising Services"
          className="relative max-w-full max-h-full object-contain rounded-xl shadow-2xl transform group-hover:-translate-y-2 transition duration-500"
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




 

      <section className="bg-white pt-24 md:pt-28 lg:pt-32 pb-32 md:pb-36 lg:pb-40">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-6 text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
              Why Mobile Advertising is Non-Negotiable in 2026
            </h2>

            <p className="text-gray-700 text-base md:text-lg">
              Smartphones are no longer a secondary device — they are the{" "}
              <span className="font-semibold text-gray-900">
                primary gateway to search, social, shopping, entertainment, and
                payments.
              </span>{" "}
              From app browsing to impulse buying, every interaction creates a
              conversion opportunity.
            </p>

            <p className="text-gray-700">
              Mobile advertising today is powered by:
            </p>

            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              <li>AI-driven audience segmentation</li>
              <li>Predictive analytics & behavioral targeting</li>
              <li>First-party data strategies</li>
              <li>Performance-driven bidding models</li>
              <li>Privacy-compliant tracking ecosystems</li>
            </ul>

            <p className="text-gray-700">
              <span className="font-semibold text-gray-900">
                Adkryoss managed by Clink Consultancy Services Private Limited
              </span>{" "}
              builds mobile campaigns engineered for{" "}
              <span className="text-blue-700 font-semibold">
                ROI — not just impressions.
              </span>
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
            <img
              src={WhyMobileAdvertisingisNonNegotiableImage}
              alt="Mobile Advertising Growth"
              className="w-[600px] h-[400px] object-fit-cover rounded-xl"
            />
          </div>
        </div>
      </section>
      <div className="h-16 bg-gray-50"></div>
      <section id="services" className="bg-gray-50 pt-28 md:pt-32 lg:pt-36 pb-24 md:pb-28 lg:pb-32 border-t border-gray-200">
        <div className="container">
          {/* Heading */}
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
              Our Mobile Advertising Solutions
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Performance-driven mobile advertising services designed to convert
              attention into measurable business growth.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
            {mobileServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="
              group bg-white border border-gray-200 rounded-2xl p-8
              flex flex-col justify-between
              transition-all duration-500
              hover:bg-teal-700 hover:shadow-2xl hover:-translate-y-2
            "
                >
                  <div>
                    {/* Icon */}
                    <div
                      className="w-12 h-12 rounded-full bg-gray-100
                flex items-center justify-center mb-6
                group-hover:bg-white/20 transition"
                    >
                      <Icon className="w-6 h-6 text-teal-700 group-hover:text-white transition" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 group-hover:text-white transition">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 leading-relaxed mb-5 group-hover:text-white/90 transition">
                      {service.desc}
                    </p>

                    {/* Points */}
                    <ul className="space-y-2 text-sm text-gray-600 group-hover:text-white/90 transition">
                      {service.points.map((point, i) => (
                        <li key={i}>• {point}</li>
                      ))}
                    </ul>

                    {/* Extra Info */}
                    {service.bestFor && (
                      <p className="text-sm mt-5 text-gray-700 group-hover:text-white/90 transition">
                        <span className="font-semibold">Best For:</span>{" "}
                        {service.bestFor}
                      </p>
                    )}

                    {service.note && (
                      <p className="text-sm mt-5 text-gray-700 group-hover:text-white/90 transition">
                        {service.note}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-gray-70 py-16 md:py-20">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="px-6 lg:pl-20 xl:pl-28 text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Approach: Strategy → Execution → Scale
            </h2>

            <p className="text-lg md:text-xl font-semibold text-gray-800 mb-8">
              We don’t run campaigns. We build performance ecosystems.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-blue-700 font-semibold">
                  1. Market & Audience Intelligence
                </h3>
                <p className="text-gray-700">
                  Data research, competitor benchmarking, user intent mapping.
                </p>
              </div>

              <div>
                <h3 className="text-blue-700 font-semibold">
                  2. Conversion-Focused Media Planning
                </h3>
                <p className="text-gray-700">
                  Budget allocation across platforms based on predicted ROI.
                </p>
              </div>

              <div>
                <h3 className="text-blue-700 font-semibold">
                  3. Creative Built for Mobile Psychology
                </h3>
                <p className="text-gray-700">
                  Thumb-stopping visuals, vertical-first design, fast-loading
                  formats.
                </p>
              </div>

              <div>
                <h3 className="text-blue-700 font-semibold">
                  4. Smart Bidding & AI Optimization
                </h3>
                <p className="text-gray-700">
                  Automated bidding models that continuously improve campaign
                  performance.
                </p>
              </div>

              <div>
                <h3 className="text-blue-700 font-semibold">
                  5. Transparent Reporting & Analytics
                </h3>
                <p className="text-gray-700">
                  Real-time dashboards, ROI tracking, conversion attribution
                  modeling.
                </p>
              </div>
            </div>

            <p className="text-gray-700 text-lg mt-10 max-w-3xl">
              <span className="font-semibold text-gray-900">
                Adkryoss managed by Clink Consultancy Services Private Limited
              </span>{" "}
              ensures every campaign decision is backed by data —
              <span className="font-semibold"> not assumptions.</span>
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-end pr-6 lg:pr-12 xl:pr-20 mt-10 lg:mt-0">
            <img
              src={OurApproachStrategyImage}
              alt="Marketing Strategy Analytics"
              className="w-full max-w-xl lg:max-w-2xl rounded-3xl shadow-xl object-cover"
            />
          </div>
        </div>
      </section>
      <div className="bg-gray-100 h-6"></div>
      <section className="bg-gray-100 py-16 md:py-20">
        <div className="container text-left">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-12">
            Industries We Serve
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden
          transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-48 object-fit group-hover:scale-105 transition duration-500"
                  />
                </div>

                {/* Title */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {industry.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container text-left">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-14">
            What Makes Us Different
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {differentiators.map((item, index) => (
              <div
                key={index}
                className="
          group bg-white border border-gray-200 rounded-2xl p-8
          transition-all duration-300
          hover:-translate-y-1 hover:shadow-xl
        "
              >
                {/* Top Accent Line */}
                <div className="h-1 w-12 bg-blue-700 mb-6 rounded-full"></div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <p className="text-lg text-gray-700 mt-16 max-w-4xl">
            We don’t focus on vanity metrics.{" "}
            <span className="font-semibold text-gray-900">
              We focus on measurable growth metrics.
            </span>
          </p>
        </div>
      </section>
      <div className="bg-gray-200 h-8"></div>
      <section className="bg-gray-200 py-16 md:py-20">
        <div className="container text-left">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-14">
            Technologies & Platforms We Leverage
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {platforms.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="
            group bg-white border border-blue-200 rounded-2xl
            p-8 h-full
            transition-all duration-300
            hover:-translate-y-1 hover:shadow-xl
          "
                >
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-green-600 group-hover:text-blue-700 transition" />
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="py-20 bg-blue-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>

          <div className="divide-y divide-blue-200">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="px-8 py-7 transition-all duration-300"
                >
                  {/* Question */}
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between text-left group"
                  >
                    <span className="text-lg md:text-xl font-semibold text-gray-900 pr-6 group-hover:text-blue-700 transition">
                      {faq.question}
                    </span>

                    <span className="flex-shrink-0">
                      {isOpen ? (
                        <X className="w-5 h-5 text-blue-600 transition-transform duration-300 rotate-90" />
                      ) : (
                        <Plus className="w-5 h-5 text-blue-600 transition-transform duration-300 group-hover:rotate-90" />
                      )}
                    </span>
                  </button>

                  {/* Answer */}
                  {isOpen && (
                    <div className="mt-5 text-gray-700 text-base leading-relaxed max-w-4xl">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-linear-to-r from-blue-700 to-blue-900 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center text-white">
          <h2 className="text-white md:text-4xl font-bold mb-6">
            Ready to Dominate the Mobile Ecosystem?
          </h2>

          <p className="text-lg text-blue-100 mb-4">
            Your customers are already scrolling.
          </p>

          <p className="text-white font-semibold mb-8">
            Let’s make sure they stop for you.
          </p>

          <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-10">
            Partner with{" "}
            <span className="font-semibold text-white">
              Adkryoss managed by Clink Consultancy Services Private Limited
            </span>{" "}
            and turn mobile attention into measurable business growth.
          </p>

          <Link to="/contact">
            <button
              className="
      bg-white text-blue-700 font-semibold
      px-8 py-4 rounded-full
      transition-all duration-300
      hover:bg-blue-100 hover:shadow-xl
    "
            >
              Start Your Mobile Growth Strategy →
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default MobileAdvertising;