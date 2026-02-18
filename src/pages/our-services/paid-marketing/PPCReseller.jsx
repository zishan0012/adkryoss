import React from "react";
import seller from "../../../assets/reseller.jpg"
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
    <section
  className="relative py-16 md:py-20 lg:py-24 text-white bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')",
  }}
>
  {/* Overlay */}
  <div className="relative w-full px-6 sm:px-10 lg:px-24 xl:px-32">

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

    {/* LEFT CONTENT */}
    <div className="space-y-7 text-left max-w-2xl">

      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
        PPC Reseller
        <span className="block text-blue-200">
          Services
        </span>
      </h1>

      <p className="text-xl md:text-2xl font-semibold text-blue-100">
        Scale Faster. Deliver Smarter. Earn More.
      </p>

      <p className="text-blue-100 text-base md:text-lg leading-relaxed">
        White-label PPC solutions designed for agencies that want to grow
        without hiring in-house teams. Performance-focused, data-driven,
        and built to maximize ROI for your clients.
      </p>

      <div className="flex flex-col sm:flex-row gap-5 pt-3">
        <button
          className="w-full sm:w-auto bg-white text-blue-700 px-8 py-3 rounded-full font-semibold
          hover:bg-blue-100 hover:shadow-lg transition"
        >
          Partner With Us →
        </button>

        <button
          className="w-full sm:w-auto border border-white/70 px-8 py-3 rounded-full font-semibold
          hover:bg-white hover:text-blue-700 transition"
        >
          Explore Reseller Model →
        </button>
      </div>
    </div>

    {/* RIGHT IMAGE */}
    <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
      <img
        src={seller}
        alt="PPC Reseller Services"
        className="w-72 sm:w-80 md:w-96 lg:w-[480px] xl:w-[520px] object-contain drop-shadow-2xl"
      />
    </div>

  </div>
</div>

