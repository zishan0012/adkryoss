import React from "react";
import DigitalMarketingImage from "../../../assets/DigitalMarketing.png";
import {
  Search,
  Bot,
  Brain,
  ScanSearch,
  MousePointerClick,
  PenLine,
  TrendingUp,
  Target,
  UserCheck,
  BarChart3,
  Layers,
  Cpu,
  Building2,
  HeartPulse,
  GraduationCap,
  ShoppingCart,
  Landmark,
  Hotel,
  Briefcase,
  LineChart,
  Database,
  Workflow,
  Repeat,
  BarChartBig,
} from "lucide-react";

const services = [
  {
    title: "Search Engine Optimization (SEO)",
    description:
      "We improve search visibility and rankings through technical SEO, content authority, and high-quality link building to drive sustainable organic growth.",
    icon: Search,
  },
  {
    title: "AI Digital Marketing",
    description:
      "Leverage AI-driven automation and data insights to optimize targeting, campaigns, and ROI across your digital marketing ecosystem.",
    icon: Bot,
  },
  {
    title: "LLM Optimization",
    description:
      "Optimize your brand for AI-powered search platforms like ChatGPT, Gemini, and Perplexity to increase discoverability and authority.",
    icon: Brain,
  },
  {
    title: "AI SEO",
    description:
      "AI-powered SEO strategies that analyze large datasets, search intent, and algorithm signals to deliver higher rankings and measurable growth.",
    icon: ScanSearch,
  },
  {
    title: "Pay Per Click Advertising",
    description:
      "We create, manage, and optimize high-performing PPC campaigns to drive quality traffic, conversions, and higher ROI.",
    icon: MousePointerClick,
  },
  {
    title: "Content Writing",
    description:
      "From blogs to press releases, we create high-quality content that builds credibility, engages audiences, and drives conversions.",
    icon: PenLine,
  },
];

const strategySteps = [
  {
    step: "01",
    title: "Discovery & Market Intelligence",
    desc: "Deep competitor research, industry benchmarking, audience profiling.",
  },
  {
    step: "02",
    title: "Growth Blueprint",
    desc: "Channel selection, funnel planning, and revenue forecasting.",
  },
  {
    step: "03",
    title: "Agile Execution",
    desc: "Campaign launch with continuous A/B testing and optimization.",
  },
  {
    step: "04",
    title: "Data & Analytics",
    desc: "Real-time dashboards, performance tracking, ROI mapping.",
  },
  {
    step: "05",
    title: "Scale & Expansion",
    desc: "We double down on what works and eliminate what doesn’t.",
  },
];
const reasons = [
  {
    icon: TrendingUp,
    text: "Performance-driven execution",
  },
  {
    icon: Target,
    text: "ROI-focused strategies",
  },
  {
    icon: UserCheck,
    text: "Dedicated account managers",
  },
  {
    icon: BarChart3,
    text: "Transparent reporting systems",
  },
  {
    icon: Layers,
    text: "Cross-channel expertise",
  },
  {
    icon: Cpu,
    text: "AI-driven analytics integration",
  },
];
const industries = [
  { name: "Real Estate", icon: Building2 },
  { name: "Healthcare", icon: HeartPulse },
  { name: "Education", icon: GraduationCap },
  { name: "E-commerce", icon: ShoppingCart },
  { name: "Technology", icon: Cpu },
  { name: "Finance", icon: Landmark },
  { name: "Hospitality", icon: Hotel },
  { name: "Professional Services", icon: Briefcase },
];

