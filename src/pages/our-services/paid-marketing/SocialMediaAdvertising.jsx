import React from 'react';
import socialmedia from "../../../assets/socialmedia.jpg"
import {
  Facebook,
  Linkedin,
  Youtube,
  Users,
  Layers,
  Sparkles,
  BarChart3,
  CheckCircle,
  ShoppingCart,
  GraduationCap,
  HeartPulse,
  Building2,
  Briefcase,
  Rocket,
  Target,
  Settings,
  Video,
  BarChart2,
  TrendingUp,
  RefreshCcw,
  Activity,
  FileText,
  DollarSign,
  TrendingDown,
  MousePointerClick,
  Percent,
  Repeat,
} from "lucide-react";
const platforms = [
  {
    title: "Facebook & Instagram Advertising",
    icon: Facebook,
    description:
      "Reach hyper-targeted audiences using demographic, behavioral, and interest-based targeting. We design scroll-stopping creatives and performance-driven campaigns optimized for leads, sales, and remarketing.",
    bestFor:
      "E-commerce, real estate, education, healthcare, local businesses",
  },
  {
    title: "LinkedIn Advertising",
    icon: Linkedin,
    description:
      "Target decision-makers with precision using job titles, industries, company size, and seniority filters.",
    bestFor:
      "B2B lead generation, SaaS, corporate services, recruitment campaigns",
  },
  {
    title: "YouTube & Google Ads",
    icon: Youtube,
    description:
      "Video-first advertising designed for engagement and conversion. From awareness campaigns to direct response ads, we build campaigns that guide users through the buyer journey.",
    bestFor:
      "Brand awareness, product launches, retargeting campaigns",
  },
];
const approach = [
  {
    step: "01",
    title: "Deep Audience Intelligence",
    icon: Users,
    desc: "We conduct market research, competitor mapping, and behavioral segmentation to identify high-converting audience clusters with the highest revenue potential.",
  },
  {
    step: "02",
    title: "Funnel-Based Campaign Architecture",
    icon: Layers,
    desc: "Campaigns are structured across Awareness, Consideration, Conversion, Retargeting, and Loyalty & Upsell stages to guide users through the full buyer journey.",
  },
  {
    step: "03",
    title: "Creative-Led Optimization",
    icon: Sparkles,
    desc: "Winning ads aren’t accidental. We continuously test hooks, formats (static, carousel, reels, video), messaging angles, CTAs, and landing page alignment.",
  },
  {
    step: "04",
    title: "Data & AI-Driven Optimization",
    icon: BarChart3,
    desc: "Using platform analytics and advanced tracking integrations, campaigns are optimized based on real performance data — not assumptions.",
  },
];
const points = [
  "ROI-Focused Media Buying",
  "Advanced Pixel & Conversion Tracking",
  "Conversion Rate Optimization Integration",
  "Performance Creative Testing Framework",
  "Transparent Weekly Reporting",
  "Dedicated Campaign Manager",
];
const industries = [
  {
    title: "E-Commerce & D2C Brands",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
  },
  {
    title: "Education & EdTech",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
  },
  {
    title: "Healthcare & Clinics",
    image: "https://images.unsplash.com/photo-1588776814546-ec7e59f1f6b8",
  },
  {
    title: "Real Estate",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
  },
  {
    title: "Corporate & B2B Services",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
  },
  {
    title: "Startups & SMEs",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
  },
];

const services = [
  { title: "Paid Social Strategy Development", icon: Target },
  { title: "Campaign Setup & Management", icon: Settings },
  { title: "Creative Design & Video Ad Production", icon: Video },
  { title: "Advanced Audience Targeting", icon: Users },
  { title: "A/B Testing & Optimization", icon: BarChart2 },
  { title: "Lead Generation Campaigns", icon: TrendingUp },
  { title: "E-commerce Sales Campaigns", icon: ShoppingCart },
  { title: "Retargeting & Remarketing Ads", icon: RefreshCcw },
  { title: "Conversion Tracking & Analytics", icon: Activity },
  { title: "Monthly Performance Reporting", icon: FileText },
];
const metrics = [
  {
    title: "Cost Per Lead (CPL)",
    icon: DollarSign,
  },
  {
    title: "Cost Per Acquisition (CPA)",
    icon: TrendingDown,
  },
  {
    title: "Return on Ad Spend (ROAS)",
    icon: BarChart3,
  },
  {
    title: "Click Through Rate (CTR)",
    icon: MousePointerClick,
  },
  {
    title: "Conversion Rate",
    icon: Percent,
  },
  {
    title: "Customer Lifetime Value (CLV)",
    icon: Repeat,
  },
];
const point = [
  "Strategic thinking",
  "Creative storytelling",
  "Performance marketing science",
  "Continuous experimentation",
];

