import React from "react";
import {
  Check,
  Database,
  TrendingUp,
  Bot,
  RefreshCcw,
  Search,
  Sparkles,
  Share2,
  Workflow,
  Cpu,
  Facebook,
  LineChart,
  BarChart3,
} from "lucide-react";
const aiFramework = [
  {
    step: "01",
    title: "Data Intelligence & Audit",
    desc: "We begin by analyzing your current digital footprint, audience signals, performance data, and competitor positioning. AI tools extract insights that humans often miss.",
    icon: Database,
  },
  {
    step: "02",
    title: "Predictive Strategy Development",
    desc: "Using machine learning models and historical data, we forecast trends, buying patterns, and conversion probabilities to build a future-ready strategy.",
    icon: TrendingUp,
  },
  {
    step: "03",
    title: "AI Implementation & Automation",
    desc: "From automated bidding to dynamic content personalization, we deploy AI systems that optimize campaigns continuously.",
    icon: Bot,
  },
  {
    step: "04",
    title: "Continuous Learning & Optimization",
    desc: "AI thrives on data. We monitor performance dashboards, adjust algorithms, and refine campaigns to ensure consistent growth.",
    icon: RefreshCcw,
  },
];
const aiServices = [
  {
    title: "AI-Driven SEO",
    desc: "We use AI-based keyword clustering, search intent analysis, and predictive ranking models to improve visibility.",
    points: [
      "Smart keyword mapping",
      "AI content optimization",
      "SERP trend forecasting",
      "Technical SEO automation",
      "Voice & semantic search optimization",
    ],
    result: "Higher rankings with lower manual effort.",
    icon: Search,
  },
  {
    title: "AI-Powered Performance Marketing",
    desc: "Advertising should not depend on manual tweaks. Our AI models automatically adjust bids, targeting, and creatives.",
    points: [
      "Automated bidding strategies",
      "Conversion probability modeling",
      "Dynamic creative optimization",
      "Smart budget allocation",
      "Cross-channel attribution modeling",
    ],
    result: "More conversions at optimized costs.",
    icon: TrendingUp,
  },
  {
    title: "AI Content & Personalization Engine",
    desc: "Generic content is outdated. Personalization wins. We deliver tailored messaging across channels.",
    points: [
      "Behavioral content targeting",
      "Predictive email campaigns",
      "AI chatbots & conversational marketing",
      "Dynamic landing pages",
      "Automated customer journey mapping",
    ],
    result: "Higher engagement and stronger brand loyalty.",
    icon: Sparkles,
  },
  {
    title: "AI-Powered Social Media Marketing",
    desc: "Social media algorithms evolve daily. We use AI tools to decode patterns and maximize engagement.",
    points: [
      "Audience sentiment analysis",
      "Smart posting schedules",
      "Trend prediction",
      "AI-generated ad creatives",
      "Influencer performance tracking",
    ],
    result:
      "Social media becomes a measurable revenue channel — not just visibility.",
    icon: Share2,
  },
  {
    title: "Marketing Automation & CRM Intelligence",
    desc: "We connect AI with your CRM to automate lead nurturing and sales funnels.",
    points: [
      "AI-based lead scoring",
      "Automated drip sequences",
      "Predictive sales insights",
      "Churn risk identification",
      "Customer lifecycle optimization",
    ],
    result: "Marketing and sales teams work smarter, not harder.",
    icon: Workflow,
  },
];
const industries = [
  "E-commerce",
  "Education & EdTech",
  "Real Estate",
  "Healthcare",
  "B2B Enterprises",
  "Startups & D2C Brands",
];
const techStack = [
  {
    title: "Google AI & Performance Max",
    desc: "AI-driven campaign automation, smart bidding, and predictive optimization across Google platforms.",
    icon: Cpu,
  },
  {
    title: "Meta AI Optimization Tools",
    desc: "Advanced audience targeting, creative optimization, and conversion learning across Meta channels.",
    icon: Facebook,
  },
  {
    title: "Predictive Analytics Engines",
    desc: "Forecast user behavior, conversion probability, and revenue trends using machine learning models.",
    icon: LineChart,
  },
  {
    title: "AI-based SEO Intelligence Platforms",
    desc: "Search intent analysis, keyword clustering, ranking prediction, and SERP behavior tracking.",
    icon: Search,
  },
  {
    title: "Marketing Automation Systems",
    desc: "Automated lead nurturing, lifecycle campaigns, CRM workflows, and personalization engines.",
    icon: Workflow,
  },
  {
    title: "Advanced Analytics & Attribution Tools",
    desc: "Multi-touch attribution, ROI mapping, funnel performance tracking, and real-time dashboards.",
    icon: BarChart3,
  },
];
const AIMarketing = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-linear-to-r from-blue-700 to-blue-900 text-white py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              AI-Powered Digital Marketing Agency for Smarter, Faster Growth
            </h1>

            <p className="text-blue-100 mb-6 max-w-xl">
              Grow your business with our AI Digital Marketing Services that
              deliver faster results, smarter campaigns, and more qualified
              leads for lasting success.
            </p>

            <div className="flex gap-4">
              <button className="bg-white text-blue-700 px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-100 hover:shadow-xl transition">
                Speak to an Expert →
              </button>
              <button className="border border-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-white hover:text-blue-700 transition">
                Our Services →
              </button>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-green-500 rounded-full w-56 h-56 absolute -z-10 right-6"></div>
            <div className="w-64 h-40 bg-white/10 rounded-xl flex items-center justify-center text-sm">
              AI Marketing
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-6 pt-6 text-sm text-gray-500">
        <span className="hover:text-blue-600 cursor-pointer">Home</span>
        <span className="mx-2">›</span>
        <span className="hover:text-blue-600 cursor-pointer">
          Digital Marketing
        </span>
        <span className="mx-2">›</span>
        <span className="text-gray-900 font-medium">AI Digital Marketing</span>
      </div>
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-blue-50 rounded-2xl p-10 max-w-5xl">
            <div className="space-y-5">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Why AI is Redefining Digital Marketing
              </h2>
              <p className="text-gray-700 text-lg">
                Traditional marketing reacts.{" "}
                <span className="font-semibold text-gray-900">
                  AI marketing predicts.
                </span>
              </p>
              <p className="text-gray-700">
                With intelligent algorithms, real-time data analysis, and
                automated optimization, AI-driven marketing helps brands:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li>• Predict customer behavior before it happens</li>
                <li>• Personalize experiences at scale</li>
                <li>• Optimize ad spend in real time</li>
                <li>• Improve conversion rates with data-backed decisions</li>
                <li>• Reduce customer acquisition costs</li>
                <li>• Increase lifetime value</li>
              </ul>
              <p className="text-gray-800 font-medium text-lg">
                AI doesn’t replace strategy —{" "}
                <span className="text-blue-700">it amplifies it.</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our AI-Powered Digital Marketing Framework
            </h2>
            <p className="text-gray-600 text-lg">
              We follow a performance-centric, data-first approach inspired by
              enterprise-level methodologies but customized for scalable
              business growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aiFramework.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group flex flex-col justify-between min-h-90
                rounded-2xl p-8 bg-white border border-blue-100
                transition-all duration-500
                hover:bg-teal-700 hover:shadow-xl hover:-translate-y-1"
                >
                  <div>
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center mb-6
                    bg-gray-100 group-hover:bg-white/20 transition"
                    >
                      <Icon className="w-6 h-6 text-teal-700 group-hover:text-white" />
                    </div>
                    <span className="text-sm font-semibold text-blue-600 group-hover:text-white/80">
                      {item.step}
                    </span>
                    <h3 className="text-lg font-semibold mt-2 mb-4 text-gray-900 group-hover:text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-600 group-hover:text-white/90">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-8">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center
                    border border-blue-200 text-blue-600
                    group-hover:bg-white group-hover:text-teal-700 transition"
                    >
                      →
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="max-w-3xl mt-14">
            <p className="text-gray-700 text-lg font-medium">
              At{" "}
              <span className="font-semibold text-gray-900">
                Adkryoss managed by Clink Consultancy Services Private Limited
              </span>
              , execution is not guesswork —{" "}
              <span className="text-blue-700">
                it is engineered performance.
              </span>
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our AI Digital Marketing Services
            </h2>
            <p className="text-gray-600 text-lg">
              AI-powered capabilities designed to automate, optimize, and scale
              your digital growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="group flex flex-col justify-between min-h-105
                rounded-2xl p-8 bg-white border border-blue-100
                transition-all duration-500
                hover:bg-teal-700 hover:shadow-xl hover:-translate-y-1"
                >
                  <div>
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center mb-6
                    bg-gray-100 group-hover:bg-white/20 transition"
                    >
                      <Icon className="w-6 h-6 text-teal-700 group-hover:text-white" />
                    </div>

                    <h3 className="text-lg font-semibold mb-3 text-gray-900 group-hover:text-white">
                      {service.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-gray-600 group-hover:text-white/90 mb-4">
                      {service.desc}
                    </p>

                    <ul className="space-y-2 text-sm text-gray-600 group-hover:text-white/90">
                      {service.points.map((point, i) => (
                        <li key={i}>• {point}</li>
                      ))}
                    </ul>

                    <p className="mt-4 text-sm font-medium text-gray-800 group-hover:text-white">
                      Result: {service.result}
                    </p>
                  </div>
                  <div className="mt-8">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center
                    border border-blue-200 text-blue-600
                    group-hover:bg-white group-hover:text-teal-700 transition"
                    >
                      →
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Industries We Empower
            </h2>

            <p className="text-gray-600 text-lg">
              Our AI-driven approach adapts across industries, enabling
              businesses to unlock smarter targeting, higher efficiency, and
              scalable growth.
            </p>

            <p className="text-gray-700">
              AI models are customized according to industry-specific buying
              behavior and customer psychology.
            </p>
          </div>

          <div className="space-y-4">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="flex items-center gap-6 bg-white border rounded-xl p-6
              hover:shadow-md transition"
              >
                <div
                  className="w-12 h-12 rounded-full bg-teal-700 text-white
                flex items-center justify-center font-semibold"
                >
                  {String(index + 1).padStart(2, "0")}
                </div>
                <p className="text-gray-900 font-medium text-lg">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              What Makes Us Different
            </h2>

            <p className="text-gray-600 text-lg">
              Unlike agencies that merely use AI tools,{" "}
              <span className="font-semibold text-gray-900">
                Adkryoss managed by Clink Consultancy Services Private Limited
              </span>{" "}
              builds strategy around AI intelligence.
            </p>

            <p className="text-gray-700">
              Our approach goes beyond automation. We design intelligent
              marketing systems where every decision is backed by data, aligned
              with business outcomes, and continuously optimized for growth.
            </p>
          </div>
          <div className="bg-blue-50 rounded-2xl p-10">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              We focus on:
            </h3>

            <ul className="space-y-4 text-gray-700">
              <li>• Data-backed decision making</li>
              <li>• Performance accountability</li>
              <li>• Scalable automation</li>
              <li>• Revenue-first mindset</li>
              <li>• Transparent reporting dashboards</li>
            </ul>
          </div>
        </div>
        <div className="max-w-3xl mx-auto px-6 mt-12">
          <p className="text-gray-800 text-lg font-medium text-center">
            Our approach blends{" "}
            <span className="text-blue-700">human creativity</span> with{" "}
            <span className="text-blue-700">machine precision.</span>
          </p>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technology Stack We Leverage
            </h2>

            <p className="text-gray-600 text-lg">
              We integrate cutting-edge AI platforms to power scalable,
              accurate, and performance-driven digital marketing.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStack.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-blue-100 rounded-2xl p-8
                hover:shadow-lg transition"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-blue-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {tool.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {tool.desc}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="max-w-3xl mt-14">
            <p className="text-gray-700 text-lg font-medium">
              Technology is only powerful when guided by strategy.{" "}
              <span className="text-blue-700">That’s where we excel.</span>
            </p>
          </div>
        </div>
      </section>
      <section className="bg-linear-to-b from-blue-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            The Future of Marketing is AI-First
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Consumer behavior is evolving rapidly. Manual marketing cannot keep
            up with real-time decision-making cycles. Businesses that delay AI
            adoption risk falling behind competitors who automate faster and
            personalize better.
          </p>
          <p className="text-gray-800 text-lg font-medium">
            At{" "}
            <span className="font-semibold text-gray-900">
              Adkryoss managed by Clink Consultancy Services Private Limited
            </span>
            , we don’t just implement AI — we build{" "}
            <span className="text-blue-700">intelligent growth systems</span>{" "}
            that scale with your ambition.
          </p>
        </div>
      </section>
      <section className="bg-linear-to-r from-blue-700 to-blue-900 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center text-white space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Let’s Build an Intelligent Growth Engine
          </h2>
          <p className="text-blue-100 text-lg">
            Ready to transform your digital marketing with AI precision?
          </p>
          <p className="text-blue-100 text-lg">
            Partner with a team that combines{" "}
            <span className="font-semibold text-white">
              strategy, technology, and performance
            </span>{" "}
            under one roof.
          </p>
          <p className="text-blue-100 text-lg">
            Consult with our AI marketing experts today and unlock{" "}
            <span className="font-semibold text-white">predictive growth.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button
              className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold
            hover:bg-blue-100 hover:shadow-lg transition"
            >
              Book a Strategy Call
            </button>

            <button
              className="border border-white/60 px-8 py-3 rounded-full font-semibold
            hover:bg-white hover:text-blue-700 transition"
            >
              Talk to an Expert
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AIMarketing;
