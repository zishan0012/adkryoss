import React from 'react';
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
  { title: "E-Commerce & D2C Brands", icon: ShoppingCart },
  { title: "Education & EdTech", icon: GraduationCap },
  { title: "Healthcare & Clinics", icon: HeartPulse },
  { title: "Real Estate", icon: Building2 },
  { title: "Corporate & B2B Services", icon: Briefcase },
  { title: "Startups & SMEs", icon: Rocket },
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
        <section className="bg-linear-to-r from-blue-700 to-blue-900 py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-white">

        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Social Media Advertising Services
          </h1>

          <p className="text-xl font-semibold text-blue-100">
            Drive Revenue. Not Just Reach.
          </p>

          <p className="text-blue-100 text-lg max-w-xl">
            Turn attention into action with data-driven, performance-focused
            social media advertising campaigns built to scale your business
            faster and smarter.
          </p>

          <p className="text-white font-semibold">
            Paid Social That Performs — Across Platforms, Audiences & Funnel Stages.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button
              className="
                bg-white text-blue-700 px-6 py-3 rounded-full font-semibold
                hover:bg-blue-100 hover:shadow-lg transition
              "
            >
              Launch Paid Social Campaigns →
            </button>

            <button
              className="
                border border-white/70 px-6 py-3 rounded-full font-semibold
                hover:bg-white hover:text-blue-700 transition
              "
            >
              Explore Our Social Strategy →
            </button>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="bg-white/10 rounded-3xl p-4">
            <img
              src="/social-media-ads-hero.png"
              alt="Social Media Advertising"
              className="w-64 md:w-72 lg:w-80"
            />
          </div>
        </div>

      </div>
    </section>
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-blue-50 border border-blue-200 rounded-3xl p-10 max-w-5xl space-y-6">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Social Media Advertising Matters Today
          </h2>

          <p className="text-lg text-gray-700">
            Organic reach is shrinking. Competition is rising. Audiences are overloaded.
          </p>

          <p className="text-lg text-gray-700">
            Smart businesses win by combining{" "}
            <span className="font-semibold text-gray-900">
              precision targeting, creative storytelling, and performance optimization.
            </span>
          </p>

          <p className="text-lg text-gray-700">
            <span className="font-semibold text-gray-900">
              Adkryoss managed by Clink Consultancy Services Private Limited
            </span>{" "}
            builds full-funnel paid social strategies that go beyond impressions.
            Our approach connects your brand with the right audience at the right
            moment — and converts that attention into measurable growth.
          </p>

        </div>

      </div>
    </section>
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Platforms We Advertise On
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platforms.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  group flex flex-col justify-between
                  bg-white border border-blue-100 rounded-2xl p-8
                  transition-all duration-500
                  hover:bg-teal-700 hover:shadow-xl hover:-translate-y-1
                "
              >
                <div>
                  {/* Icon */}
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

                  {/* Title */}
                  <h3
                    className="
                      text-lg font-semibold text-gray-900 mb-3
                      group-hover:text-white
                    "
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      text-sm text-gray-600 leading-relaxed mb-4
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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-14">
          Our Approach: Performance-First Social Strategy
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {approach.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  group bg-white border border-blue-100 rounded-2xl p-8
                  transition-all duration-500
                  hover:bg-teal-700 hover:shadow-xl hover:-translate-y-1
                "
              >
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className="
                      w-12 h-12 rounded-full bg-gray-100
                      flex items-center justify-center
                      transition
                      group-hover:bg-white/20
                    "
                  >
                    <Icon className="w-6 h-6 text-teal-700 group-hover:text-white" />
                  </div>

                  <span
                    className="
                      text-sm font-semibold text-teal-700
                      group-hover:text-white/80
                    "
                  >
                    {item.step}
                  </span>
                </div>

                <h3
                  className="
                    text-xl font-semibold text-gray-900 mb-4
                    group-hover:text-white
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    text-sm leading-relaxed text-gray-600
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
     <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            What Makes Our Paid Social Different
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed mb-10">
            We don’t run ads. <br />
            <span className="text-gray-900 font-semibold">
              We build revenue systems.
            </span>
          </p>
        </div>

        {/* Right Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {points.map((item, index) => (
            <div
              key={index}
              className="
                group flex items-start gap-4
                bg-white border border-gray-200 rounded-xl p-6
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-lg
              "
            >
              <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-0.5" />

              <p className="text-sm font-medium text-gray-800 group-hover:text-gray-900">
                {item}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
     <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Industries We Serve
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <div
                key={index}
                className="
                  group bg-white border border-gray-300 rounded-2xl p-8
                  transition-all duration-300
                  hover:-translate-y-1 hover:shadow-lg
                "
              >
                <div
                  className="
                    w-12 h-12 rounded-full bg-blue-100
                    flex items-center justify-center mb-6
                    transition
                    group-hover:bg-blue-200
                  "
                >
                  <Icon className="w-6 h-6 text-blue-700" />
                </div>

                <h3 className="text-lg font-semibold text-gray-900">
                  {industry.title}
                </h3>
              </div>
            );
          })}
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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Performance Metrics We Optimize For
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;

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
                    text-lg font-semibold text-gray-900
                    group-hover:text-white
                  "
                >
                  {metric.title}
                </h3>
              </div>
            );
          })}
        </div>

        <p className="max-w-5xl text-lg text-gray-700 leading-relaxed">
          Our reporting goes beyond vanity metrics — we focus on{" "}
          <span className="font-semibold text-gray-900">
            numbers that directly impact your bottom line.
          </span>
        </p>

      </div>
    </section>
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* Left Side – Big Text */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Why Choose Us
          </h2>

          <p className="text-xl text-gray-700 mt-6 max-w-xl">
            We don’t rely on isolated tactics.
            <br />
            We build systems where creativity and performance work together.
          </p>
        </div>

        {/* Right Side – Bullet Points */}
        <div className="space-y-6">
          {points.map((point, index) => (
            <div
              key={index}
              className="flex items-start gap-4"
            >
              <CheckCircle className="w-6 h-6 text-green-600 mt-1 shrink-0" />
              <p className="text-lg text-gray-800 font-medium">
                {point}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
    <section className="bg-slate-50 py-24">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Let’s Scale Your Social Revenue
        </h2>

        <p className="text-lg text-gray-700 mb-6">
          Your audience is already online. <br />
          <span className="font-semibold text-gray-900">
            The question is — are you reaching them effectively?
          </span>
        </p>

        <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-10">
          Partner with{" "}
          <span className="font-semibold text-gray-900">
            Adkryoss managed by Clink Consultancy Services Private Limited
          </span>{" "}
          to build high-performing social advertising campaigns that deliver
          measurable growth.
        </p>

        <p className="text-xl font-semibold text-gray-900 mb-10">
          Ready to launch performance-driven paid social campaigns? <br />
          <span className="text-blue-700">
            Let’s build your next growth engine.
          </span>
        </p>

        <button
          className="
            bg-blue-700 text-white font-semibold
            px-8 py-4 rounded-full
            transition-all duration-300
            hover:bg-blue-800 hover:shadow-lg
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