const SocialMediaAdvertising = () => {
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
  <div className="absolute inset-0 bg-blue-900/85"></div>

  <div className="relative w-full px-4 sm:px-6 lg:px-20 xl:px-28">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

      {/* LEFT CONTENT */}
      <div className="space-y-6 text-left">

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Social Media Advertising Services
        </h1>

        <p className="text-lg md:text-xl font-semibold text-blue-100">
          Drive Revenue. Not Just Reach.
        </p>

        <p className="text-blue-100 text-base md:text-lg max-w-xl">
          Turn attention into action with data-driven, performance-focused
          social media advertising campaigns built to scale your business
          faster and smarter.
        </p>

        <p className="text-white font-semibold text-base md:text-lg">
          Paid Social That Performs — Across Platforms, Audiences & Funnel Stages.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-2">
          <button
            className="
              w-full sm:w-auto
              bg-white text-blue-700 px-6 py-3 rounded-full font-semibold
              hover:bg-blue-100 hover:shadow-lg transition
            "
          >
            Launch Paid Social Campaigns →
          </button>

          <button
            className="
              w-full sm:w-auto
              border border-white/70 px-6 py-3 rounded-full font-semibold
              hover:bg-white hover:text-blue-700 transition
            "
          >
            Explore Our Social Strategy →
          </button>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
        <img
          src={socialmedia}
          alt="Social Media Advertising"
          className="w-200 h-100 object-contain"
        />
      </div>

    </div>
  </div>
</section>

<section className="bg-white py-16 md:py-20">

  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10">

    {/* LEFT CONTENT */}
    <div className="space-y-6 text-left">

      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
        Why Social Media Advertising Matters Today
      </h2>

      <p className="text-base md:text-lg text-gray-700">
        Organic reach is shrinking. Competition is rising. Audiences are overloaded.
      </p>

      <p className="text-base md:text-lg text-gray-700">
        Smart businesses win by combining{" "}
        <span className="font-semibold text-gray-900">
          precision targeting, creative storytelling, and performance optimization.
        </span>
      </p>

      <p className="text-base md:text-lg text-gray-700 leading-relaxed">
        <span className="font-semibold text-gray-900">
          Adkryoss managed by Clink Consultancy Services Private Limited
        </span>{" "}
        builds full-funnel paid social strategies that go beyond impressions.
        Our approach connects your brand with the right audience at the right
        moment — and converts that attention into measurable growth.
      </p>

    </div>

    {/* RIGHT IMAGE */}
    <div className="flex justify-center lg:justify-end">
      <img
        src="https://images.unsplash.com/photo-1556157382-97eda2d62296"
        alt="Social Media Advertising"
        className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-lg object-cover"
      />
    </div>

  </div>

</section>

    <section className="py-16 md:py-20 bg-gray-50">
  <div className="w-full px-6 sm:px-8 lg:px-16">

    {/* Heading */}
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-10 md:mb-14">
      Platforms We Advertise On
    </h2>

    {/* Cards Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

      {platforms.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={index}
            className="
              group flex flex-col justify-between
              bg-white border border-blue-100 rounded-2xl
              p-6 sm:p-7 lg:p-8
              transition-all duration-500
              hover:bg-teal-700 hover:shadow-xl hover:-translate-y-1
            "
          >
            <div>

              {/* Icon */}
              <div
                className="
                  w-11 h-11 sm:w-12 sm:h-12
                  rounded-full bg-gray-100
                  flex items-center justify-center mb-5
                  transition
                  group-hover:bg-white/20
                "
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-teal-700 group-hover:text-white" />
              </div>

              {/* Title */}
              <h3
                className="
                  text-base sm:text-lg font-semibold
                  text-gray-900 mb-3
                  group-hover:text-white
                "
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                className="
                  text-sm sm:text-sm text-gray-600
                  leading-relaxed mb-4
                  group-hover:text-white/90
                "
              >
                {item.description}
              </p>

              {/* Best For */}
              <p
                className="
                  text-sm font-semibold text-gray-900
                  group-hover:text-white
                "
              >
                Best for:{" "}
                <span className="font-normal group-hover:text-white/90">
                  {item.bestFor}
                </span>
              </p>

            </div>
          </div>
        );
      })}

    </div>
  </div>
