import React from "react";
import { useState } from "react";
import {
  Megaphone,
  Radar,
  BarChart4,
  Layout,
  LineChart,
  SearchCheck,
  Layers,
  Sliders,
  TrendingUp,
  CheckCircle,
  Plus, X
} from "lucide-react";

const amazonServices = [
  {
    title: "Sponsored Ads Management",
    desc: "We build structured campaign architectures focused on intent-based keyword targeting and profitability.",
    points: [
      "Sponsored Products",
      "Sponsored Brands",
      "Sponsored Display",
    ],
    icon: Megaphone,
  },
  {
    title: "DSP & Programmatic Advertising",
    desc: "Expand beyond Amazon search with advanced audience targeting using Amazon DSP.",
    points: [
      "High-intent audience targeting",
      "Cross-platform retargeting",
      "Prospecting & re-engagement",
    ],
    icon: Radar,
  },
  {
    title: "Marketplace Intelligence & Competitor Analysis",
    desc: "Uncover growth gaps by analyzing competitor ad strategies, pricing, and keyword bidding patterns.",
    points: [
      "Competitor ad intelligence",
      "Keyword bidding analysis",
      "Pricing & positioning insights",
    ],
    icon: BarChart4,
  },
  {
    title: "Listing & Conversion Optimization",
    desc: "Ads drive traffic. Listings drive sales. We optimize your storefront for maximum conversion.",
    points: [
      "Titles & keyword mapping",
      "A+ Content optimization",
      "Storefront experience",
      "Creative visuals",
      "Product descriptions",
    ],
    icon: Layout,
  },
  {
    title: "Performance Analytics & Attribution",
    desc: "Every decision is backed by data. We track performance metrics that matter to revenue.",
    points: [
      "ACOS / TACOS",
      "ROAS",
      "Impression share",
      "Conversion rates",
      "Lifetime value signals",
    ],
    icon: LineChart,
  },
];
const strategicApproach = [
  {
    title: "Deep Marketplace Audit",
    desc: "We audit campaigns, keyword clusters, product listings, competitor density, and sales history to identify inefficiencies and scaling opportunities.",
    icon: SearchCheck,
  },
  {
    title: "Structured Campaign Architecture",
    desc: "We build segmented campaigns based on funnel stage, match type, product category, and profit margin to maintain control and scalability.",
    icon: Layers,
  },
  {
    title: "Smart Bidding & Budget Allocation",
    desc: "Using AI-powered bid adjustments and profitability modeling, we reallocate budgets toward high-performing keywords and pause wasteful spends.",
    icon: Sliders,
  },
  {
    title: "Continuous Testing & Scaling",
    desc: "Amazon is dynamic. So are we. We continuously test creatives, placements, audience segments, and bidding models to scale what works.",
    icon: TrendingUp,
  },
];
const whyChooseAmazon = [
  "Performance-first mindset",
  "ROI-driven campaign frameworks",
  "Advanced keyword intelligence",
  "Marketplace-specific strategies",
  "Transparent reporting dashboards",
  "Data-backed growth decisions",
];
const faqs = [
  {
    question: "How long does it take to see results from Amazon Ads?",
    answer:
      "Typically 30–60 days to optimize and stabilize campaigns. Scaling begins once performance data matures.",
  },
  {
    question: "What budget is required?",
    answer:
      "Budgets vary based on competition and category. We recommend starting with a data-backed minimum viable spend aligned with your growth targets.",
  },
  {
    question: "Do you handle international marketplaces?",
    answer:
      "Yes. We manage campaigns across multiple Amazon marketplaces globally.",
  },
];
const AmazonAdvertising = () => {
    const [openIndex, setOpenIndex] = useState(null); 

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <section className="bg-linear-to-r from-blue-700 to-blue-900 py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-white">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Amazon Advertising Services
            </h1>

            <p className="text-xl font-semibold text-blue-100">
              Scale Faster. Sell Smarter. Dominate Amazon.
            </p>

            <p className="text-blue-100 text-lg max-w-xl">
              Turn product visibility into predictable revenue with
              performance-driven Amazon Advertising strategies. We combine data
              science, creative optimization, and marketplace intelligence to
              help you win the Buy Box, outrank competitors, and maximize ROAS.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold
              hover:bg-blue-100 hover:shadow-lg transition"
              >
                Speak to an Amazon Expert →
              </button>

              <button
                className="border border-white/70 px-6 py-3 rounded-full font-semibold
              hover:bg-white hover:text-blue-700 transition"
              >
                Our Amazon Services →
              </button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white/10 rounded-3xl p-4">
              <img
                src="/amazon-ads-hero.png"
                alt="Amazon Advertising Services"
                className="w-64 md:w-72 lg:w-80"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-blue-50 rounded-2xl p-10 max-w-5xl space-y-5">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Amazon Advertising Is a Growth Engine
          </h2>
          <p className="text-gray-700 text-lg">
            Amazon is no longer just a marketplace — it’s a{" "}
            <span className="font-semibold text-gray-900">
              search engine for buyers with intent.
            </span>{" "}
            Every click carries commercial value.
          </p>
          <p className="text-gray-700">
            But without structured campaigns, optimized listings, and smart
            bidding strategies, ad spend quickly turns into wasted budget.
          </p>
          <p className="text-gray-800 font-medium text-lg">
            That’s where{" "}
            <span className="text-blue-700">
              strategy meets performance.
            </span>
          </p>
          <p className="text-gray-700">
            <span className="font-semibold text-gray-900">
              Adkryoss managed by Clink Consultancy Services Private Limited
            </span>{" "}
            helps brands unlock scalable Amazon growth by aligning advertising
            with conversion optimization, pricing intelligence, and advanced
            analytics.
          </p>

        </div>

      </div>
    </section>
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Amazon Advertising Solutions
          </h2>
          <p className="text-gray-600 text-lg">
            Performance-driven Amazon advertising solutions designed to scale
            visibility, conversions, and long-term profitability.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amazonServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group flex flex-col justify-between min-h-105
                bg-white border border-blue-100 rounded-2xl p-8
                transition-all duration-500
                hover:bg-teal-700 hover:shadow-xl hover:-translate-y-1"
              >
                <div>
                  <div
                    className="w-12 h-12 rounded-full bg-gray-100
                    flex items-center justify-center mb-6
                    group-hover:bg-white/20 transition"
                  >
                    <Icon className="w-6 h-6 text-teal-700 group-hover:text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3
                    group-hover:text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4
                    group-hover:text-white/90">
                    {service.desc}
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600
                    group-hover:text-white/90">
                    {service.points.map((point, i) => (
                      <li key={i}>• {point}</li>
                    ))}
                  </ul>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
    <section className="bg-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Strategic Approach
          </h2>
          <p className="text-gray-600 text-lg">
            A structured, data-driven framework designed to scale Amazon
            advertising efficiently and profitably.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {strategicApproach.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="
                  bg-white border border-blue-100 rounded-2xl p-8
                  transition-all duration-300
                  hover:-translate-y-1 hover:shadow-lg
                "
              >
                <div className="w-12 h-12 rounded-full bg-blue-50
                  flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-blue-700" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us for Amazon Advertising?
          </h2>
          <p className="text-gray-600 text-lg">
            A strategic, performance-led approach designed to scale your Amazon
            revenue efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {whyChooseAmazon.map((item, index) => (
            <div
              key={index}
              className="
                flex items-start gap-4
                bg-white rounded-xl p-5
                border border-gray-200
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-md
              "
            >
              <CheckCircle className="w-6 h-6 text-green-500 mt-1 shrink-0" />
              <p className="text-gray-800 font-medium">
                {item}
              </p>
            </div>
          ))}
        </div>
        <div className="border-l-4 border-gray-900 rounded-xl p-6 max-w-4xl">
          <p className="text-gray-700 text-lg leading-relaxed">
            <span className="font-semibold text-gray-900">
              Adkryoss managed by Clink Consultancy Services Private Limited
            </span>{" "}
            does not treat Amazon as just an ad channel — we treat it as a{" "}
            <span className="font-semibold">
              full-scale revenue ecosystem.
            </span>
          </p>
        </div>

      </div>
    </section>
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          What Makes Our Framework Different?
        </h2>
        <div className="mb-8">
          <p className="text-gray-700 text-lg">
            Most agencies optimize ads.
          </p>
          <p className="text-xl font-semibold text-gray-900">
            We optimize revenue systems.
          </p>
        </div>
        <ul className="space-y-4 mb-8 text-gray-700 text-lg">
          <li>• Advertising performance</li>
          <li>• Listing conversion strategy</li>
          <li>• Pricing intelligence</li>
          <li>• Inventory planning alignment</li>
          <li>• Funnel-based audience segmentation</li>
        </ul>
        <p className="text-gray-700 text-lg">
          This ensures long-term brand equity and sustained profitability.
        </p>

      </div>
    </section>
    <section className="bg-blue-50 py-20">
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-blue-100"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center
                px-6 py-5 text-left"
              >
                <span className="font-semibold text-gray-900">
                  {faq.question}
                </span>

                <span className="ml-4">
                  {openIndex === index ? (
                    <X className="w-5 h-5 text-blue-700" />
                  ) : (
                    <Plus className="w-5 h-5 text-blue-700" />
                  )}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
    <section className="bg-linear-to-r from-blue-700 to-blue-900 py-20">
      <div className="max-w-5xl mx-auto px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Dominate Amazon?
        </h2>
        <p className="text-lg text-blue-100 mb-8 max-w-3xl mx-auto">
          If you want structured growth, optimized spending, and measurable
          revenue impact — it’s time to build your Amazon advertising engine
          with experts who understand both performance marketing and
          marketplace psychology.
        </p>

        <p className="text-white font-semibold mb-10">
          Let’s turn your Amazon store into a scalable profit channel.
        </p>

        <div>
          <button
            className="
              bg-white text-blue-700 font-semibold
              px-8 py-4 rounded-full
              hover:bg-blue-100
              transition-all duration-300
              hover:shadow-xl
            "
          >
            Speak to an Amazon Advertising Expert →
          </button>
        </div>

      </div>
    </section>
    </>
  );
};

export default AmazonAdvertising;
