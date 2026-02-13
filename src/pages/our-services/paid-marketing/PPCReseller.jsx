import React from "react";
import {
  Target,
  Search,
  LayoutGrid,
  TrendingUp,
  BarChart3,
  Briefcase,
  Code,
  UserCog,
  Globe,
  ShoppingCart,
  Repeat,
  Layout,
  CheckCircle,
  Cpu,
  Database,
  Link,
  BarChart4,
  Layers,
  LineChart,
  UserCheck,
  Zap,
  MessageSquare,
  CalendarCheck,
  ClipboardList,
} from "lucide-react";
const resellerBenefits = [
  {
    title: "White-Label Execution",
    points: [
      "Your clients see your brand.",
      "We operate invisibly while delivering enterprise-level campaign management.",
    ],
  },
  {
    title: "Multi-Platform Expertise",
    points: [
      "Google Search & Display Ads",
      "Performance Max Campaigns",
      "YouTube Advertising",
      "Meta (Facebook & Instagram) Ads",
      "LinkedIn Ads",
      "E-commerce PPC (Shopping & Feed Optimization)",
    ],
  },
  {
    title: "Data-Driven Optimization",
    points: [
      "Conversion rate improvement",
      "Audience intent mapping",
      "Smart bidding strategies",
      "AI-based performance tracking",
      "Continuous A/B testing",
    ],
  },
  {
    title: "Transparent Reporting",
    points: [
      "Branded reports with actionable insights",
      "Focus on growth metrics — not vanity metrics",
    ],
  },
];
const resellerFramework = [
  {
    title: "Strategic Onboarding",
    icon: Target,
    points: [
      "Understanding your agency model, niche, and target markets",
      "Defining positioning, KPIs, and expected ROI benchmarks",
    ],
  },
  {
    title: "Research & Funnel Mapping",
    icon: Search,
    points: [
      "Keyword intent analysis",
      "Competitor study",
      "Audience segmentation",
      "Conversion-focused funnel structuring",
    ],
  },
  {
    title: "Campaign Architecture & Launch",
    icon: LayoutGrid,
    points: [
      "Budget efficiency alignment",
      "Intent-based targeting",
      "High-converting ad copy",
      "Optimized landing experience",
    ],
  },
  {
    title: "Performance Optimization",
    icon: TrendingUp,
    points: [
      "CPA reduction",
      "CTR improvement",
      "Quality score enhancement",
      "Scaling profitable campaigns",
    ],
  },
  {
    title: "White-Label Reporting & Strategy Calls",
    icon: BarChart3,
    points: [
      "Clear performance dashboards",
      "Growth insights & recommendations",
      "Fully branded under your agency identity",
    ],
  },
];
const agencyReasons = [
  {
    title: "Performance-Focused Approach",
    description:
      "We align campaigns to real business objectives — leads, sales, and revenue — not vanity metrics like impressions or clicks.",
  },
  {
    title: "Dedicated PPC Specialists",
    description:
      "No junior experimentation. Every account is handled by certified PPC professionals with proven performance experience.",
  },
  {
    title: "Scalable Infrastructure",
    description:
      "Whether you manage 5 clients or 50, our backend systems, processes, and team scale seamlessly with your agency.",
  },
  {
    title: "Profit-Driven Model",
    description:
      "High-margin white-label pricing designed specifically to support long-term agency growth and profitability.",
  },
];