</section>

    <section className="py-16 md:py-20 bg-gray-100">
  <div className="w-full px-6 sm:px-8 lg:px-16">

    {/* Heading */}
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-10 md:mb-14">
      Our Approach: Performance-First Social Strategy
    </h2>

    {/* Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">

      {approach.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={index}
            className="
              group bg-white border border-blue-100 rounded-2xl
              p-6 sm:p-7 lg:p-8
              transition-all duration-500
              hover:bg-teal-700 hover:shadow-xl hover:-translate-y-1
            "
          >
            {/* Step + Icon */}
            <div className="flex items-center gap-4 mb-5">
              <div
                className="
                  w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-100
                  flex items-center justify-center
                  transition
                  group-hover:bg-white/20
                "
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-teal-700 group-hover:text-white" />
              </div>

              <span
                className="
                  text-xs sm:text-sm font-semibold text-teal-700
                  group-hover:text-white/80
                "
              >
                {item.step}
              </span>
            </div>

            {/* Title */}
            <h3
              className="
                text-lg sm:text-xl font-semibold text-gray-900 mb-3
                group-hover:text-white
              "
            >
              {item.title}
            </h3>

            {/* Description */}
            <p
              className="
                text-sm sm:text-base leading-relaxed text-gray-600
                group-hover:text-white/90
              "
            >
              {item.desc}
            </p>
          </div>
        );
      })}

    </div>

  </div>
</section>

    <section className="py-16 md:py-20 bg-gray-50">
  <div className="w-full px-6 sm:px-8 lg:px-16">

    {/* Heading */}
    <div className="mb-12">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
        What Makes Our Paid Social Different
      </h2>

      <p className="text-base sm:text-lg text-gray-600 mt-4">
        We don’t run ads.
        <span className="text-gray-900 font-semibold"> We build revenue systems.</span>
      </p>
    </div>

    {/* Horizontal Cards */}
    <div className="space-y-6">

      {points.map((item, index) => (
        <div
          key={index}
          className="
            bg-white border border-gray-200 rounded-xl
            overflow-hidden
            flex flex-col sm:flex-row
            transition-all duration-300
            hover:shadow-md hover:-translate-y-1
          "
        >
          {/* Image Left */}
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692"
            alt="Paid Social Strategy"
            className="
              w-full sm:w-48 md:w-56
              h-40 sm:h-auto
              object-cover
            "
          />

          {/* Text Right */}
          <div className="p-6 flex items-center">
            <p className="text-sm sm:text-base font-medium text-gray-800 leading-relaxed">
              {item}
            </p>
          </div>
        </div>
      ))}

    </div>

  </div>
