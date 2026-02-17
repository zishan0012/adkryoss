import React from "react";
import { useState } from "react";
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
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
  },
  {
    title: "Real Estate",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
  },
  {
    title: "Education",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
  },
  {
    title: "Healthcare",
    image:
      "https://images.unsplash.com/photo-1580281657527-47a0e63efb6c",
  },
  {
    title: "SaaS & Tech",
    image:
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
  },
  {
    title: "Finance",
    image:
      "https://images.unsplash.com/photo-1565372915193-04b0f46c1d4b",
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
    <section
  className="relative py-16 md:py-20 lg:py-24 text-white bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-blue-900/80"></div>

  <div className="relative w-full px-6 sm:px-10 lg:px-20 xl:px-28 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

    {/* LEFT CONTENT */}
    <div className="space-y-6 text-left">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
        Mobile Advertising Services
      </h1>

      <p className="text-lg md:text-xl font-semibold text-blue-100">
        Reach. Engage. Convert — On Every Screen.
      </p>

      <p className="text-blue-100 text-base md:text-lg max-w-xl">
        Your audience lives on mobile. Your growth should too. Drive real
        business impact with performance-focused mobile advertising
        strategies designed to convert micro-moments into measurable
        revenue.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 pt-2">
        <button
          className="w-full sm:w-auto bg-white text-blue-700 px-6 py-3 rounded-full font-semibold
          hover:bg-blue-100 hover:shadow-lg transition-all duration-300"
        >
          Speak to a Mobile Ads Expert →
        </button>

        <button
          className="w-full sm:w-auto border border-white/70 px-6 py-3 rounded-full font-semibold
          hover:bg-white hover:text-blue-700 transition-all duration-300"
        >
          Our Mobile Advertising Services →
        </button>
      </div>
    </div>

    {/* RIGHT IMAGE */}
    <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
      <img
        src="https://www.techmagnate.com/wp-content/uploads/2025/04/digital-marketing-for-healthcare-industry.webp"
        alt="Mobile Advertising Services"
        className="w-52 sm:w-64 md:w-72 lg:w-80 object-contain drop-shadow-2xl"
      />
    </div>

  </div>
</section>

      <section className="bg-white py-16 md:py-20">
  <div className="w-full px-6 lg:px-20 xl:px-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

    {/* LEFT CONTENT */}
    <div className="space-y-6 text-left">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
        Why Mobile Advertising is Non-Negotiable in 2026
      </h2>

      <p className="text-gray-700 text-base md:text-lg">
        Smartphones are no longer a secondary device — they are the{" "}
        <span className="font-semibold text-gray-900">
          primary gateway to search, social, shopping, entertainment, and payments.
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
        src="https://images.unsplash.com/photo-1512499617640-c2f999098c01"
        alt="Mobile Advertising Growth"
        className="w-full max-w-md rounded-2xl shadow-xl object-cover"
      />
    </div>

  </div>
</section>

      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mobile Advertising Solutions
            </h2>
            <p className="text-gray-600 text-lg">
              Performance-driven mobile advertising services designed to convert
              attention into measurable business growth.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mobileServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="
                  group bg-white border border-blue-100 rounded-2xl p-8
                  flex flex-col justify-between min-h-110
                  transition-all duration-500
                  hover:bg-teal-700 hover:shadow-xl hover:-translate-y-1
                "
                >
                  {/* Top */}
                  <div>
                    {/* Icon */}
                    <div
                      className="w-12 h-12 rounded-full bg-gray-100
                    flex items-center justify-center mb-6
                    group-hover:bg-white/20 transition"
                    >
                      <Icon className="w-6 h-6 text-teal-700 group-hover:text-white" />
                    </div>

                    {/* Title */}
                    <h3
                      className="text-lg font-semibold text-gray-900 mb-3
                    group-hover:text-white"
                    >
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-sm text-gray-600 leading-relaxed mb-4
                    group-hover:text-white/90"
                    >
                      {service.desc}
                    </p>

                    {/* Points */}
                    <ul
                      className="space-y-2 text-sm text-gray-600
                    group-hover:text-white/90"
                    >
                      {service.points.map((point, i) => (
                        <li key={i}>• {point}</li>
                      ))}
                    </ul>

                    {/* Extra Info */}
                    {service.bestFor && (
                      <p
                        className="text-sm mt-4 text-gray-700
                      group-hover:text-white/90"
                      >
                        <span className="font-semibold">Best For:</span>{" "}
                        {service.bestFor}
                      </p>
                    )}

                    {service.note && (
                      <p
                        className="text-sm mt-4 text-gray-700
                      group-hover:text-white/90"
                      >
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
  <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

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
            Thumb-stopping visuals, vertical-first design, fast-loading formats.
          </p>
        </div>

        <div>
          <h3 className="text-blue-700 font-semibold">
            4. Smart Bidding & AI Optimization
          </h3>
          <p className="text-gray-700">
            Automated bidding models that continuously improve campaign performance.
          </p>
        </div>

        <div>
          <h3 className="text-blue-700 font-semibold">
            5. Transparent Reporting & Analytics
          </h3>
          <p className="text-gray-700">
            Real-time dashboards, ROI tracking, conversion attribution modeling.
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
    <div className="flex justify-center lg:justify-end px-6 lg:px-0 mt-10 lg:mt-0">
      <img
        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
        alt="Marketing Strategy Analytics"
        className="w-full max-w-md lg:max-w-lg rounded-3xl shadow-xl object-cover"
      />
    </div>

  </div>
</section>

      <section className="bg-gray-100 py-16 md:py-20">
  <div className="w-full px-6 lg:px-20 xl:px-28 text-left">

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
              className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
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
  <div className="w-full px-6 lg:px-20 xl:px-28 text-left">

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

    <section className="bg-gray-200 py-16 md:py-20">
  <div className="w-full px-6 lg:px-20 xl:px-28 text-left">

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

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-blue-50 border border-blue-200 rounded-3xl p-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
              FAQs
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={index}
                    className="bg-white border border-blue-200 rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <span className="font-semibold text-gray-900">
                        {faq.question}
                      </span>
                      {isOpen ? (
                        <X className="w-5 h-5 text-blue-600" />
                      ) : (
                        <Plus className="w-5 h-5 text-blue-600" />
                      )}
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
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
        </div>
      </section>
    </>
  );
};

export default MobileAdvertising;