const audiences = [
  {
    title: "Digital Marketing Agencies",
    icon: Briefcase,
  },
  {
    title: "SEO Agencies Expanding to Paid Media",
    icon: Search,
  },
  {
    title: "Web Development Agencies",
    icon: Code,
  },
  {
    title: "Freelancers Scaling to Agency Model",
    icon: UserCog,
  },
  {
    title: "International Agencies Looking for Cost-Efficient Delivery Teams",
    icon: Globe,
  },
];
const resellerServices = [
  {
    title: "Google Ads Management",
    description:
      "Search, Display, Performance Max, Shopping — fully conversion optimized.",
    icon: Search,
  },
  {
    title: "E-commerce PPC",
    description:
      "Feed optimization, product segmentation, and ROAS-focused bidding strategies.",
    icon: ShoppingCart,
  },
  {
    title: "Lead Generation Campaigns",
    description:
      "High-intent targeting combined with landing page optimization support.",
    icon: Target,
  },
  {
    title: "Remarketing & Funnel Retargeting",
    description:
      "Multi-touch retargeting strategies that significantly improve conversion rates.",
    icon: Repeat,
  },
  {
    title: "Landing Page Consultation",
    description: "Because traffic without conversion is wasted spend.",
    icon: Layout,
  },
];
const philosophyPoints = [
  "Customer intent signals",
  "Smart automation integration",
  "Predictive audience modeling",
  "Budget reallocation based on real-time performance",
  "Continuous testing culture",
];
const modernApproach = [
  { title: "AI-driven bidding optimization", icon: Cpu },
  { title: "Performance Max integration strategies", icon: TrendingUp },
  { title: "First-party data activation", icon: Database },
  { title: "Conversion API implementation support", icon: Link },
  { title: "GA4 advanced event tracking setup", icon: BarChart4 },
  { title: "Funnel-based campaign structuring", icon: Layers },
  { title: "Performance forecasting models", icon: LineChart },
];
const communicationPoints = [
  {
    title: "Dedicated Account Manager",
    icon: UserCheck,
  },
  {
    title: "Quick turnaround time",
    icon: Zap,
  },
  {
    title: "Slack / Email support",
    icon: MessageSquare,
  },
  {
    title: "Monthly growth strategy calls",
    icon: CalendarCheck,
  },
  {
    title: "Clear SOP-driven execution",
    icon: ClipboardList,
  },
];
const resellerCTAPoints = [
  "Add PPC services without hiring",
  "Increase average client billing",
  "Improve client retention",
  "Build a scalable agency model",
];
const PPCReseller = () => {
  return (
    <>
      <section className="bg-linear-to-r from-blue-700 to-blue-900 py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-white">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              PPC Reseller Services
            </h1>

            <p className="text-xl font-semibold text-blue-100">
              Scale Faster. Deliver Smarter. Earn More.
            </p>

            <p className="text-blue-100 text-lg max-w-xl">
              White-label PPC solutions designed for agencies that want to grow
              without hiring in-house teams. Performance-focused, data-driven,
              and built to maximize ROI for your clients.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold
              hover:bg-blue-100 hover:shadow-lg transition"
              >
                Partner With Us →
              </button>

              <button
                className="border border-white/70 px-6 py-3 rounded-full font-semibold
              hover:bg-white hover:text-blue-700 transition"
              >
                Explore Reseller Model →
              </button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="bg-white/10 rounded-3xl p-4">
              <img
                src="/ppc-reseller-hero.png"
                alt="PPC Reseller Services"
                className="w-64 md:w-72 lg:w-80"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-blue-50 border border-blue-200 rounded-3xl p-10 max-w-5xl space-y-5">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Why PPC Reselling Is the Smartest Growth Move
            </h2>

            <p className="text-gray-700 text-lg">
              Today’s agencies are expected to deliver measurable results across{" "}
              <span className="font-semibold text-gray-900">
                Google Ads, Meta Ads, LinkedIn Ads, and emerging paid channels.
              </span>{" "}
              But building an expert in-house PPC team demands time, capital,
              and constant upskilling.
            </p>

            <p className="text-gray-700 text-lg">
              With{" "}
              <span className="font-semibold text-gray-900">
                Adkryoss managed by Clink Consultancy Services Private Limited
              </span>
              , you unlock a fully managed PPC engine operating behind your
              brand — allowing you to expand services, improve client retention,
              and boost margins without operational stress.
            </p>

            <p className="text-gray-800 font-semibold text-lg">
              We don’t just run ads.
            </p>

            <p className="text-blue-700 font-semibold text-xl">
              We engineer revenue pipelines.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-14">
            What You Get With Our PPC Reseller Program
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resellerBenefits.map((item, index) => (
              <div
                key={index}
                className="
                group bg-white border border-blue-100 rounded-2xl
                p-8 transition-all duration-500
                hover:bg-teal-700 hover:-translate-y-1 hover:shadow-xl
              "
              >
                <h3
                  className="
                  text-xl font-semibold text-gray-900 mb-4
                  group-hover:text-white
                "
                >
                  {item.title}
                </h3>

                <ul
                  className="
                  space-y-2 text-gray-700
                  group-hover:text-white/90
                "
                >
                  {item.points.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-gray-400 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our PPC Reseller Framework
            </h2>
            <p className="text-white text-lg">
              We follow a structured, ROI-first working model designed for
              scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resellerFramework.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="
                  group bg-white border border-blue-100 rounded-2xl
                  p-8 transition-all duration-500
                  hover:bg-teal-700 hover:-translate-y-1 hover:shadow-xl
                "
                >
                  <div
                    className="
                    w-12 h-12 rounded-full bg-gray-100
                    flex items-center justify-center mb-6
                    group-hover:bg-white/20 transition
                  "
                  >
                    <Icon className="w-6 h-6 text-teal-700 group-hover:text-white" />
                  </div>

                  <h3
                    className="
                    text-xl font-semibold text-gray-900 mb-4
                    group-hover:text-white
                  "
                  >
                    {item.title}
                  </h3>

                  <ul
                    className="
                    space-y-2 text-gray-700
                    group-hover:text-white/90
                  "
                  >
                    {item.points.map((point, i) => (
                      <li key={i}>• {point}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Agencies Choose Us
            </h2>
            <p className="text-gray-600 text-lg">
              A delivery-first partnership model built to help agencies scale
              PPC services with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {agencyReasons.map((item, index) => (
              <div
                key={index}
                className="
                bg-white border border-gray-400
                rounded-2xl p-8
              "
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <p className="text-gray-700 text-lg mt-14 max-w-4xl">
            <span className="font-semibold text-gray-900">
              Adkryoss managed by Clink Consultancy Services Private Limited
            </span>{" "}
            ensures that agencies can confidently pitch PPC services without
            worrying about delivery quality.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Who Is This For?
            </h2>

            <p className="text-gray-700 text-lg">
              Our PPC Reseller model is designed for partners who want to scale
              service offerings without the operational burden of building
              in-house PPC teams.
            </p>

            <p className="text-lg text-gray-800 font-semibold">
              If you want to increase revenue without increasing overhead,
              <br />
              <span className="text-blue-700">
                this model is built for you.
              </span>
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {audiences.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="
                  bg-white border border-gray-400 rounded-2xl
                  p-6 flex items-start gap-4
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-lg
                  hover:border-gray-600
                  hover:bg-gray-50
                "
                >
                  <div
                    className="
                    w-12 h-12 rounded-xl bg-blue-50
                    flex items-center justify-center
                    shrink-0
                  "
                  >
                    <Icon className="w-6 h-6 text-blue-700" />
                  </div>

                  <p className="font-medium text-gray-800 leading-snug">
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-blue-50 border border-blue-200 rounded-3xl p-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              Our Core PPC Services Under Reseller Model
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resellerServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="
                    group bg-white border border-blue-100 rounded-2xl
                    p-8 transition-all duration-500
                    hover:bg-teal-700 hover:-translate-y-1 hover:shadow-xl
                  "
                  >
                    <div
                      className="
                      w-12 h-12 rounded-xl bg-blue-100
                      flex items-center justify-center mb-6
                      group-hover:bg-white/20 transition
                    "
                    >
                      <Icon className="w-6 h-6 text-blue-700 group-hover:text-white" />
                    </div>

                    <h3
                      className="
                      text-xl font-semibold text-gray-900 mb-3
                      group-hover:text-white
                    "
                    >
                      {service.title}
                    </h3>

                    <p
                      className="
                      text-gray-700 leading-relaxed
                      group-hover:text-white/90
                    "
                    >
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-blue-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
            Our Performance Philosophy
          </h2>
          <div className="mb-12">
            <p className="text-2xl font-semibold text-gray-900 leading-snug">
              Clicks are easy.
            </p>
            <p className="text-3xl font-bold text-blue-700">
              Conversions are engineered.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <p className="text-lg text-gray-700 leading-relaxed">
              <span className="font-semibold text-gray-900">
                Adkryoss managed by Clink Consultancy Services Private Limited
              </span>{" "}
              focuses on building performance systems that convert intent into
              revenue — not just traffic.
            </p>
            <div className="space-y-4">
              {philosophyPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 shrink-0" />
                  <p className="text-gray-800 font-medium">{point}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="text-lg text-gray-800 mt-14 max-w-4xl">
            We combine <span className="font-semibold">AI-powered tools</span>{" "}
            with <span className="font-semibold">human strategic thinking</span>{" "}
            — creating sustainable performance growth.
          </p>
        </div>
      </section>
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Makes Our Approach Modern
            </h2>
            <p className="text-gray-600 text-lg">
              Built for scale, privacy-first data, and performance clarity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {modernApproach.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="
                  bg-white border border-gray-300 rounded-2xl
                  p-6 flex items-start gap-4
                "
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-blue-700" />
                  </div>

                  <p className="font-medium text-gray-800 leading-snug">
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>

          <p className="text-lg text-gray-800 mt-16 max-w-4xl">
            We build campaigns ready for the{" "}
            <span className="font-semibold text-gray-900">
              cookie-less future
            </span>
            .
          </p>
        </div>
      </section>
      <section className="bg-blue-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Seamless Communication Model
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
            {communicationPoints.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="
                  group bg-white border border-gray-300 rounded-2xl
                  p-6 flex items-center gap-4
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-lg
                  hover:border-gray-500
                "
                >
                  <div
                    className="
                    w-12 h-12 rounded-xl bg-blue-100
                    flex items-center justify-center
                    transition
                    group-hover:bg-blue-200
                  "
                  >
                    <Icon className="w-6 h-6 text-blue-700" />
                  </div>

                  <p className="text-gray-800 font-medium">{item.title}</p>
                </div>
              );
            })}
          </div>

          <div className="max-w-4xl">
            <p className="text-2xl font-semibold text-gray-900">
              You focus on client acquisition.
            </p>
            <p className="text-3xl font-bold text-blue-700">
              We focus on client performance.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-blue-50 py-24">
        <div className="max-w-6xl mx-auto px-6 text-white">
          <h2 className="text-black md:text-4xl font-bold mb-8">
            Let’s Help You Scale Profitably
          </h2>

          <p className="text-lg text-blue-700 mb-8">If you’re looking to:</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 max-w-4xl">
            {resellerCTAPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 shrink-0" />
                <p className="text-lg">{point}</p>
              </div>
            ))}
          </div>

          <p className="text-xl font-semibold mb-10 max-w-4xl">
            Then this partnership is your next strategic move.
          </p>

          <p className="text-black text-lg max-w-5xl mb-12">
            <span className="font-semibold text-shadow-black">
              Adkryoss managed by Clink Consultancy Services Private Limited
            </span>{" "}
            is built to power agencies that want predictable growth in a
            competitive digital landscape.
          </p>

          <button
            className="
            bg-white text-blue-700 font-semibold
            px-8 py-4 rounded-full
            transition-all duration-300
            hover:bg-blue-100 hover:shadow-xl
          "
          >
            Become a PPC Reseller Partner →
          </button>
        </div>
      </section>
      <section className="bg-slate-50 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Build Your PPC Revenue Engine?
          </h2>

          <p className="text-lg text-gray-700 mb-10">
            Let’s turn paid advertising into your most profitable service
            vertical.
          </p>

          <button
            className="
            bg-blue-700 text-white font-semibold
            px-8 py-4 rounded-full
            transition-all duration-300
            hover:bg-blue-800 hover:shadow-lg
          "
          >
            Start the Conversation →
          </button>
        </div>
      </section>
    </>
  );
};

export default PPCReseller;