</section>

    <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto">

    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-14">
      Industries We Serve
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {industries.map((industry, index) => (
        <div
          key={index}
          className="
            group overflow-hidden rounded-2xl
            border border-gray-200
            transition-all duration-300
            hover:-translate-y-1 hover:shadow-lg
          "
        >
          {/* Image */}
          <div className="h-48 overflow-hidden">
            <img
              src={industry.image}
              alt={industry.title}
              className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
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

    <section className="py-24 bg-gray-200">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Our Social Media Advertising Services Include
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="
                  group bg-white border border-blue-100 rounded-2xl p-8
                  transition-all duration-500
                  hover:bg-teal-700 hover:shadow-xl hover:-translate-y-1
                "
              >
                <div
                  className="
                    w-12 h-12 rounded-full bg-gray-100
                    flex items-center justify-center mb-6
                    transition
                    group-hover:bg-white/20
                  "
                >
                  <Icon className="w-6 h-6 text-teal-700 group-hover:text-white" />
                </div>

                <h3
                  className="
                    text-sm font-semibold text-gray-900
                    group-hover:text-white
                  "
                >
                  {service.title}
                </h3>
              </div>
            );
          })}
        </div>

        <p className="max-w-5xl text-lg text-gray-700 leading-relaxed">
          <span className="font-semibold text-gray-900">
            Adkryoss managed by Clink Consultancy Services Private Limited
          </span>{" "}
          aligns advertising strategy with business growth objectives — ensuring
          every campaign contributes directly to pipeline growth, revenue
          generation, or customer acquisition.
        </p>

      </div>
    </section>
   <section className="py-20 bg-white w-full">
  <div className="w-full">

    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-14">
      Performance Metrics We Optimize For
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;

        return (
          <div
            key={index}
            className="
              group border border-gray-200 rounded-xl p-6
              transition-all duration-300
              hover:-translate-y-1 hover:shadow-lg hover:bg-teal-700
            "
          >
            <div className="
              w-11 h-11 rounded-full bg-gray-100
              flex items-center justify-center mb-5
              transition group-hover:bg-white/20
            ">
              <Icon className="w-5 h-5 text-teal-700 group-hover:text-white" />
            </div>

            <h3 className="text-base font-semibold text-gray-900 group-hover:text-white">
              {metric.title}
            </h3>
          </div>
        );
      })}
    </div>

    <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
      Our reporting goes beyond vanity metrics — we focus on{" "}
      <span className="font-semibold text-gray-900">
        numbers that directly impact your bottom line.
      </span>
    </p>

  </div>
</section>

   <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
  <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">

    {/* LEFT SIDE */}
    <div className="pl-6 lg:pl-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
        Why Choose Us
      </h2>

      <p className="text-lg text-gray-700 mt-6 max-w-md">
        We don’t rely on isolated tactics.
        <br />
        <span className="font-semibold text-gray-900">
          We build systems where creativity and performance work together.
        </span>
      </p>
    </div>

    {/* RIGHT SIDE */}
    <div className="lg:col-span-2 pr-6 lg:pr-16 grid grid-cols-1 sm:grid-cols-2 gap-6">
      {points.map((point, index) => (
        <div
          key={index}
          className="
            flex items-start gap-4
            bg-white rounded-xl p-6
            border border-gray-200
            shadow-sm
            transition-all duration-300
            hover:-translate-y-1 hover:shadow-lg
          "
        >
          <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-1" />
          <p className="text-base font-medium text-gray-800">
            {point}
          </p>
        </div>
      ))}
    </div>

  </div>
</section>

   <section className="bg-gradient-to-r from-blue-700 to-blue-900 py-20 md:py-24">
  <div className="max-w-5xl mx-auto px-6 text-center text-white">

    <h2 className="text-white sm:text-3xl md:text-4xl font-bold mb-6">
      Let’s Scale Your Social Revenue
    </h2>

    <p className="text-base sm:text-lg text-blue-100 mb-6">
      Your audience is already online. <br className="hidden sm:block" />
      <span className="font-semibold text-white">
        The question is — are you reaching them effectively?
      </span>
    </p>

    <p className="text-base sm:text-lg text-blue-100 max-w-4xl mx-auto mb-8">
      Partner with{" "}
      <span className="font-semibold text-white">
        Adkryoss managed by Clink Consultancy Services Private Limited
      </span>{" "}
      to build high-performing social advertising campaigns that deliver
      measurable growth.
    </p>

    <p className="text-white sm:text-xl font-semibold mb-8">
      Ready to launch performance-driven paid social campaigns? <br className="hidden sm:block" />
      <span className="text-blue-200">
        Let’s build your next growth engine.
      </span>
    </p>

    <button
      className="
        bg-white text-blue-700 font-semibold
        px-6 sm:px-8 py-3 sm:py-4 rounded-full
        transition-all duration-300
        hover:bg-blue-100 hover:shadow-lg
      "
    >
      Start Paid Social Growth →
    </button>

  </div>
</section>

        </>
    );
};

export default SocialMediaAdvertising;