const capabilities = [
  { text: "AI-powered keyword clustering", icon: Brain },
  { text: "Predictive analytics", icon: LineChart },
  { text: "First-party data strategy", icon: Database },
  { text: "Marketing automation workflows", icon: Workflow },
  { text: "Funnel-based retargeting systems", icon: Repeat },
  { text: "Performance dashboards", icon: BarChartBig },
];
const DigitalMarketingServices = () => {
  return (
    <>
      {/* HERO SECTION */}
      {/* <section className="bg-linear-to-r from-blue-700 to-blue-900 text-white py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              Digital Marketing Services
            </h1>

            <h2 className="text-lg md:text-xl font-semibold mb-4 text-blue-100">
              Accelerate Growth. Maximize Visibility. Dominate Digital.
            </h2>

            <p className="text-sm md:text-base text-blue-100 mb-3">
              Your audience is online. Your competitors are investing. The real
              question is —{" "}
              <span className="font-semibold text-white">
                are you growing strategically?
              </span>
            </p>

            <p className="text-sm text-blue-100 mb-6 max-w-lg">
              Adkryoss managed by{" "}
              <span className="font-semibold text-white">
                Clink Consultancy Services Private Limited
              </span>{" "}
              delivers performance-focused digital marketing solutions that
              generate traffic, leads, and real revenue.
              <br />
              <span className="font-semibold text-white">
                We don’t chase clicks. We build growth systems.
              </span>
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
            <div className="bg-green-500 rounded-full w-56 h-56 absolute -z-10 right-4"></div>
            <div className="w-64 h-40 bg-white/10 rounded-xl flex items-center justify-center">
           <img className="" src={DigitalMarketingImage}  />
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

    <div className="space-y-6">
      <h1 className="text-4xl md:text-5xl font-bold">
        Digital Marketing Services
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-blue-200">
        Accelerate Growth. Maximize Visibility. Dominate Digital.
      </h2>
      <p className="text-white md:text-md leading-relaxed max-w-[600px]">
        Your audience is online. Your competitors are investing. The real question is — <span className="font-semibold">are you growing strategically?</span>
        <br />
        Adkryoss managed by <span className="font-semibold">Clink Consultancy Services Private Limited</span> delivers performance-focused digital marketing solutions that generate traffic, leads, and real revenue.
        <br />
        <span className="font-semibold">We don’t chase clicks. We build growth systems.</span>
      </p>

      <div className="flex flex-wrap gap-4">
        <button className="bg-white text-blue-700 px-5 py-2 rounded-full font-semibold hover:bg-blue-100 hover:shadow-xl transition">
          Speak to an Expert →
        </button>
        <button className="border border-white px-5 py-2 rounded-full font-semibold hover:bg-white hover:text-blue-700 transition">
          Our Services →
        </button>
      </div>
    </div>

    <div className="flex justify-center md:justify-end">
      <div className="w-full max-w-[400px] h-[260px] sm:h-[300px] md:h-[320px] flex items-center justify-center rounded-xl shadow-lg bg-white/10">
        <img src={DigitalMarketingImage} alt="Digital Marketing" className="max-w-full max-h-full object-contain rounded-xl" />
      </div>
    </div>
  </div>
  </section>



      {/* CONTENT + SERVICES */}
      <section className="bg-white">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-6 pt-6 text-sm text-gray-500">
          <span className="hover:text-blue-600 cursor-pointer">Home</span>
          <span className="mx-2">›</span>
          <span className="text-gray-900 font-medium">
            Digital Marketing Services
          </span>
        </div>

        {/* Intro */}
        <div className="max-w-4xl mx-auto px-6 pt-14 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Digital Marketing That Works Like a Revenue Engine
          </h2>

          <p className="text-gray-600 mb-4">
            Modern marketing is not about random campaigns. It’s about structured
            execution, data-backed decisions, and continuous optimization.
          </p>

          <p className="text-gray-600 mb-4">
            <span className="font-semibold text-gray-900">
              Adkryoss managed by Clink Consultancy Services Private Limited
            </span>{" "}
            combines strategy, creativity, and performance analytics to craft
            marketing ecosystems that convert visitors into customers and
            customers into loyal advocates.
          </p>

          <p className="text-gray-600">
            From startups to enterprises, we help businesses scale sustainably
            through intelligent digital execution.
          </p>
        </div>

        {/* Services Title */}
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
            Our Digital Marketing Services
          </h3>
        </div>

        {/* Cards */}
        <div className="max-w-7xl mx-auto px-6 pb-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group flex flex-col justify-between min-h-95 rounded-2xl p-8
                bg-white border border-blue-100
                transition-all duration-500 ease-out
                hover:bg-teal-700 hover:shadow-xl hover:-translate-y-1"
              >
                {/* Top */}
                <div>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6
                    bg-gray-100 group-hover:bg-white/20 transition">
                    <Icon className="w-6 h-6 text-teal-700 group-hover:text-white" />
                  </div>

                  <h4 className="text-lg font-semibold mb-4 text-gray-900 group-hover:text-white">
                    {service.title}
                  </h4>

                  <p className="text-sm leading-relaxed text-gray-600 group-hover:text-white/90">
                    {service.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="mt-8">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center
                    border border-blue-200 text-blue-600
                    transition
                    group-hover:bg-white group-hover:text-teal-700">
                    →
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Strategic Approach
          </h2>

          <p className="text-gray-600 mb-6 max-w-xl">
            Adkryoss managed by{" "}
            <span className="font-semibold text-gray-900">
              Clink Consultancy Services Private Limited
            </span>{" "}
            builds scalable marketing architectures — not temporary campaigns.
          </p>

          <p className="text-gray-600 max-w-xl">
            Every engagement follows a structured, data-backed process designed
            to deliver predictable growth and measurable ROI.
          </p>
        </div>
        <div className="space-y-6">
          {strategySteps.map((item, index) => (
            <div
              key={index}
              className="flex gap-6 p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition"
            >
              <div className="shrink-0">
                <div className="w-12 h-12 rounded-full bg-teal-700 text-white flex items-center justify-center font-semibold">
                  {item.step}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Businesses Choose Us
          </h2>

          <p className="text-gray-600 max-w-xl">
            We combine creative thinking with analytical precision to deliver
            marketing systems that scale, perform, and generate predictable
            revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-4 p-4 border rounded-xl hover:shadow-lg transition"
              >
                <div className="w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <p className="text-gray-800 font-medium">{item.text}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>

    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Industries We Serve
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Every industry has different customer behavior patterns.  
          We design strategies accordingly.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className="group bg-white border rounded-2xl p-6 flex flex-col items-center
                hover:shadow-lg hover:-translate-y-1 transition"
              >
                <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-4
                  group-hover:bg-blue-700 transition hover:bg-amber-300" >
                  <Icon className="w-6 h-6 text-red-300 group-hover:text-white" />
                </div>

                <p className="text-gray-900 font-medium text-sm">
                  {industry.name}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>

        <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Modern Digital Marketing Capabilities
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          We integrate the latest advancements to build intelligent, scalable,
          and performance-driven marketing systems.
        </p>
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group flex items-center gap-3 px-6 py-4 rounded-full
                border border-blue-200 bg-blue-50
                hover:bg-blue-700 hover:border-blue-700
                transition"
              >
                <Icon className="w-5 h-5 text-blue-700 group-hover:text-white" />
                <span className="text-sm font-medium text-blue-900 group-hover:text-white">
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>
        <p className="text-gray-700 max-w-2xl mx-auto font-medium">
          Digital marketing is evolving.  
          <span className="text-blue-700"> We stay ahead — so you stay ahead.</span>
        </p>

      </div>
    </section>
    <section className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Results That Matter
        </h2>

        {/* Paragraph */}
        <p className="text-gray-600 text-lg leading-relaxed mb-12">
          We measure success through meaningful business outcomes — including
          organic growth percentage, cost per lead reduction, customer
          acquisition cost optimization, conversion rate improvement, and
          long-term revenue scalability. Every metric we track is directly tied
          to sustainable business growth, not vanity numbers.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-2xl px-8 py-6">
          <p className="text-blue-900 font-medium text-lg">
            Adkryoss managed by{" "}
            <span className="font-semibold">
              Clink Consultancy Services Private Limited
            </span>{" "}
            aligns marketing KPIs with business KPIs.
          </p>
        </div>

      </div>
    </section>
    <section className="bg-linear-to-r from-blue-800 to-blue-900 py-20">
      <div className="max-w-5xl mx-auto px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Let’s Build Your Growth Engine
        </h2>
        <p className="text-blue-100 text-lg mb-6">
          If you are looking for a digital marketing partner that understands
          both strategy and execution — we are ready.
        </p>
        <p className="text-xl font-medium mb-10 text-white" >
          Not just to market your business. <br />
          <span className="font-semibold text-white">But to scale it.</span>
        </p>
        <button className="bg-white text-blue-800 px-8 py-3 rounded-full text-sm md:text-base font-semibold
          hover:bg-blue-100 hover:shadow-xl transition">
          Book a Strategy Consultation →
        </button>
        <p className="text-blue-200 text-sm mt-6">
          Take the first step toward sustainable digital growth.
        </p>

      </div>
    </section>
    </>
  );
};

export default DigitalMarketingServices;