</section>

      <section className="bg-white py-16 md:py-20 lg:py-24">
  <div className="w-full px-6 sm:px-10 lg:px-20 xl:px-32">

    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-14">
      What You Get With Our PPC Reseller Program
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
      {resellerBenefits.map((item, index) => (
        <div
          key={index}
          className="
          group bg-white border border-gray-200 rounded-2xl
          p-8 transition-all duration-500
          hover:bg-teal-700 hover:-translate-y-1 hover:shadow-xl
        "
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-white">
            {item.title}
          </h3>

          <ul className="space-y-2 text-gray-700 group-hover:text-white/90">
            {item.points.map((point, i) => (
              <li key={i}>• {point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>

  </div>
</section>

     <section className="bg-gray-400 py-16 md:py-20 lg:py-24">
  <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-24">

    <div className="max-w-3xl mb-14">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Our PPC Reseller Framework
      </h2>
      <p className="text-white text-lg">
        We follow a structured, ROI-first working model designed for scalability.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
      {resellerFramework.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={index}
            className="
              group bg-white border border-gray-200 rounded-2xl
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

            <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-white">
              {item.title}
            </h3>

            <ul className="space-y-2 text-gray-700 group-hover:text-white/90">
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

      <section className="bg-white py-16 md:py-20 lg:py-24">
  <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-24">

    <div className="max-w-3xl mb-14">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Why Agencies Choose Us
      </h2>
      <p className="text-gray-600 text-lg">
        A delivery-first partnership model built to help agencies scale
        PPC services with confidence.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
      {agencyReasons.map((item, index) => (
        <div
          key={index}
          className="
            bg-white border border-gray-200
            rounded-2xl p-8
            hover:border-teal-600 transition duration-300
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

    <p className="text-gray-700 text-lg mt-14 max-w-5xl">
      <span className="font-semibold text-gray-900">
        Adkryoss managed by Clink Consultancy Services Private Limited
      </span>{" "}
      ensures that agencies can confidently pitch PPC services without
      worrying about delivery quality.
    </p>

  </div>
</section>

      <section className="bg-slate-50 py-16 md:py-20 lg:py-24">
  <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

    {/* LEFT SIDE */}
    <div className="space-y-6 max-w-2xl">
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

    {/* RIGHT SIDE */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-fr">
      {audiences.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={index}
            className="
              bg-white border border-gray-200 rounded-2xl
              p-6 flex items-start gap-4
              transition-all duration-300
              hover:-translate-y-1 hover:shadow-lg
              hover:border-blue-500
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

      <section className="bg-slate-200 py-16 md:py-20 lg:py-24">
  <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-24">

    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-14">
      Our Core PPC Services Under Reseller Model
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
      {resellerServices.map((service, index) => {
        const Icon = service.icon;
        return (
          <div
            key={index}
            className="
              group bg-white border border-gray-200 rounded-2xl
              p-8 transition-all duration-500
              hover:-translate-y-1 hover:shadow-xl
              hover:border-teal-600
            "
          >
            <div
              className="
                w-12 h-12 rounded-xl bg-gray-100
                flex items-center justify-center mb-6
                group-hover:bg-teal-600/20 transition
              "
            >
              <Icon className="w-6 h-6 text-teal-700 group-hover:text-teal-700" />
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {service.title}
            </h3>

            <p className="text-gray-700 leading-relaxed">
              {service.description}
            </p>
          </div>
        );
      })}
    </div>

  </div>
</section>

      <section className="bg-blue-50 py-16 md:py-20 lg:py-24">
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
      <section className="bg-slate-100 py-16 md:py-20 lg:py-24">
  <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-10">

    {/* Heading */}
    <div className="mb-16 max-w-4xl">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        What Makes Our Approach Modern
      </h2>
      <p className="text-gray-600 text-lg">
        Built for scale, privacy-first data, and performance clarity.
      </p>
    </div>

    {/* Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {modernApproach.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={index}
            className="
              bg-white border border-gray-200 rounded-2xl
              p-7 flex items-start gap-4
              transition-all duration-300
              hover:shadow-lg hover:-translate-y-1
              min-h-[110px]
            "
          >
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
              <Icon className="w-6 h-6 text-blue-700" />
            </div>

            <p className="font-medium text-gray-800 leading-snug">
              {item.title}
            </p>
          </div>
        );
      })}
    </div>

    {/* Bottom Text */}
    <p className="text-lg text-gray-800 mt-20 max-w-3xl">
      We build campaigns ready for the{" "}
      <span className="font-semibold text-gray-900">
        cookie-less future
      </span>.
    </p>

  </div>
</section>

     <section className="bg-blue-50 py-16 md:py-20 lg:py-24">
  <div className="w-full">

    <div className="px-0">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 px-6 md:px-10 lg:px-16">
        Seamless Communication Model
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14 px-6 md:px-10 lg:px-16">
      {communicationPoints.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={index}
            className="
              group bg-white border border-gray-300 rounded-2xl
              p-6 flex items-center gap-4
              transition-all duration-300
              hover:-translate-y-1 hover:shadow-lg
              hover:border-gray-500
            "
          >
            <div
              className="
                w-12 h-12 rounded-xl bg-blue-100
                flex items-center justify-center
                transition group-hover:bg-blue-200
              "
            >
              <Icon className="w-6 h-6 text-blue-700" />
            </div>

            <p className="text-gray-800 font-medium">{item.title}</p>
          </div>
        );
      })}
    </div>

    <div className="px-6 md:px-10 lg:px-16">
      <p className="text-2xl font-semibold text-gray-900">
        You focus on client acquisition.
      </p>
      <p className="text-3xl font-bold text-blue-700">
        We focus on client performance.
      </p>
    </div>

  </div>
</section>

      <section className="bg-blue-100">
  <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">

    {/* LEFT SIDE */}
    <div className="flex items-center">
      <div className="px-8 lg:px-16 py-16 md:py-20 lg:py-24 w-full">

        <h2 className="text-black text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Let’s Help You Scale Profitably
        </h2>

        <p className="text-lg text-blue-700 mb-8">
          If you’re looking to:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {resellerCTAPoints.map((point, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-500 mt-1 shrink-0" />
              <p className="text-lg text-gray-800">{point}</p>
            </div>
          ))}
        </div>

        <p className="text-xl font-semibold mb-6 text-gray-900">
          Then this partnership is your next strategic move.
        </p>

        <p className="text-gray-800 text-lg mb-8 max-w-xl">
          <span className="font-semibold">
            Adkryoss managed by Clink Consultancy Services Private Limited
          </span>{" "}
          is built to power agencies that want predictable growth in a
          competitive digital landscape.
        </p>

        <button
          className="
            bg-blue-700 text-white font-semibold
            px-8 py-4 rounded-full
            transition-all duration-300
            hover:bg-blue-800 hover:shadow-lg
          "
        >
          Become a PPC Reseller Partner →
        </button>

      </div>
    </div>

    {/* RIGHT SIDE IMAGE */}
    <div className="relative h-[400px] lg:h-auto">
      <img
        src="https://images.unsplash.com/photo-1551434678-e076c223a692"
        alt="PPC Growth Partnership"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>

  </div>
</section>


      <section className="bg-slate-50 py-16 md:py-20 lg:py-24">
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
